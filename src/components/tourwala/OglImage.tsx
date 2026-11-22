import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const vertex = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragment = `
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uMouse;
uniform float uScroll;
uniform float uImgAspect;
uniform sampler2D uTexture;
varying vec2 vUv;

void main() {
  vec2 uv = vUv;
  float screenAspect = uRes.x / uRes.y;

  if (screenAspect > uImgAspect) {
    float s = uImgAspect / screenAspect;
    uv.y = (uv.y - 0.5) * s + 0.5;
  } else {
    float s = screenAspect / uImgAspect;
    uv.x = (uv.x - 0.5) * s + 0.5;
  }

  float zoom = 1.04 + uScroll * 0.08;
  uv = (uv - 0.5) / zoom + 0.5;

  vec2 m = uMouse - 0.5;
  float dist = length(m);
  float wave = sin(uv.x * 11.0 + uTime * 0.55) * sin(uv.y * 8.0 - uTime * 0.42);
  wave += sin((uv.x + uv.y) * 16.0 + uTime * 0.25) * 0.35;
  uv += vec2(wave) * 0.0032;
  uv += m * 0.018 * smoothstep(0.0, 0.8, dist + 0.18);

  float shift = 0.0014 + dist * 0.0045;
  float r = texture2D(uTexture, uv + vec2(shift, 0.0)).r;
  float g = texture2D(uTexture, uv).g;
  float b = texture2D(uTexture, uv - vec2(shift, 0.0)).b;
  vec3 col = vec3(r, g, b);

  col = pow(col, vec3(0.98, 1.0, 1.03));
  col *= vec3(1.04, 0.995, 0.94);

  float vig = smoothstep(1.05, 0.28, length(vUv - 0.5));
  col *= mix(0.66, 1.0, vig);

  gl_FragColor = vec4(col, 1.0);
}
`;

export function OglImage({
  src,
  alt,
  className,
  imageClassName,
}: {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(max-width: 1023px), (pointer: coarse)").matches) return;

    let disposed = false;
    let cleanup: (() => void) | null = null;
    let started = false;
    const image = new Image();
    image.decoding = "async";
    image.src = src;

    const start = async () => {
      if (disposed || started || !image.complete || image.naturalWidth === 0) return;
      started = true;
      try {
        const { Mesh, Program, Renderer, Texture, Triangle } = await import("ogl");
        if (disposed) return;

        const width = wrap.clientWidth;
        const height = wrap.clientHeight;
        if (!width || !height) return;

        const renderer = new Renderer({
          canvas,
          width,
          height,
          dpr: Math.min(window.devicePixelRatio || 1, 1.5),
          alpha: false,
          antialias: false,
          powerPreference: "high-performance",
        });
        const gl = renderer.gl;
        const texture = new Texture(gl, {
          image,
          generateMipmaps: false,
          flipY: true,
        });
        const program = new Program(gl, {
          vertex,
          fragment,
          uniforms: {
            uTime: { value: 0 },
            uRes: { value: [width, height] },
            uMouse: { value: [0.5, 0.5] },
            uScroll: { value: 0 },
            uImgAspect: { value: image.width / image.height },
            uTexture: { value: texture },
          },
        });
        const mesh = new Mesh(gl, { geometry: new Triangle(gl), program });
        const mouse = { x: 0.5, y: 0.5 };
        const target = { x: 0.5, y: 0.5 };
        const startedAt = performance.now();
        let visible = true;
        let running = false;
        let frame = 0;
        let lastPaint = 0;

        const paint = () => {
          if (!program || !mesh) return;
          program.uniforms["uTime"].value = (performance.now() - startedAt) / 1000;
          program.uniforms["uMouse"].value = [mouse.x, mouse.y];
          program.uniforms["uScroll"].value = Math.min(
            1,
            window.scrollY / Math.max(1, window.innerHeight),
          );
          renderer.render({ scene: mesh });
        };

        const loop = (now: number) => {
          if (!running) return;
          frame = requestAnimationFrame(loop);
          if (now - lastPaint < 1000 / 60) return;
          lastPaint = now;
          mouse.x += (target.x - mouse.x) * 0.05;
          mouse.y += (target.y - mouse.y) * 0.05;
          paint();
        };

        const startLoop = () => {
          if (running || !visible || document.hidden) return;
          running = true;
          lastPaint = 0;
          frame = requestAnimationFrame(loop);
        };
        const stopLoop = () => {
          running = false;
          cancelAnimationFrame(frame);
        };

        const onPointerMove = (event: PointerEvent) => {
          const rect = wrap.getBoundingClientRect();
          target.x = (event.clientX - rect.left) / rect.width;
          target.y = 1 - (event.clientY - rect.top) / rect.height;
        };

        const resize = () => {
          const w = wrap.clientWidth;
          const h = wrap.clientHeight;
          if (!w || !h) return;
          renderer.setSize(w, h);
          program.uniforms["uRes"].value = [w, h];
          paint();
        };

        const observer = new ResizeObserver(resize);
        observer.observe(wrap);

        const io = new IntersectionObserver(
          ([entry]) => {
            visible = Boolean(entry?.isIntersecting);
            if (visible) startLoop();
            else stopLoop();
          },
          { rootMargin: "200px" },
        );
        io.observe(wrap);

        const onVisibility = () => {
          if (document.hidden) stopLoop();
          else startLoop();
        };

        window.addEventListener("pointermove", onPointerMove, { passive: true });
        document.addEventListener("visibilitychange", onVisibility);

        resize();
        canvas.dataset["ready"] = "true";
        startLoop();

        cleanup = () => {
          stopLoop();
          observer.disconnect();
          io.disconnect();
          window.removeEventListener("pointermove", onPointerMove);
          document.removeEventListener("visibilitychange", onVisibility);
          const ext = gl.getExtension("WEBGL_lose_context");
          ext?.loseContext();
        };
      } catch {
        canvas.dataset["ready"] = "false";
      }
    };

    if (image.complete && image.naturalWidth > 0) void start();
    else {
      image.onload = () => void start();
      image.onerror = () => {
        canvas.dataset["ready"] = "false";
      };
    }

    return () => {
      disposed = true;
      image.onload = null;
      cleanup?.();
    };
  }, [src]);

  return (
    <div ref={wrapRef} className={cn("absolute inset-0 overflow-hidden", className)}>
      <img
        src={src}
        alt={alt}
        className={cn("h-full w-full object-cover", imageClassName)}
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-700 data-[ready=true]:opacity-100"
      />
    </div>
  );
}

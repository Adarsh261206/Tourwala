import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import rajasthanImg from "@/assets/dest-rajasthan.jpg";
import keralaImg from "@/assets/dest-kerala.jpg";
import ladakhImg from "@/assets/dest-ladakh.jpg";
import kashmirImg from "@/assets/dest-kashmir.jpg";
import varanasiImg from "@/assets/dest-varanasi.jpg";
import { loadGsap } from "@/lib/gsap";
import { getDestination, inr } from "@/lib/tourwala-data";

const scenes = [
  {
    slug: "rajasthan",
    src: rajasthanImg,
    name: "Rajasthan",
    line: "Forts before breakfast, lakes after sunset.",
    note: "Palaces · Desert · Colour",
  },
  {
    slug: "kerala",
    src: keralaImg,
    name: "Kerala",
    line: "A holiday that teaches you to slow down.",
    note: "Backwaters · Tea hills · Coast",
  },
  {
    slug: "ladakh",
    src: ladakhImg,
    name: "Ladakh",
    line: "Thin air, wide roads, no noise.",
    note: "High passes · Monasteries · Lakes",
  },
  {
    slug: "kashmir",
    src: kashmirImg,
    name: "Kashmir",
    line: "Still water, tall chinars, slow shikaras.",
    note: "Houseboats · Meadows · Valleys",
  },
  {
    slug: "varanasi",
    src: varanasiImg,
    name: "Varanasi",
    line: "The oldest city, made easy.",
    note: "Ghats · Darshan · Ganga",
  },
];

function drawCover(
  context: CanvasRenderingContext2D,
  image: HTMLImageElement,
  width: number,
  height: number,
  zoom: number,
  panX: number,
  panY: number,
) {
  if (!image.complete || image.naturalWidth === 0) return;
  const scale = Math.max(width / image.naturalWidth, height / image.naturalHeight) * zoom;
  const drawWidth = image.naturalWidth * scale;
  const drawHeight = image.naturalHeight * scale;
  context.drawImage(
    image,
    (width - drawWidth) / 2 + panX,
    (height - drawHeight) / 2 + panY,
    drawWidth,
    drawHeight,
  );
}

export function IndiaFilm() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const progressRef = useRef(0);
  const [active, setActive] = useState(0);
  const [ready, setReady] = useState(false);
  const [lite, setLite] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(
      "(max-width: 1023px), (pointer: coarse), (prefers-reduced-motion: reduce)",
    );
    const update = () => setLite(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (lite) return;
    if (
      window.matchMedia("(max-width: 1023px), (pointer: coarse), (prefers-reduced-motion: reduce)")
        .matches
    ) {
      return;
    }
    const section = sectionRef.current;
    const stage = stageRef.current;
    const canvas = canvasRef.current;
    if (!section || !stage || !canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    let disposed = false;
    let trigger: { kill: () => void } | null = null;
    let resizeObserver: ResizeObserver | null = null;
    let imageObserver: IntersectionObserver | null = null;
    let width = stage.clientWidth;
    let height = stage.clientHeight;
    let drawFrame = 0;
    let pendingProgress = 0;
    let imagesStarted = false;
    let loadedCount = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const images: HTMLImageElement[] = [];

    const draw = (progress: number) => {
      progressRef.current = progress;
      if (!width || !height) return;
      context.clearRect(0, 0, width, height);
      context.fillStyle = "#431010";
      context.fillRect(0, 0, width, height);
      if (images.length === 0) return;

      const scaled = Math.max(0, Math.min(1, progress)) * (images.length - 1);
      const index = Math.min(images.length - 2, Math.floor(scaled));
      const blend = scaled - index;
      const current = images[index];
      const next = images[index + 1];

      if (current) {
        context.globalAlpha = 1;
        drawCover(context, current, width, height, 1.08 + index * 0.008, Math.sin(index) * 8, 0);
      }
      if (next && blend > 0) {
        context.globalAlpha = Math.min(1, blend);
        drawCover(context, next, width, height, 1.16 - blend * 0.06, Math.cos(index) * -8, 0);
      }
      context.globalAlpha = 1;
    };

    const scheduleDraw = (progress: number) => {
      pendingProgress = progress;
      if (drawFrame) return;
      drawFrame = requestAnimationFrame(() => {
        drawFrame = 0;
        draw(pendingProgress);
      });
    };

    const sizeCanvas = () => {
      width = stage.clientWidth;
      height = stage.clientHeight;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw(progressRef.current);
    };

    const loadImages = () => {
      if (disposed || imagesStarted) return;
      imagesStarted = true;
      scenes.forEach((scene) => {
        const image = new Image();
        image.decoding = "async";
        image.onload = () => {
          loadedCount += 1;
          draw(progressRef.current);
          if (loadedCount === scenes.length) setReady(true);
        };
        image.onerror = () => {
          loadedCount += 1;
          if (loadedCount === scenes.length) setReady(true);
        };
        image.src = scene.src;
        images.push(image);
      });
    };

    sizeCanvas();
    resizeObserver = new ResizeObserver(sizeCanvas);
    resizeObserver.observe(stage);

    loadGsap()
      .then(({ ScrollTrigger }) => {
        if (disposed) return;
        trigger = ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "+=260%",
          pin: stage,
          scrub: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            scheduleDraw(self.progress);
            const nextIndex = Math.min(
              scenes.length - 1,
              Math.round(self.progress * (scenes.length - 1)),
            );
            setActive((currentIndex) => (currentIndex === nextIndex ? currentIndex : nextIndex));
          },
        });
      })
      .catch(() => {
        draw(0);
      });

    imageObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        imageObserver?.disconnect();
        imageObserver = null;
        loadImages();
      },
      { rootMargin: "600px 0px" },
    );
    imageObserver.observe(section);

    return () => {
      disposed = true;
      if (drawFrame) cancelAnimationFrame(drawFrame);
      trigger?.kill();
      resizeObserver?.disconnect();
      imageObserver?.disconnect();
    };
  }, [lite]);

  const scene = scenes[active] ?? scenes[0]!;
  const destination = getDestination(scene.slug);

  return (
    <section
      ref={sectionRef}
      className="relative bg-maroon-deep"
      aria-label="A cinematic journey through India"
    >
      <div ref={stageRef} className="relative h-[100svh] overflow-hidden">
        {!ready && (
          <AnimatePresence initial={false} mode="popLayout">
            <motion.img
              key={scene.slug}
              src={scene.src}
              alt={`${scene.name} — ${scene.line}`}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55 }}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>
        )}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-1000 data-[ready=true]:opacity-100"
          data-ready={ready ? "true" : "false"}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep via-maroon-deep/15 to-maroon-deep/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-deep/55 via-transparent to-transparent" />
        <div className="film-grain absolute inset-0 hidden opacity-70 lg:block" />

        <div className="relative flex h-full flex-col justify-between px-5 pb-28 pt-24 text-ivory sm:px-8 sm:pb-28 sm:pt-28 lg:pb-8 lg:pt-28">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="eyebrow flex items-center gap-3 text-gold-soft/85">
                <span className="h-px w-8 bg-gold-soft/60" />
                The India film
              </p>
              <p className="mt-2 text-xs text-ivory/45">A country that changes every 200 km.</p>
            </div>
            <div className="hidden items-center gap-3 text-[0.6rem] uppercase tracking-[0.22em] text-ivory/35 sm:flex">
              <ArrowDown className="h-3.5 w-3.5 animate-bounce text-gold-soft" aria-hidden="true" />
              {lite ? "Tap through the frames" : "Scroll to travel"}
            </div>
          </div>

          <div className="flex items-end justify-between gap-6">
            <div className="max-w-3xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={scene.slug}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45 }}
                >
                  <p className="eyebrow text-[0.6rem] text-gold-soft/80">
                    Frame 0{active + 1} / 05 · {scene.note}
                  </p>
                  <h2 className="display-lg mt-3 text-ivory">{scene.name}</h2>
                  <p className="mt-3 max-w-lg font-display text-2xl italic leading-snug text-ivory/75 sm:text-3xl">
                    {scene.line}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    {destination && (
                      <Link
                        to="/destinations/$slug"
                        params={{ slug: destination.slug }}
                        className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-ivory/30 px-5 py-3 text-xs font-semibold text-ivory transition-colors hover:bg-ivory hover:text-maroon"
                      >
                        Explore {destination.name}
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
                    )}
                    {destination && (
                      <span className="text-xs text-ivory/55">
                        From{" "}
                        <span className="font-display text-lg text-gold-soft">
                          {inr(destination.priceFrom)}
                        </span>{" "}
                        per person
                      </span>
                    )}
                  </div>

                  <div className="mt-5 flex items-center gap-2 lg:hidden">
                    {scenes.map((item, index) => (
                      <button
                        key={item.slug}
                        type="button"
                        onClick={() => setActive(index)}
                        aria-label={`Show ${item.name}`}
                        aria-pressed={index === active}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === active ? "w-8 bg-gold-soft" : "w-2 bg-ivory/30"
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="hidden flex-col items-end gap-3 pb-20 lg:flex">
              <span className="font-display text-[7rem] leading-none text-ivory/10">
                0{active + 1}
              </span>
              <div className="flex gap-1.5">
                {scenes.map((item, index) => (
                  <span
                    key={item.slug}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      index === active ? "w-10 bg-gold-soft" : "w-4 bg-ivory/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

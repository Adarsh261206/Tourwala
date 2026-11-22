declare module "animejs" {
  type AnimeInstance = {
    pause: () => void;
    play: () => void;
    restart: () => void;
  };

  interface AnimeFunction {
    (params: Record<string, unknown>): AnimeInstance;
    setDashoffset: (element: Element | null) => number;
  }

  const anime: AnimeFunction;
  export default anime;
}

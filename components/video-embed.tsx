/**
 * VideoEmbed — drop-in video player.
 *
 * Accepts YouTube URLs, Vimeo URLs, or direct file URLs.
 * Lazy-loaded by default. Uses YouTube's privacy-enhanced (no-cookie)
 * domain and Vimeo's dnt mode when possible.
 *
 *   <VideoEmbed src="https://www.youtube.com/watch?v=abc123" />
 *   <VideoEmbed src="https://vimeo.com/1196145642" ratio="4/3" />
 *   <VideoEmbed src="/videos/studio.mp4" />
 */

interface VideoEmbedProps {
  src: string;
  title?: string;
  /** CSS aspect-ratio. Defaults to 16/9. Pass "4/3", "1/1", "9/16", etc. */
  ratio?: string;
}

function extractYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([^&?#/]+)/,
  );
  return match ? match[1] : null;
}

function extractVimeoId(url: string): string | null {
  const match = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  return match ? match[1] : null;
}

export function VideoEmbed({
  src,
  title = "Video",
  ratio = "16/9",
}: VideoEmbedProps) {
  const youtubeId = extractYouTubeId(src);
  const vimeoId = !youtubeId ? extractVimeoId(src) : null;

  const frame =
    "w-full overflow-hidden rounded-sm ring-1 ring-line bg-ink";
  const style = { aspectRatio: ratio };

  if (youtubeId) {
    return (
      <div className={frame} style={style}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`}
          title={title}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="h-full w-full"
        />
      </div>
    );
  }

  if (vimeoId) {
    // badge=0 hides the Vimeo logo; dnt=1 disables tracking.
    const params = new URLSearchParams({ badge: "0", dnt: "1" });
    return (
      <div className={frame} style={style}>
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?${params.toString()}`}
          title={title}
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          allowFullScreen
          loading="lazy"
          className="h-full w-full"
        />
      </div>
    );
  }

  // Direct file (mp4, webm, etc.)
  return (
    <div className={frame} style={style}>
      <video
        src={src}
        controls
        preload="metadata"
        className="h-full w-full"
      >
        {title}
      </video>
    </div>
  );
}

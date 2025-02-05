import React from "react";

export interface SpotifyEmbedProps {
  /** Spotify URL for the content to embed */
  url: string;
  /** Custom border radius for the embed (e.g., "12px", "1rem") */
  borderRadius?: string;
  /** Width of the embed - can be a number (px), string (CSS value), or preset ("wide" | "compact") */
  width?: number | string | "wide" | "compact";
  /** Height of the embed - can be a number (px), string (CSS value), or preset ("compact") */
  height?: number | string | "compact";
  /** Enable alternate (light) theme */
  theme?: "dark" | "light";
  /** Allow transparency in the embed */
  transparent?: boolean;
  /** Custom CSS class name */
  className?: string;
  /** Custom inline styles */
  style?: React.CSSProperties;
}

const SpotifyEmbed: React.FC<SpotifyEmbedProps> = ({
  url,
  borderRadius = "12px",
  width = "100%",
  height = "352",
  theme = "dark",
  transparent = false,
  className,
  style,
}) => {
  const match = url.match(/(album|track|episode|playlist|artist)\/([a-zA-Z0-9]+)/);
  
  if (!match) {
    console.warn("Invalid Spotify URL provided");
    return null;
  }

  const [, type, id] = match;
  const embedUrl = new URL(`https://open.spotify.com/embed/${type}/${id}`);
  
  if (theme === "light") {
    embedUrl.searchParams.set("theme", "0");
  }
  
  if (transparent) {
    embedUrl.searchParams.set("transparent", "1");
  }

  const getWidth = () => {
    if (width === "wide") return "100%";
    if (width === "compact") return "40%";
    return width;
  };

  const getHeight = () => {
    if (height === "compact") return "152";
    return height;
  };

  return (
    <iframe
      className={className}
      style={{
        borderRadius,
        border: 0,
        ...style,
      }}
      src={embedUrl.toString()}
      width={getWidth()}
      height={getHeight()}
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  );
};

export default SpotifyEmbed;

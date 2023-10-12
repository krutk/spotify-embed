import React from 'react';

const SpotifyEmbed = ({ url }) => {
    const match = url.match(/(album|track|episode|playlist)\/(\w+)/);
    const id = match[1] + "/" + match[2];
    console.log(`https://open.spotify.com/embed/${id}`)
  // Generate the iframe code
  return (
    <iframe
      style={{ borderRadius: '12px' }}
      src={`https://open.spotify.com/embed/${id}`}
      width="40%"
      height="152"
      frameBorder="0"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
};

export default SpotifyEmbed;

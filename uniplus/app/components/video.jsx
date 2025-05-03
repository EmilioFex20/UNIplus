"use client";

export function Video({ url }) {
  if (!url) return null;

  const obtenerUrlBuena = (youtubeUrl) => {
    try {
      const urlObj = new URL(youtubeUrl);
      const videoId = urlObj.searchParams.get("v");
      if (!videoId) return null;
      return `https://www.youtube.com/embed/${videoId}`;
    } catch (err) {
      return null;
    }
  };

  const embedUrl = obtenerUrlBuena(url);

  if (!embedUrl) {
    return <p className="text-red-500">URL de video inválida</p>;
  }
  return (
    <div className="aspect-video w-full max-w-4xl mx-auto my-auto rounded-xl overflow-hidden shadow-lg">
      <iframe
        className="w-full h-full"
        src={embedUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

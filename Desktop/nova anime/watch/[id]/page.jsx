export default function WatchPage({ params }) {
  const { id } = params;

  return (
    <main className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Episode {id}</h1>

      <video
        controls
        className="w-full rounded-lg"
        src="https://example.com/video.mp4"
      ></video>
    </main>
  );
}

export default function AnimePage({ params }) {
  const { id } = params;

  const episodes = [
    { id: 1, title: "Episode 1" },
    { id: 2, title: "Episode 2" },
  ];

  return (
    <main className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">Anime #{id}</h1>

      <div className="grid grid-cols-1 gap-3">
        {episodes.map((ep) => (
          <a
            key={ep.id}
            href={`/watch/${ep.id}`}
            className="bg-gray-800 p-4 rounded-lg"
          >
            {ep.title}
          </a>
        ))}
      </div>
    </main>
  );
}

export default function Home() {
  const animes = [
    { id: 1, title: "Naruto", image: "/naruto.jpg" },
    { id: 2, title: "Attack on Titan", image: "/aot.jpg" },
  ];

  return (
    <main className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      {animes.map((anime) => (
        <a
          key={anime.id}
          href={`/anime/${anime.id}`}
          className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
        >
          <img src={anime.image} className="w-full h-48 object-cover" />
          <div className="p-3 text-white font-bold">{anime.title}</div>
        </a>
      ))}
    </main>
  );
}

export default function App() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <section className="max-w-xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-green-700">
          Bienvenidos
        </p>

        <h1 className="text-5xl font-bold tracking-tight text-slate-950">
          La Mesa
        </h1>

        <p className="mt-4 text-lg text-slate-700">
          Donde cada partida reúne a la familia y los amigos.
        </p>

        <button
          type="button"
          className="mt-8 min-h-14 rounded-2xl bg-green-700 px-8 font-semibold text-white transition hover:-translate-y-0.5"
        >
          Crear una mesa
        </button>
      </section>
    </main>
  )
}
import Link from 'next/link';

export default function AtomicStructurePage() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Atomic Structure</h1>
      <section className="mb-8">
        <p className="text-lg mb-4">
          Welcome to the Atomic Structure module! This section will explore the fundamental building blocks of matter, including protons, neutrons, and electrons, and how they arrange themselves to form atoms.
        </p>
        <div className="bg-gray-100 p-6 rounded-lg shadow-inner">
          <h2 className="text-2xl font-semibold mb-3">Interactive Explanation & Visualizations</h2>
          <p className="text-gray-700">
            This is a placeholder for interactive elements where you can explore atomic models, visualize electron shells, and understand concepts like isotopes and atomic number.
          </p>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-3">Practice Quiz</h2>
        <p className="mb-4">Test your knowledge of atomic structure with our practice quiz.</p>
        <Link
          href="/atomic-structure/quiz"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition-colors"
        >
          Take the Quiz
        </Link>
      </section>
    </main>
  );
}

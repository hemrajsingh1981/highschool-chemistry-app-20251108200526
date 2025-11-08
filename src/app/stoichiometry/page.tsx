import Link from 'next/link';

export default function StoichiometryPage() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Stoichiometry</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction to Stoichiometry</h2>
        <p className="text-lg leading-relaxed">
          Stoichiometry is the branch of chemistry that deals with the quantitative relationships between reactants and products in chemical reactions. It is based on the law of conservation of mass and the law of definite proportions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Interactive Explanation</h2>
        <div className="bg-gray-100 p-6 rounded-lg shadow-inner">
          <p className="text-gray-700">This section will feature interactive explanations and visualizations to help understand concepts like mole ratios, limiting reactants, and percent yield.</p>
          {/* Placeholder for future interactive elements */}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Test Your Knowledge</h2>
        <Link href="/stoichiometry/quiz" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out">
          Take the Stoichiometry Quiz
        </Link>
      </section>
    </main>
  );
}
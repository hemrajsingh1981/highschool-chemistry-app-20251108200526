import Link from 'next/link';

export default function ChemicalBondingPage() {
  return (
    <main className="container mx-auto p-4 md:p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Chemical Bonding</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-lg leading-relaxed">
          Chemical bonding is the fundamental force that holds atoms together to form molecules and compounds. Understanding the different types of bonds, such as ionic, covalent, and metallic bonds, is crucial for comprehending the properties and behavior of matter.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Interactive Explanation</h2>
        <div className="bg-gray-100 p-6 rounded-lg shadow-inner">
          <p className="text-lg text-gray-700">
            This is a placeholder for interactive explanations and visualizations that will help illustrate concepts like electronegativity, bond polarity, and molecular geometry.
          </p>
          {/* Placeholder for future interactive components */}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to Test Your Knowledge?</h2>
        <Link
          href="/chemical-bonding/quiz"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out"
        >
          Take the Chemical Bonding Quiz
        </Link>
      </section>
    </main>
  );
}

import Link from 'next/link';

export default function OrganicChemistryPage() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Introduction to Organic Chemistry</h1>
      <section className="mb-8">
        <p className="text-lg mb-4">
          Organic chemistry is the study of carbon-containing compounds. Carbon's unique ability to form stable bonds with itself and other elements allows for an incredible diversity of molecules, forming the basis of life and countless materials.
        </p>
        <p className="text-lg">
          This section will explore fundamental concepts, including hydrocarbons, functional groups, and basic reaction mechanisms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Interactive Learning</h2>
        <div className="bg-gray-100 p-6 rounded-lg shadow-inner">
          <p className="text-xl text-gray-700">Visualization placeholder for interactive explanations and molecular models will appear here.</p>
        </div>
      </section>

      <section className="text-center">
        <Link href="/organic-chemistry/quiz"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out"
        >
          Take the Organic Chemistry Quiz
        </Link>
      </section>
    </main>
  );
}

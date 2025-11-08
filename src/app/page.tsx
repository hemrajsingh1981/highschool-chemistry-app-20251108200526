import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <Image
          src="/images/hero-banner.png"
          alt="High School Chemistry Hero Banner"
          width={800}
          height={300}
          className="mx-auto mb-6 rounded-lg shadow-xl"
          priority
        />
        <h1 className="text-5xl font-bold text-primary mb-4">
          Welcome to High School Chemistry
        </h1>
        <p className="text-xl text-muted-foreground">
          Your interactive guide to understanding the fundamental concepts of chemistry.
        </p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="card-body">
            <h2 className="card-title text-2xl font-semibold mb-3">Atomic Structure</h2>
            <p className="text-muted-foreground mb-4">Explore the building blocks of matter.</p>
            <Link href="/atomic-structure" className="btn btn-primary btn-outline w-full">
              Learn More
            </Link>
          </div>
        </div>

        <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="card-body">
            <h2 className="card-title text-2xl font-semibold mb-3">Chemical Bonding</h2>
            <p className="text-muted-foreground mb-4">Understand how atoms connect.</p>
            <Link href="/chemical-bonding" className="btn btn-primary btn-outline w-full">
              Learn More
            </Link>
          </div>
        </div>

        <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="card-body">
            <h2 className="card-title text-2xl font-semibold mb-3">Stoichiometry</h2>
            <p className="text-muted-foreground mb-4">Master the art of chemical calculations.</p>
            <Link href="/stoichiometry" className="btn btn-primary btn-outline w-full">
              Learn More
            </Link>
          </div>
        </div>

        <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="card-body">
            <h2 className="card-title text-2xl font-semibold mb-3">Basic Organic Chemistry</h2>
            <p className="text-muted-foreground mb-4">Discover the world of carbon compounds.</p>
            <Link href="/organic-chemistry" className="btn btn-primary btn-outline w-full">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

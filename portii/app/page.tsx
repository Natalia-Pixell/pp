import HeroSection from '../components/Hero';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-8 pb-10 sm:p-20 ">
  <main className="flex-grow">
    <HeroSection />
  </main>
  <footer className="mt-auto">
    {/* Footer-Inhalte */}
  </footer>
</div>

  );
}

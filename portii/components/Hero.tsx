// components/HeroSection.tsx

export default function HeroSection() {
    return (
      <section className="text-center flex flex-col items-center gap-6 py-20 w-full">
        <h1 className="text-5xl font-bold text-[#171717]">
          Hi, ich bin Natalia.
        </h1>
        <p className="text-lg text-gray-600 max-w-xl">
          Ich entwickle moderne Web-Erlebnisse mit <strong>React</strong>, <strong>Tailwind</strong> und einer Leidenschaft für Design.
        </p>
        <a
          href="#projects"
          className="px-6 py-3 bg-[#171717] text-white rounded-lg hover:bg-[#333] transition"
        >
          Sieh dir meine Projekte an
        </a>
      </section>
    );
  }
  
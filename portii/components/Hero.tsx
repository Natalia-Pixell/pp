import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-8 items-center w-full px-4 py-12">
      {/* Text */}
      <div className="md:w-1/2 text-center md:text-left">
        <section className="flex flex-col gap-6">
          <h1 className="text-5xl font-bold">
            Hi, ich bin Natalia.
          </h1>
          <p className="text-2xl max-w-xl">
            Ich bin duale Studentin der <strong>Informatik</strong> bei <strong>Telekom</strong> und entwickle zum Spaß eigene Webseiten.
          </p>
          <a
            href="#projects"
            className="px-6 py-3 bg-[#F7E1D7] rounded-xl hover:bg-[#f7e1d7c4] transition w-fit mx-auto md:mx-0"
          >
            Erfahre mehr über mich
          </a>
        </section>
      </div>

      {/* Bild */}
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="/images/profilbild.jpg" // liegt in public/images/
          alt="Profilbild von Natalia"
          width={300}
          height={300}
          className="rounded-full shadow-lg object-cover"
        />
      </div>
    </div>
  );
}

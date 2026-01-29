// import SnowMinimal from "@/components/christmas-decor";
import HeartsMinimal from "@/components/valentines";

export default function Home() {
  return (
    <div>
      <HeartsMinimal />

      {/* HERO-SEKSJON */}
      <div className="flex items-start gap-24 px-20 mt-32">
        
        {/* TEKST */}
        <div>
          <p className="text-2xl text-shadow-white font-serif mb-4">
            Hei, mitt navn er
          </p>

          <h1 className="text-4xl text-shadow-white font-serif mb-2">
            Marcelina Dylewska
          </h1>

          <p className="text-xl text-white font-serif mb-6">
            og jeg studerer datasikkerhet
          </p>

          <p className="text-xl text-white w-fit font-serif p-4 border-2">
            Ved Universitetet i Bergen
          </p>
        </div>

        {/* BILDE */}
        <div className="flex justify-center overflow-hidden rounded-full border h-96 w-96">
          <img
            src="/IMG_2711.JPG"
            alt="Profilbilde"
            className="object-cover w-full h-full"
          />
        </div>

      </div>

      <div className='m-20 font-bold italic font-serif mb-1'><p>Mine sosiale medier:</p></div>
      <div>
           <a
        href="https://www.instagram.com/mrclina/"
        className="m-20 font-bold italic mb-3"
      >
        - Instagram
      </a>
      </div>
      <div>
        <a
        href="https://echo.uib.no/for-studenter/gruppe/webkom"
        className="m-20 font-bold italic mb-2"
        >
          - Webkom sin side
        </a>
        </div>
      <h1 className="flex justify-center">Jadda</h1>
      <a
        href="https://echo.uib.no"
        className="flex justify-start p-10 text-2xl"
      >
        echo
      </a>
      <a
        href="http://localhost:3001/prosjekter"
        className="flex justify-end text-2xl"
      >
        prosjekter
      </a>
    </div>
  );
}

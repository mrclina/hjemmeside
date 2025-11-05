import SnowMinimal from "@/components/christmas-decor";


export default function Home() {
  return (
    <div>
      <SnowMinimal />
      <h1 className="text-4xl text-shadow-white m-6 flex justify-center font-sans">
        Velkommen
      </h1>
      <p className="text-3xl text-white m-7 flex justify-center mb-9">
        Til nettsiden min
      </p>
      <div className="flex justify-center"><p className="text-2xl text-white text-center w-fit font-serif mb-30 p-8 border-2">
        Mitt navn er Marcelina
      </p></div>
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
      <div className="flex justify-center p-100"><div className="flex justify-center overflow-hidden rounded-full border h-100 w-100"><img src="/IMG_2711.JPG" className="max-w-150"/></div></div>
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

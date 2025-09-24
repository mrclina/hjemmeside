export default function Home() {
  return (
    <div>
      <h1 className="text-4xl text-shadow-white m-6 flex justify-center font-sans">
        Velkommen
      </h1>
      <p className="text-3xl text-white m-7 flex justify-center mb-9">
        Til min første nettside
      </p>
      <p className="text-2xl text-pink-400 flex justify-center font-serif mb-10 border-2">
        Mitt navn er Marcelina
      </p>
      <a
        href="https://www.instagram.com/mrclina/"
        className="flex justify-center font-bold italic font-serif mb-30"
      >
        Og her er min instagram
      </a>
      <h1 className="flex justify-center mb-40">Yaaaay</h1>
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

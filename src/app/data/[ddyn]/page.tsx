import { Fetching } from "@/lib/more";

const mychange = async ({ ddyn }: { ddyn: string }) => {
  const letChange = await Fetching();
  const arr = letChange.find((e: any) => e.altSpellings[0] === ddyn);
  return arr;
};
const Ddata = async ({ params }: { params: { ddyn: string } }) => {
  const array = await mychange(params);
  return (
    <main className="bg-gradient-to-b bg-clip-content from-indigo-600 to-indigo-300 h-screen flex flex-col justify-center items-center text-white text-2xl">
      <h1 className="mb-4">Common Name: {array.name.common}</h1>
      <h1 className="mb-4">Region: {array.region}</h1>
      <h1 className="mb-4">Continents: {array.continents}</h1>
      <h1 className="mb-4">Total Workers: {array.latlng[1]}</h1>
      <h1 className="mb-4">Total Products: {array.area}</h1>
    </main>
  );
};

export default Ddata;

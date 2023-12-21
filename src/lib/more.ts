export const Fetching = async () => {
  const mydata = await fetch(`https://restcountries.com/v3.1/all`);
  const convert = await mydata.json();
  return convert;
};

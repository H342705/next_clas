type FetchData = {
  id: string;
  title: string;
  price: string;
  image: string;
  description: string;
  category: string;
  rating: {
    rate: string;
    count: string;
  };
};
export const ProductsFetch = async () => {
  const fetchPro = await fetch(`https://fakestoreapi.com/products`);
  const pureproducts: FetchData[] = await fetchPro.json();
  return pureproducts;
};

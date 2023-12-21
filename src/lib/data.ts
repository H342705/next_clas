type FetchData = {
  id: string;
  slug: string;
  avatar: string;
  body: string;
  createdAt: string;
  name: string;
  title: string;
};

// export const FetchedData = async () => {
//   const res = await fetch(`https://657d320a853beeefdb9a5fe3.mockapi.io/post`);
//   const blog = await res.json();
//   return blog;
// };

export const FetchedData = async () => {
  const data = await fetch(`https://657d320a853beeefdb9a5fe3.mockapi.io/post`);
  const res: FetchData[] = await data.json();
  return res;
};

export const fetchFunction = (forComplete) => {
  const dataBig = fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/${forComplete}`
  );
  return dataBig;
};

import { useEffect, useState } from 'react';
import './GetCocktailsNonAlcoholics.css';
import GetCocktail from '../../components/GetCocktail/GetCocktail';
import { fetchFunction } from '../../../utils/fetchFunction';

const GetCocktailsNonAlcoholics = () => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    fetchFunction('filter.php?a=Non_Alcoholic')
      .then((cktls) => cktls.json())
      .then((cktls) => setCocktails(cktls.drinks));
  }, []);
  return (
    <>
      <h2>Cocktail without Alcohol</h2>
      <GetCocktail cocktails={cocktails} />
    </>
  );
};

export default GetCocktailsNonAlcoholics;

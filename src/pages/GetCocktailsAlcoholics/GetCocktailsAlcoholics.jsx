import { useEffect, useState } from 'react';
import './GetCocktailsAlcoholics.css';
import GetCocktail from '../../components/GetCocktail/GetCocktail';
import { fetchFunction } from '../../../utils/fetchFunction';

const GetCocktailsAlcoholics = () => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    fetchFunction('filter.php?a=Alcoholic')
      .then((cktls) => cktls.json())
      .then((cktls) => setCocktails(cktls.drinks));
  }, []);
  return (
    <>
      <h2>Cocktail with Alcohol</h2>
      <GetCocktail cocktails={cocktails} />
    </>
  );
};

export default GetCocktailsAlcoholics;

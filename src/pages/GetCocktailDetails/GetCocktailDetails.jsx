import { useEffect, useState } from 'react';
import './GetCocktailDetails.css';
import { fetchFunction } from '../../../utils/fetchFunction';
import { useParams } from 'react-router-dom';
import Ingredient from '../../components/GetIngredient/GetIngredient';

const GetCocktailDetails = () => {
  const { idDrink } = useParams();
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    fetchFunction(`lookup.php?i=${idDrink}`)
      .then((cktl) => cktl.json())
      .then((cktl) => setDrinks(cktl.drinks[0]));
  }, []);

  return (
    <>
      <div className='cocktailDetailsContainer'>
        <h2>{drinks.strDrink}</h2>
        <img src={drinks.strDrinkThumb} alt={drinks.strDrink} />
        <div className='detailsContainer'>
          <div className='ingredientsContainer'>
            <p>INGREDIENTS</p>
            <ul>
              <Ingredient drinks={drinks} />
            </ul>
          </div>
          <div className='instructionsContainer'>
            <p>INSTRUCTIONS</p>
            <span>{drinks.strInstructions}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetCocktailDetails;

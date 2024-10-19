import { Link } from 'react-router-dom';
import './GetCocktail.css';

const GetCocktail = ({ cocktails }) => {
  return (
    <div className='cocktailsContainer'>
      <ul>
        {cocktails.map((cocktail, index) => (
          <li key={index}>
            <div
              className='cocktailContainer'
              onClick={() => window.location.reload()}
            >
              <Link to={`/cocktail/${cocktail.idDrink}`}>
                <img
                  src={cocktail.strDrinkThumb}
                  alt={cocktail.strDrink}
                  className='cocktailImg'
                />
              </Link>
              <h3 className='cocktailName'>
                <Link to={`/cocktail/${cocktail.idDrink}`}>
                  {cocktail.strDrink}
                </Link>
              </h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetCocktail;

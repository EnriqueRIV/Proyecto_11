import { NavLink } from 'react-router-dom';
import Cocktail_Logo from '../../assets/cocktail.gif';
import './Header.css';

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li title='Home'>
              <NavLink to='/'>
                <img
                  src={Cocktail_Logo}
                  className={`cocktailLogo navLink`}
                  alt='Cocktail Logo'
                />
              </NavLink>
            </li>
            <li title='Cocktail with Alcohol'>
              <NavLink to='/CocktailAlcoholic'>
                <span className={`material-symbols-outlined navLinkMobile`}>
                  Local_Bar
                </span>
                <span className='navLink'>Cocktail with Alcohol</span>
              </NavLink>
            </li>
            <li title='Cocktail without Alcohol'>
              <NavLink to='/CocktailNonAlcoholic'>
                <span className='navLinkMobile material-symbols-outlined'>
                  Wine_Bar
                </span>
                <span className='navLink'>Cocktail whitout Alcohol</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;

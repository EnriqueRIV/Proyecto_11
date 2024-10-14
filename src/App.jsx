import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import GetCocktailsAlcoholics from './pages/GetCocktailsAlcoholics/GetCocktailsAlcoholics';
import GetCocktailsNonAlcoholics from './pages/GetCocktailsNonAlcoholics/GetCocktailsNonAlcoholics';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import GetCocktailDetails from './pages/GetCocktailDetails/GetCocktailDetails';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <div className='card'>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route
              path='CocktailAlcoholic'
              element={<GetCocktailsAlcoholics />}
            />
            <Route
              path='CocktailNonAlcoholic'
              element={<GetCocktailsNonAlcoholics />}
            />
            <Route path='cocktail/:idDrink' element={<GetCocktailDetails />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

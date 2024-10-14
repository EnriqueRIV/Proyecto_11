import './Home.css';
import { useEffect, useState } from 'react';
import GetCocktail from '../../components/GetCocktail/GetCocktail';
import { fetchFunction } from '../../../utils/fetchFunction';

const Home = () => {
  const [cocktailsRan, setCocktailsRan] = useState([]);

  useEffect(() => {
    fetchFunction('random.php')
      .then((cktls) => cktls.json())
      .then((cktls) => setCocktailsRan(cktls.drinks));
  }, []);

  return (
    <>
      <div className='homeContainer'>
        <h2>ABOUT COCKTAILS</h2>
        <div className='firstTextContainer'>
          <p>
            Cocktail is a drink, alcoholic and non alcoholic, made by mixing two
            or more drinks together.
          </p>
          <p>
            A cocktail is a mixed drink, most commonly, a cocktail is a
            combination of one or more spirits mixed with other ingredients,
            such as juices, flavored syrups, tonic water, shrubs, and bitters.
            Cocktails vary widely across regions of the world, and many websites
            publish both original recipes and their own interpretations of older
            and more famous cocktails.
          </p>
        </div>
        <div className='secondTextContainer'>
          <p>
            The first written mention of 'cocktail' as a beverage appeared in
            The Farmers Cabinet, 1803, in the United States. The first
            definition of a cocktail as an alcoholic beverage appeared three
            years later in The Balance and Columbian Repository (Hudson, New
            York) May 13, 1806. Traditionally, cocktail ingredients included
            spirits, sugar, water and bitters; however, this definition evolved
            throughout the 1800s to include the addition of a liqueur.
          </p>
          <GetCocktail cocktails={cocktailsRan} />
        </div>
        <div className='thirdTextContainer'>
          <p>
            In 1862, Jerry Thomas published a bartender's guide called How to
            Mix Drinks; or, The Bon Vivant's Companion which included 10
            cocktail recipes using bitters, to differentiate from other drinks
            such as punches and cobblers.
          </p>
          <p>
            Cocktails continued to evolve and gain popularity throughout the
            1900s, with the term eventually expanding to cover all mixed drinks.
            In 1917, the term cocktail party was coined by Julius S. Walsh Jr.
            of St. Louis, Missouri. With wine and beer being less available
            during the Prohibition in the United States (1920 – 1933),
            liquor-based cocktails became more popular due to accessibility,
            followed by a decline in popularity during the late 1960s. The early
            to mid-2000s saw the rise of cocktail culture through the style of
            mixology which mixes traditional cocktails and other novel
            ingredients. By 2023, the so-called "cocktail in a can" had
            proliferated (at least in the United States) to become a common item
            in liquor stores.
          </p>
          <p>
            In the modern world and the Information Age, cocktail recipes are
            widely shared online on websites. Cocktails and restaurants that
            serve them are frequently covered and reviewed in tourism magazines
            and guides. Some cocktails, such as the Mojito, Manhattan, and
            Martini, have become staples in restaurants and pop culture.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;

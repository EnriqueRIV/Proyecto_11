import { useState } from 'react';
import './GetIngredient.css';

let ingre = [];

const Ingredient = ({ drinks }) => {
  const [count, setCount] = useState(1);

  for (let prop in drinks) {
    if (prop == `strIngredient${count}` && drinks[prop]) {
      setCount(count + 1);
      const ame = drinks[prop];
      ingre.push(ame);
    }
  }

  const auxArray = new Set(ingre);
  let result = [...auxArray];

  return (
    <>
      {result.map((ing, index) => (
        <li key={index}> {ing}</li>
      ))}
    </>
  );
};

export default Ingredient;

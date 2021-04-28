import React, { useEffect, useState } from "react";
import "./style.css";
import Card from "./Components/Card/Card";

/*https://stackoverflow.com/questions/49555273/how-to-shuffle-an-array-of-objects-in-javascript*/

function shuffleCardArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function initialState() {
  return shuffleCardArray([
    {
      id: "NqVbo0ocJ2k",
      name: "cow",
      isFlipped: false,
      isMatched: false
    },
    {
      id: "E32fGlISSBk",
      name: "frog",
      isFlipped: false,
      isMatched: false
    },
    {
      id: "NR2eMg9zXxA",
      name: "fluffydog",
      isFlipped: false,
      isMatched: false
    },
    {
      id: "V7SKRhXskv8",
      name: "fish",
      isFlipped: false,
      isMatched: false
    },
    {
      id: "yMSecCHsIBc",
      name: "coolcat",
      isFlipped: false,
      isMatched: false
    },
    { id: "ByAKvjBH1ZY", name: "turtle", isFlipped: false, isMatched: false },
    {
      id: "c9mZYrCmvRo",
      name: "parrot",
      isFlipped: false,
      isMatched: false
    },
    {
      id: "AQRp2NH-O8k",
      name: "yellowhat",
      isFlipped: false,
      isMatched: false
    },
    {
      id: "NqVbo0ocJ2k",
      name: "cow",
      isFlipped: false,
      isMatched: false
    },
    {
      id: "E32fGlISSBk",
      name: "frog",
      isFlipped: false,
      isMatched: false
    },
    {
      id: "NR2eMg9zXxA",
      name: "fluffydog",
      isFlipped: false,
      isMatched: false
    },
    {
      id: "V7SKRhXskv8",
      name: "fish",
      isFlipped: false,
      isMatched: false
    },
    {
      id: "yMSecCHsIBc",
      name: "coolcat",
      isFlipped: false,
      isMatched: false
    },
    { id: "ByAKvjBH1ZY", name: "turtle", isFlipped: false, isMatched: false },
    {
      id: "c9mZYrCmvRo",
      name: "parrot",
      isFlipped: false,
      isMatched: false
    },
    {
      id: "AQRp2NH-O8k",
      name: "yellowhat",
      isFlipped: false,
      isMatched: false
    }
  ]);
}

export default function App() {
  const [animalPairs, setAnimalPairs] = useState(initialState());
  const [firstFaceUp, setFirstFaceUp] = useState(false);
  const [secondFaceUp, setSecondFaceUp] = useState(false);

  function flipCard(index) {
    if (animalPairs[index].isFlipped || secondFaceUp !== false) return;

    let newAnimalPairs = [...animalPairs];
    newAnimalPairs[index].isFlipped = true;

    if (firstFaceUp !== false) {
      if (newAnimalPairs[index].id === newAnimalPairs[firstFaceUp].id) {
        newAnimalPairs[index].isMatched = true;
        newAnimalPairs[firstFaceUp].isMatched = true;
        setAnimalPairs(newAnimalPairs);
        setFirstFaceUp(false);
        return;
      } else {
        setAnimalPairs(newAnimalPairs);
        setSecondFaceUp(index);
      }
    } else {
      setAnimalPairs(newAnimalPairs);
      setFirstFaceUp(index);
    }
  }

  useEffect(() => {
    if (secondFaceUp === false) return;
    setTimeout(() => {
      setAnimalPairs((animalPairs) =>
        animalPairs.map((animal) => {
          return {
            id: animal.id,
            name: animal.name,
            isFlipped: animal.isMatched,
            isMatched: animal.isMatched
          };
        })
      );
      setFirstFaceUp(false);
      setSecondFaceUp(false);
    }, 1000);
  }, [secondFaceUp]);

  const handleNewGame = () => {
    setAnimalPairs(initialState());
  };

  return (
    <div className="App">
      <div className="game-name">
        <h1>Matching Game</h1>
        <p>Flip the card to match the animal pictures!</p>
        <button className="new-game-button" onClick={handleNewGame}>
          New Game
        </button>
      </div>
      <div className="card-layout">
        {animalPairs.map((animal, index) => {
          let isFlipped = animal.isFlipped;
          return (
            <Card
              isFlipped={isFlipped}
              key={index + "_" + animal.id}
              flipCard={flipCard}
              index={index}
              animal={animal}
            />
          );
        })}
      </div>
    </div>
  );
}

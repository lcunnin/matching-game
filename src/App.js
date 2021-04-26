import React, { useEffect, useState } from "react";
import "./style.css";
import Card from "./Components/Card/Card";

export default function App() {
  const [animalPairs, setAnimalPairs] = useState([
    {
      id: "oU6KZTXhuvk",
      name: "champdog",
      isFlipped: false,
      isMatched: false
    },
    {
      id: "yMSecCHsIBc",
      name: "coolcat",
      isFlipped: false,
      isMatched: false
    },
    {
      id: "OzAeZPNsLXk",
      name: "justacat",
      isFlipped: false,
      isMatched: false
    },
    {
      id: "bYXP-ITv4_s",
      name: "hoodiedog",
      isFlipped: false,
      isMatched: false
    },
    {
      id: "fEAvhbvZX40",
      name: "partyhat",
      isFlipped: false,
      isMatched: false
    },
    { id: "Qb7D1xw28Co", name: "pjdog", isFlipped: false, isMatched: false },
    {
      id: "pOUA8Xay514",
      name: "sweaterdog",
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
      id: "oU6KZTXhuvk",
      name: "champdog",
      isFlipped: false,
      isMatched: false
    },
    {
      id: "yMSecCHsIBc",
      name: "coolcat",
      isFlipped: false,
      isMatched: false
    },
    {
      id: "OzAeZPNsLXk",
      name: "justacat",
      isFlipped: false,
      isMatched: false
    },
    {
      id: "bYXP-ITv4_s",
      name: "hoodiedog",
      isFlipped: false,
      isMatched: false
    },
    {
      id: "fEAvhbvZX40",
      name: "partyhat",
      isFlipped: false,
      isMatched: false
    },
    { id: "Qb7D1xw28Co", name: "pjdog", isFlipped: false, isMatched: false },
    {
      id: "pOUA8Xay514",
      name: "sweaterdog",
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

  function shuffleCards(array) {
    const length = animalPairs.length;
    for (let i = length; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * i);
      const currentIndex = i - 1;
      const temp = animalPairs[currentIndex];
      animalPairs[currentIndex] = animalPairs[randomIndex];
      animalPairs[randomIndex] = temp;
    }
    return array;
  }

  const [firstFaceUp, setFirstFaceUp] = useState(null);
  const [secondFaceUp, setSecondFaceUp] = useState(null);

  function flipCard(index) {
    if (animalPairs[index].isFlipped || secondFaceUp !== null) return;

    let newAnimalPairs = [...animalPairs];
    newAnimalPairs[index].isFlipped = true;

    if (firstFaceUp !== null) {
      if (newAnimalPairs[index].id === newAnimalPairs[firstFaceUp].id) {
        newAnimalPairs[index].isMatched = true;
        newAnimalPairs[firstFaceUp].isMatched = true;
        setAnimalPairs(newAnimalPairs);
        setFirstFaceUp(null);
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
    if (secondFaceUp === null) return;
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
      setFirstFaceUp(null);
      setSecondFaceUp(null);
    }, 1000);
  }, [secondFaceUp]);

  const handleRestart = () => {
    setAnimalPairs([false]);
    shuffleCards();
  };

  return (
    <div className="App">
      <div className="game-name">
        <h1>Matching Game</h1>
        <p>Flip the card to match the animal pictures!</p>
        <button className="new-game-button" onClick={handleRestart}>
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

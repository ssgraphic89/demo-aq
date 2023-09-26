// import React, { useState } from 'react';
// import { useTrail, animated } from 'react-spring';
// import card1 from './04.jpg';
// import './CardGame.css'; // Create a CSS file for styling
// // import card1 from './04.jpg';

// const CardGame = (props) => {
//   const [showCards, setShowCards] = useState(false);
//   const [hand, setHand] = useState([]);
//   // const [playerHand, setPlayerHand] = useState([]);
//   const cardImages = [card1, card1, card1, card1, card1]; // Array of card image URLs

//   const drawCard = () => {
//     // Simulate drawing a card from the deck
//     const randomIndex = Math.floor(Math.random() * cardImages.length);
//     const drawnCard = cardImages[randomIndex];

//     // Add the drawn card to the hand
//     setHand([...hand, drawnCard]);
//   };


//   const trails = useTrail(5, {
//     opacity: showCards ? 1 : 0,
//     transform: showCards ? 'translateY(0px)' : 'translateY(40px)',
//     config: { mass: 1, tension: 210, friction: 20 },
//     from: { opacity: 0, transform: 'translateY(40px)' },
//   });

//   return (
//     <div className="card-game">
//       <button onClick={() => setShowCards(!showCards)}>
//         {showCards ? 'Hide AI Cards' : 'Generate AI Cards'}
//       </button>
//       <div className="hand">
//         {trails.map((trail, index) => (
//           <animated.div
//             key={index}
//             className="card"
//             style={{
//               ...trail,
//               zIndex: 5 - index,
//               backgroundImage: `url(${cardImages[index]})`,
//             }}
//           />
//         ))}
//       </div>
//       {/* <button onClick={() => drawCard()}>Draw Card</button> */}
//     </div>
//   );
// };

// export default CardGame;


import React, { useState } from 'react';
import { useTrail, animated } from 'react-spring';
import card from './04.jpg'
import card2 from './01.jpg'
import './CardGame.css'; // Create a CSS file for styling

const CardGame = () => {
  const [showCards, setShowCards] = useState(false);
  const [hand, setHand] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null); // State to store the selected card
  const cardImages = [card,card2]; // Array of card image URLs

  const drawCard = () => {
    // Simulate drawing a card from the deck
    const randomIndex = Math.floor(Math.random() * cardImages.length);
    const drawnCard = cardImages[randomIndex];

    // Add the drawn card to the hand
    setHand([...hand, drawnCard]);
  };

  const selectCard = (card) => {
    // Set the selected card when clicked
    setSelectedCard(card);
  };

  const trails = useTrail(cardImages.length, {
    opacity: showCards ? 1 : 0,
    transform: showCards ? 'translateY(0px)' : 'translateY(40px)',
    config: { mass: 1, tension: 210, friction: 20 },
    from: { opacity: 0, transform: 'translateY(40px)' },
  });

  return (
    <div className="card-game">
      <button onClick={() => setShowCards(!showCards)}>
        {showCards ? 'Hide AI Cards' : 'Generate AI Cards'}
      </button>
      <div className="hand">
        {trails.map((trail, index) => (
          <animated.div
            key={index}
            className={`card ${selectedCard === cardImages[index] ? 'selected' : ''}`}
            style={{
              ...trail,
              zIndex: cardImages.length - index,
              backgroundImage: `url(${cardImages[index]})`,
            }}
            onClick={() => selectCard(cardImages[index])}
          />
        ))}
      </div>
      <div className="selected-card">
        {selectedCard && (
          <div>
            <h2>Selected Image:</h2>
            <img src={selectedCard} alt="Selected Card" />
          </div>
        )}
      </div>
      {/* <button onClick={() => drawCard()}>Draw Card</button> */}
    </div>
  );
};

export default CardGame;

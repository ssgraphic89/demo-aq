// SelectedCards.js
// import React from 'react';
// import './SelectedCards.css'; // Create a CSS file for styling

// const SelectedCards = ({ selectedCards }) => {
//   return (
//     <div className="selected-cards">
//       <h2>Selected Cards:</h2>
//       <div className="selected-cards-list">
//         {selectedCards.map((card, index) => (
//           <div key={index} className="selected-card">
//             <img src={card} alt={`Selected Card ${index + 1}`} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SelectedCards;

// SelectedCards.js
import React from 'react';
import './SelectedCards.css'; // Create a CSS file for styling

const SelectedCards = ({ selectedCard }) => {
  return (
    <div className="selected-cards">
      <h2>Selected Card:</h2>
      <div className="selected-card">
        {selectedCard && <img src={selectedCard} alt="Selected Card" />}
      </div>
    </div>
  );
};

export default SelectedCards;


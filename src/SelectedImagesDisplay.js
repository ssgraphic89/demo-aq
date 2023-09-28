// import React from 'react';
// import './CardGame.css';

// const SelectedImagesDisplay = ({ selectedImages }) => {
  

//   return (
    
//     <div className="">
//       {/* <h2>Selected Images</h2> */}
//       <ul>
       
//         {selectedImages.map((image, index) => (
//           <li key={index} className='card'>
//                   <img
//                       style={{ width: "100%", height: "auto" }}
//                       src={image}
//                       alt="card"
//               />
//             {/* <img src={image} className="selectedimg" alt={`Selected ${index + 1}`} /> */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SelectedImagesDisplay;

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CardGame.css';

const SelectedImagesDisplay = ({ selectedImages }) => {
  // Configure the settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  
  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {selectedImages.map((image, index) => (
          <div key={index} className='card'>
            <img
              style={{ width: "150px", height: "200px" }}
              src={image}
              alt="card"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SelectedImagesDisplay;

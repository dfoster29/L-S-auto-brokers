import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import imageOne from '../Images/image1.png'
import imageTwo from '../Images/image2.png'
import imageThree from '../Images/image3.png'


// class DemoCarousel extends Component {
//   render() {
//     return (
//       <Carousel>
//         <div>
//           <img src="assets/1.jpeg" alt="" />
//           <p className="legend">Legend 1</p>
//         </div>
//         <div>
//           <img src="assets/2.jpeg" alt="" />
//           <p className="legend">Legend 2</p>
//         </div>
//         <div>
//           <img src="assets/3.jpeg" alt="" />
//           <p className="legend">Legend 3</p>
//         </div>
//       </Carousel>
//     );
//   }
// });

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));


function DemoCarousel() {
    return (
      <Carousel>
        <div>
        <img src={imageOne} alt="" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
        <img src={imageTwo} alt="" />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
        <img src={imageThree} alt="" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    );
  };

export default DemoCarousel;

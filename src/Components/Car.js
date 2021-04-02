import '../App.css';
import civicOne from '../Images/04-Civic/IMG_9156.jpg'
import civicTwo from '../Images/04-Civic/IMG_9157.jpg'
import civicThree from '../Images/04-Civic/IMG_9158.jpg'
import civicFour from '../Images/04-Civic/IMG_9160.jpg'
import civicFive from '../Images/04-Civic/IMG_9161.jpg'
import civicSix from '../Images/04-Civic/IMG_9162.jpg'
import civicSeven from '../Images/04-Civic/IMG_9163.jpg'
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function Car() {
  return (
    <div>


      <section class="available-cars">
        <article className="car">
        <h3 class="car-model">2004 Honda Civic EX Coupe</h3>
        <div className="sold-wrapper">
        <Carousel>
            <div>
              <img src={civicOne} alt="" />

            </div>
            <div>
              <img src={civicTwo} alt="" />

            </div>
            <div>
              <img src={civicThree} alt="" />

            </div>
            <div>
              <img src={civicFour} alt="" />

            </div>
            <div>
              <img src={civicFive} alt="" />

            </div>
            <div>
              <img src={civicSix} alt="" />

            </div>
            <div>
              <img src={civicSeven} alt="" />

            </div>

          </Carousel>
          <p className="car-sold">SOLD!</p>
        </div>
          
          
          <h3 class="green-text">$3,450</h3>
          <p><strong>Mileage:</strong> 132,100</p>
          <p><strong>Transmission:</strong> Automatic</p>
          <p><strong>Recent Maintenance:</strong> New headgasket, water pump, timing belt, and oil change.</p>
          <p><strong>Additional Details:</strong> Clean title</p>
          {/* <a href="car1.html">more info...</a> */}
        </article>
      </section>
    </div>
  );
}

export default Car;

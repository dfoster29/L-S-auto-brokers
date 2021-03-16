import '../App.css';
import imageOne from '../Images/image1.png'
import imageTwo from '../Images/image2.png'
import imageThree from '../Images/image3.png'
import imageFour from '../Images/image1.png'
import React from "react";
import Home from './Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Car() {
  return (
    <Router>
      <div>

        <Link to="/">Home</Link>

        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>


        <section>
          <div class="car-images">
            <img className="car-image" src={imageOne} alt="" />
            <div className="car-thumbnails">
              <img className="thumbnail" src={imageOne} alt="" />
              <img className="thumbnail" src={imageTwo} alt="" />
              <img className="thumbnail" src={imageThree} alt="" />
              <img className="thumbnail" src={imageFour} alt="" />
            </div>
          </div>

          <div className="car-info">
            <h2>Year Make Model</h2>
            <h3>$X,XXX</h3>
            <p><strong>Trim:</strong></p>
            <p><strong>Drivetrain:</strong></p>
            <p><strong>Transmission:</strong></p>
            <p><strong>Engine:</strong></p>
            <p><strong>Mileage:</strong></p>
            <p><strong>Exterior Color:</strong></p>
            <p><strong>Interior Color:</strong></p>
            <p><strong>VIN:</strong></p>
            <p><strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>

        </section>
      </div >
    </Router>

  );
}

export default Car;








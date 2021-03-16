import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import Car from './Components/Car';
import DemoCarousel from './Components/DemoCarousel';
<link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css" />


function App() {
  return (
    <div className="App">
      <Header></Header>

      <main>

        <Home></Home>

        <Car></Car>

      </main>


    </div>
  );
}

export default App;

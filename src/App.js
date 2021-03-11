import logo from './Images/logo.jpeg';
import smLogoWhite from './Images/L&S_White_500px.png';
import './App.css';
import Header from './Components/Header.js';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <main>


        <img src={logo} className="logo-lg" alt="logo" />

      </main>

    </div>
  );
}

export default App;

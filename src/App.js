import logo from './Images/logo.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <p className="text-logo">L<span className="red">&</span>S</p>

        <div className="top-links">
          <a href="tel:2015721516">Sal: (201) 572-1516</a>
          <a href="tel:9738760921">Luis: (973) 876-0921</a>
        </div>
      </header>
      <main>


        <img src={logo} className="logo-lg" alt="logo" />

      </main>

    </div>
  );
}

export default App;

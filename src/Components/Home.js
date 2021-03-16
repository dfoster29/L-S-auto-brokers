import logo from '../Images/logo.jpeg'
import '../App.css';

function Home() {
  return (
    <div>
      <img src={logo} className="logo-lg" alt="logo" />

      <section className="about-business">
        {/* <p>section about business here</p> */}
      </section>
    </div>
  );
}

export default Home;

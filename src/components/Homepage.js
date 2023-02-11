import domotHero from "../assets/domotHero.jpg";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="hero">
      <Navbar />
      <div class="hero-section">
        <img src={domotHero} alt="myDomot" className="hero-img" />
        <div class="hero-section-content">
          <h1>Grocery Shopping Made Easy</h1>
          <p>
            Get Your Groceries Delivered Easily and Affordably with &nbsp;
            <span className="mydomot">My Domot</span>
          </p>
          <Link to="/">
            <button>Get Started</button>
          </Link>
          <p>
            Say goodbye to tedious grocery shopping. Let our experienced
            shoppers bring the groceries you need right to your doorstep, so you
            can enjoy more time doing the things you love.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

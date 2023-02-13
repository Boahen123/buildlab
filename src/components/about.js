import React from "react";
import shoppingCart from "../assets/shopping-cart.webp";

class AboutUs extends React.Component {
  render() {
    return (
      <>
        <section className="about">
          <div className="row">
            <div className="column">
              <img src={shoppingCart} alt="" id="shopping" />
            </div>

            <div className="column">
              <div className="about-info">
                <div className="main-title">
                  <h2>About Us</h2>
                </div>
                <h3> Making Grocery Shopping Hassle-free</h3>
                <p>
                  {" "}
                  MyDom is a technology-driven personal shopping service that
                  connects individuals with local personal shoppers who can
                  purchase groceries on their behalf. Our platform allows
                  customers to submit a list of items they need and we match
                  them with a personal shopper who can purchase the items and
                  deliver them to the customer's doorstep. Our goal is to make
                  raw food items and grocery shopping hassle-free and convenient
                  for our customers, while providing access to fresh and healthy
                  food items.
                </p>

                <div className="personal-info">
                  <div className="info-row">
                    {/* <div className="col">
                      {" "}
                      <p>
                        Name: <span>Tom Wilson</span>
                      </p>
                    </div>
                    <div className="col">
                      {" "}
                      <p>
                        Age: <span>Dick Harry</span>
                      </p>
                    </div> */}
                    <div className="col">
                      {" "}
                      <p>
                        Email: <span></span>
                      </p>
                    </div>
                    <div className="col">
                      {" "}
                      <p>
                        Phone: <span></span>
                      </p>
                    </div>
                    <div className="col">
                      {" "}
                      <p>
                        Address: <span></span>
                      </p>
                    </div>
                    {/* <div className="col">
                      {" "}
                      <p>
                        Fiver: <span>Tom Maxwell</span>
                      </p>
                    </div> */}
                  </div>

                  <div className="btn">
                    <a href="#" className="banner-btn">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default AboutUs;

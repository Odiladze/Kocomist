import React from "react";

function App() {
  return (
    <html lang="en">
      <head>
        {/* <meta http-equiv="X-UA-Compatible" content="IE=edge" /> */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Kocomist</title>
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <header>
          <img
            src="img/2385235-removebg-preview.png"
            alt="logo"
            className="logo"
          />
          <ul className="headerul">
            <li>
              <a href="#">მთავარი</a>
            </li>
            <li>
              <a href="product.html" target="_blank">
                პროდუქცია
              </a>
            </li>
            <li>
              <a href="productOne.html">ყიდვა</a>
            </li>
          </ul>
        </header>

        <section className="gifsection">
          <img
            src="Img/kocomist gif endless (1).gif"
            alt="giff"
            className="endlessgif"
          />
        </section>

        <section className="adv">
          <p>
            PARABEN FREE - SULFATE FREE - PHTHALATE FREE - FREE OF MINERAL OILS
            - FREE OF GMOS - CRUELTY-FREE - CARBON NEUTRAL{" "}
          </p>
        </section>

        <section className="z-layout">
          <div className="zgrid">
            <div className="div1">
              <img src="Img/91283.gif" alt="z1" className="zimg" />
            </div>
            <div className="ztxt">
              <h3>NO ROUGH DAYS</h3>
              <p>
                Just the best shave with our NEW SheaMoisture Mens Shave system
                designed to give you a smooth face and flawless skin.
              </p>
              <button className="zbtn">Click me</button>
            </div>
            <div className="ztxt">
              <h3>About us</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt natus corporis labore, consequuntur impedit
                necessitatibus rem praesentium repudiandae quas vel fuga
                accusamus tempora. Rem repellat, optio sint tenetur voluptatum
                reiciendis?
              </p>
              <button className="zbtn">Click me</button>
            </div>
            <div className="div2">
              <img
                src="Img/Honey yogurt conditioner.jpg"
                alt="z2"
                className="zimg"
              />
            </div>
          </div>
        </section>
        <section className="imgandprod">
          <button
            className="imgandprodbut"
            onClick={() => window.open("product.html")}
          >
            <a href="product.html" target="_blank">
              Products
            </a>
          </button>
        </section>

        <section>
          <div className="grid-4-col">
            <img src="Img/coconut conditioner.jpg" alt="img1" />
            <img src="Img/coconut shampoo front view.png" alt="img2" />
            <img src="Img/coconut conditioner.jpg" alt="img1" />
            <img src="Img/coconut shampoo front view.png" alt="img2" />
          </div>
        </section>
      </body>
    </html>
  );
}

export default App;

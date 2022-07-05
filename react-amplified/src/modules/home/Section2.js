import React from "react";

export default function Section2() {
  return (
    <section className="section2 container-fluid">
      <div className="section2-box">
        <div>
          <h2>
            HALF ANIMAL
            <br />
            HALF ALIEN
          </h2>
          <p>
            In early 2021, engineers at the mysterious Exo Laboratory completed
            work on a revolutionary machine to create the first digital sentient
            creatures ever, made by combining Alien DNA found on an asteroid
            with the DNA of 5 unique animals: a whale, spider, sloth, armadillo,
            and crocodile. They named them the Buddis.
          </p>
          <div className="row mt-5">
            <div className="col-4 dna">
              <img src="img/Asset 12.png" />
              <div>
                <p>A</p>
              </div>
              <img src="img/VGC4_DNA_Final 1.png" />
            </div>
            <div className="col-4 dna">
              <img src="img/Asset 12.png" />
              <div>
                <p>B</p>
              </div>
              <img src="img/VGC4_DNA_Final 2.png" />
            </div>
            <div className="col-4 dna">
              <img src="img/Asset 12.png" />
              <div>
                <p>AB</p>
              </div>
              <img src="img/VGC4_DNA_Final 3.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="background">
        <div className="position-relative">
          <img src="img/DNA_Printer.png" />
        </div>
      </div>
    </section>
  );
}

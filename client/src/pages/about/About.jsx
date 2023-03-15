import React from 'react';
import "./about.scss";

function About() {
  return (
    <section className="wrapper-full tab-container effectTab-header">
      <div className="wrapper tab-item">
        <div className="custom-row">
          {/* HEADER WRAPPING*/}
          <div className="wrapper">
            <h1 className="ti title">Meet the Team</h1>
          </div>
          {/* HEADER WRAPPING*/}

          <div className="column-12 column-xs-12 column-sm-12 tab">
            <div className="well well-lg">
              <div className="row">

                <div className="column-4 column-sm-6 column-md-6 column-xs-12 box-tab">
                  <div className="effect effect-nine">
                    <img src="https://lps.ericksonliving.com/wp-content/uploads/2019/08/Adibe-3.jpg" width="350" height="500" alt="" className="img-fluid"/>
                    <div className="tab-text">
                      <p>Work with Erickson Living Managemnt's computer network, using information technology to make network systems for all employees to use. These data networks include local area networks (LANs), wide area networks (WANs), intranets and extranets.</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3">
                      <h2 className="name-tag">Andrew Neely</h2>
                      <h2 className="name-tag">Backend</h2>
                    </div>
                  </div>
                </div>

                <div className="column-4 column-sm-6 column-md-6 column-xs-12 box-tab">
                  <div className="effect effect-nine">
                    <img src="https://lps.ericksonliving.com/wp-content/uploads/2019/08/Adibe-3.jpg" width="350" height="500" alt="" className="img-fluid"/>
                    <div className="tab-text">
                      <p>Work with Erickson Living Managemnt's computer network, using information technology to make network systems for all employees to use. These data networks include local area networks (LANs), wide area networks (WANs), intranets and extranets.</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3">
                      <h2 className="name-tag">Crystal Oberg</h2>
                      <h2 className="name-tag">RDS and Styling</h2>
                    </div>
                  </div>
                </div>

                <div className="column-4 column-sm-6 column-md-6 column-xs-12 box-tab">
                  <div className="effect effect-nine">
                    <img src="https://lps.ericksonliving.com/wp-content/uploads/2019/08/Adibe-3.jpg" width="350" height="500" alt="" className="img-fluid"/>
                    <div className="tab-text">
                      <p>Work with Erickson Living Managemnt's computer network, using information technology to make network systems for all employees to use. These data networks include local area networks (LANs), wide area networks (WANs), intranets and extranets.</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3">
                      <h2 className="name-tag">Antonio Ochoa-Perez</h2>
                      <h2 className="name-tag">Deployment</h2>
                    </div>
                  </div>
                </div>

                {/* Add more team members here */}

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
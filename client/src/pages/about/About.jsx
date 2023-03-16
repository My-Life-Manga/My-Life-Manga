import React from 'react';
import "./about.scss";
import {Link} from 'react-router-dom'

function About() {
  return (
      <section className="wrapper-full tab-container effectTab-header">
        <div className="wrapper tab-item">
          <div className="custom-row">
            <div className="wrapper">
              <h1 className="ti title">Meet the Team</h1>
            </div>
            <div className="column-12 column-xs-12 column-sm-12 tab">
              <div className="well well-lg">
                <div className="row">
                  <div className="column-4 column-sm-6 column-md-6 column-xs-12 box-tab">

                    <div className="effect effect-nine">
                      <img src="https://avatars.githubusercontent.com/u/114946953?v=4" width="350" height="500" alt=""
                           className="img-fluid"/>
                      <div className="tab-text">
                        <p>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path
                                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          &nbsp;<Link to={"https://github.com/Andrew-Neely-82"} target="_blank">Github</Link></p>

                        <p>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path
                                d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                          &nbsp;<Link to={"https://www.linkedin.com/in/andrewneely82/"} target="_blank">LinkedIn</Link>
                        </p>
                        <p>
                          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
                               clip-rule="evenodd">
                            <path
                                d="M24 21h-3l1-3h1l1 3zm-12.976-4.543l8.976-4.575v6.118c-1.007 2.041-5.607 3-8.5 3-3.175 0-7.389-.994-8.5-3v-6.614l8.024 5.071zm11.976.543h-1v-7.26l-10.923 5.568-11.077-7 12-5.308 11 6.231v7.769z"/>
                          </svg>
                          &nbsp;<Link to={"https://alumni.codeup.com/students/1781"} target="_blank">Codeup Alumni</Link>
                        </p>
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
                      <img src="https://s3.amazonaws.com/alumni.codeup.com/AP%20Antonio%20Ochoa.jpg" width="350"
                           height="500" alt="" className="img-fluid"/>
                      <div className="tab-text">

                        <p>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path
                                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          &nbsp;
                          <Link to={"https://github.com/APerezOchoa"} target="_blank">Github</Link>
                        </p>

                        <p>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path
                                d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                          &nbsp;
                          <Link to={"https://www.linkedin.com/in/aperezochoa/"} target="_blank">LinkedIn</Link>
                        </p>
                        <p>
                          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
                               clip-rule="evenodd">
                            <path
                                d="M24 21h-3l1-3h1l1 3zm-12.976-4.543l8.976-4.575v6.118c-1.007 2.041-5.607 3-8.5 3-3.175 0-7.389-.994-8.5-3v-6.614l8.024 5.071zm11.976.543h-1v-7.26l-10.923 5.568-11.077-7 12-5.308 11 6.231v7.769z"/>
                          </svg>
                          &nbsp;
                          <Link to={"https://alumni.codeup.com/students/1777"} target="_blank">Codeup Alumni</Link>
                        </p>

                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-3">
                        <h2 className="name-tag">Antonio Ochoa-Perez</h2>
                        <h2 className="name-tag">Deployment</h2>
                      </div>
                    </div>
                  </div>

                  <div className="column-4 column-sm-6 column-md-6 column-xs-12 box-tab">
                    <div className="effect effect-nine">
                      <img src="https://s3.amazonaws.com/alumni.codeup.com/AP%20Crystal%20Ochoa.jpg" width="350"
                           height="500" alt="" className="img-fluid"/>
                      <div className="tab-text">
                        <p>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path
                                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          &nbsp;
                          <Link to={"https://github.com/crystalOberg"} target="_blank">Github</Link>
                        </p>

                        <p>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path
                                d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                          &nbsp;
                          <Link to={"https://www.linkedin.com/in/crystal-o-a356a9221/"} target="_blank">LinkedIn</Link>
                        </p>
                        <p>
                          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
                               clip-rule="evenodd">
                            <path
                                d="M24 21h-3l1-3h1l1 3zm-12.976-4.543l8.976-4.575v6.118c-1.007 2.041-5.607 3-8.5 3-3.175 0-7.389-.994-8.5-3v-6.614l8.024 5.071zm11.976.543h-1v-7.26l-10.923 5.568-11.077-7 12-5.308 11 6.231v7.769z"/>
                          </svg>
                          &nbsp;
                          <Link to={"https://alumni.codeup.com/students/1779"} target="_blank">Codeup Alumni</Link>
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-3">
                        <h2 className="name-tag">Crystal Oberg</h2>
                        <h2 className="name-tag">RDS and Styling </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default About;
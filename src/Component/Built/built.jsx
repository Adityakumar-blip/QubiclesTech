import React from "react";
import "./built.css";

import Start from "../Start/Start";
import Card from '../Card/Card';
import Work from '../Work/Work';
import Workflow from "../Workflow/Workflow";
import img1 from '../../Assets/head.png'

import Zoom from 'react-reveal/Zoom'
import  Fade  from "react-reveal/Fade";

const built = () => {
  return (
    <>
      <div className="built-main-container">
        <div className="built-row row m-0">
          <div
            className="built-col-first col col-lg-7 col-md-7 col-sm-12"
          >
                <Fade left>
            <div className="built-subcontainer">
              <div className="built-header">
                <h2>
                  We’re Built Different
                  <br />
                  We Build Different
                </h2>
              </div>
              <div className="built-para">
                <p>
                  Qubicles is a web development agency. Our experienced web
                  designers, UX/UI specialists, web developers, SEOs, digital
                  marketers and managers specialize in business websites
                  creation. We will deliver you marketing and technology
                  solutions to achieve your company's goals in the best way.
                </p>
              </div>
              <div className="built-button">
                <a href="https://wa.me/917291921804?text=Hii Qubicles"><button type="button" class="built-first-button btn btn-outline-primary">
                  Hire us
                </button></a>
              </div>
            </div>
                </Fade>
          </div>
          <div className="built-col-second col col-lg-5 col-md-5 col-sm-12">
            <Fade right>
            <div className="built-image">
              <img src={img1} />
            </div>
            </Fade>
          </div>
        </div>
      </div>

<Workflow/>
      {/* <Start/> */}
   <Work/>
   <Card/>
    </>
  );
};

export default built;

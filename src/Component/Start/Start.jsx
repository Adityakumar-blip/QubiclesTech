import React from 'react'
import './Start.css'

const Start = () => {
  return (
    <>
      <div className="start-main-container">
        <div className="start-row row m-0">
          <div
            className="start-col-first col col-lg-6 col-md-6 col-sm-12"
          >
             <div className="start-image">
              <img
                src="https://miro.medium.com/max/1400/1*UJHsNXtu3OclxO_8Z1HPjQ.jpeg"
                alt=""
              />
              <h1>Solution</h1>
            </div>
          </div>
          <div className="start-col-second col col-lg-6 col-md-6 col-sm-12">
          <div className="start-header">
                <h2>
                Let’s<br/> Start<br/> Building
                </h2>
              </div>
              <div className="start-button">
                <a href='https://wa.me/917291921804?text=Hii Qubicles'><button type="button" class="start-first-button btn btn-outline-primary">
                  Hire us
                </button></a>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Start
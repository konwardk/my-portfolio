import React from 'react'
import '../styles/Projects.css'
import cms from '../images/cms.png'
import ems from '../images/emp management.png'
import rms from '../images/restaurant.png'
import crs from '../images/car-rent.png'
import portfolio from '../images/portfolio.png'
import oexam from '../images/oexam.png'


export default function Projects() {
  return (
    <div className='main-content' id='projects'>
      <div className="heading">
        <h3 className=''>My Projects</h3>
      </div>

        <div className='list'>
        <div className="card p1">
            <img className="card-img-top" src={portfolio} alt='img for Project 1'/>
            <div className="card-body">
              <h5 className="card-title">
                Portfolio website using React
              </h5>
              <p>Tech: ReactJS, Bootstrap</p>
            </div>
          </div>
          <div className="card p1">
            <img className="card-img-top" src={cms} alt='img for Project 1'/>
            <div className="card-body">
              <h5 className="card-title">
                CMS for Meghalaya State Portal
              </h5>
              <p>Tech: HTML,CSS,JS,Laravel, Bootstrap, jQuery</p>

            </div>
          </div>
          <div className="card p1">
            <img className="card-img-top" src={rms} alt='img for Project 1'/>
            <div className="card-body">
              <h5 className="card-title">
                Restaurant Management System
              </h5>
              <p>Tech: HTML,CSS,JS,Laravel, Bootstrap</p>

            </div>
          </div>
          <div className="card p1">
            <img className="card-img-top" src={crs} alt='img for Project 1'/>
            <div className="card-body">
              <h5 className="card-title">
                Online Car Rental System
              </h5>
              <p>Tech: HTML,CSS,JS,PHP</p>

            </div>
          </div>
          <div className="card p1">
            <img className="card-img-top" src={ems} alt='img for Project 1'/>
            <div className="card-body">
              <h5 className="card-title">
                Employee Record Storing System
              </h5>
              <p>Tech: HTML,CSS,JS,PHP</p>
            </div>
          </div>
          <div className="card p1">
            <img className="card-img-top" src={oexam} alt='img for Project 1'/>
            <div className="card-body">
              <h5 className="card-title">
                Online Examination System
              </h5>
              <p>Tech: HTML,CSS,JS,PHP</p>
            </div>
          </div>
        </div>
    </div>
  )
}

import React from 'react'
// import { Button } from 'react-bootstrap'
import myPhoto from '../images/bgNone.png'
import boot from '../images/bootstrap.png'
import tailwind from '../images/tailwind.png'
import html from '../images/html.png'
import css from '../images/css.png'
import js from '../images/js.png'
import php from '../images/php.png'
import ajax from '../images/ajax.png'
import jquery from '../images/jQuery.png'
import react from '../images/react.png'
import node from '../images/nodejs.png'
import laravel from '../images/laravel.png'
import '../styles/About.css'
export default function About(props) {
  return (
    <div className='main-content'>
      <div className='about-me'  id='about'>
        <div className='p-img'>    
          <img className='img' clipPath='url(#sss)' src={myPhoto} alt='a'></img>
        </div>
        <div className='about-section'>
          <p className='about-me'>
            Hey, I'm <span className='name'>Dipankor Konwar({props.name})</span>
          </p>
          <p className='about-this'>
          Software Developer<br/> Works on React JS, Laravel, Node JS, MongoDB
          </p>
          <p className='myself'>

          </p>
        </div>
      </div>
        <div className='skills'> <h3>Skills</h3> </div>
      <div className='my-Skills'>
        <div className='front-end'>
          <img className='img-t html' src={html} alt='HTML'/>

          <img className='img-t js'  src={js} alt='JavaScript'/>
        </div>
        <div className='styling'>
          <img className='img-t css'  src={css} alt='CSS'/>
          <img className='img-t bootstrap'  src={boot} alt='bootstrap'/>
          <img className='img-t tailwind'  src={tailwind} alt='tailwind'/>
        </div>
        <div className='back-end'>
          <img className='img-t php'  src={php} alt='PHP'/>
          <img className='img-t laravel'  src={laravel} alt='Laravel'/>
          <img className='img-t ajax'  src={ajax} alt='ajax'/>
          <img className='img-t jquery'  src={jquery} alt='jquery'/>
        </div>
        <div className='react'>
        <img className='img-t react'  src={react} alt='react'/>
        <img className='img-t node'  src={node} alt='node'/>


        </div>
      </div>
    </div>
  )
}

import React from 'react'
// import {Button} from 'react-bootstrap';
import '../styles/Header.css';
export default function Header(props) {
  return (
    <div className='header'>
      <h3 className=''>Welcome to my First React Application <span className='p-name'>{props.project}</span></h3>
    </div>
  )
}

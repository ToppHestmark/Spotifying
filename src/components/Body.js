import React from 'react';
import { useStateContextValue } from '../context/StateProvider';
import './Body.css';
import Header from './Header';

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useStateContextValue()

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img 
          src={discover_weekly?.images[0].url} 
          alt=""/>
        <div className="body__infoText">
          <strong>PLATLISTS</strong>
          <h2>Discover Weekly</h2>
          <p> {discover_weekly?.description} </p>
        </div>
      </div>
    </div>
  )
}

export default Body

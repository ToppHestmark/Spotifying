import React from 'react';
import Body from './Body';
import './Player.css';
import Sidebar from './Sidebar';
import Footer from './Footer';
// This is the main container for every other components

function Player() {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body />
      </div>

      <Footer />
    </div>
  )
}

export default Player

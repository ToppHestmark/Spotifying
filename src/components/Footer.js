/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './Footer.css';
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img 
        className="footer__albumLogo"
        src="https://img.discogs.com/vPyz98tSeZExkGVjl4fgLThOTxQ=/fit-in/600x582/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4251351-1359747013-1471.jpeg.jpg"
        alt="Album image"/>
        <div className="footer__songInfo">
          <h4>Vi Ska Fæst</h4>
          <p>D.D.E.</p>
        </div>
      </div>
      <div className="footer__center">
       <ShuffleIcon className="footer__green" />
       <SkipPreviousIcon className="footer__icon" />
       <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
       <SkipNextIcon className="footer__icon" />
       <RepeatIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>  
    </div>
  )
}

export default Footer

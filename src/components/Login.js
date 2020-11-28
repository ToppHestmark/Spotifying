import React from 'react';
import { loginUrl } from '../utils/spotify';
import  './Login.css';

function Login() {
  return (
    <div className="login">
      <img 
        src="https://media.idownloadblog.com/wp-content/uploads/2016/06/Spotify_logo_horizontal_black.jpg" 
        alt="Spotify Logo" />
        <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;

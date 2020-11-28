import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import { getTokenFromUrl } from './utils/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player';
import { useStateContextValue } from './utils/StateProvider'

const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useStateContextValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })

      spotify.setAccessToken(_token);
      
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      })
    }

  }, []);
  
  console.log('This is the token:', token);

  return (
    <div className="app">{token ? (<Player />) : (<Login />)}</div>
  );
}

export default App;

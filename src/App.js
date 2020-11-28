import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import { getTokenFromUrl } from './utils/spotify';

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token)
    }

    console.log('Wow, just got a token >>>', hash);
  }, []);

  return (
    <div className="app">{token ? (<h1>Player page after logged  in.</h1>) : (<Login />)}</div>
  );
}

export default App;

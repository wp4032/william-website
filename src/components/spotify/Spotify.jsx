import React, { useEffect, useState } from 'react';
import querystring from 'querystring';
import axios from 'axios';
import SpotifyTracks from './SpotifyTracks'; 
import SpotifyLogo from './SpotifyLogo';
import './spotify.css';
var Buffer = require('buffer/').Buffer;

const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN;

const basic = (Buffer(client_id + ':' + client_secret).toString('base64'));

const Spotify = () => {

  const [tracks, setTracks] = useState({ listOfTracksFromAPI: [] });

  useEffect(() => {

    axios(TOKEN_ENDPOINT, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ` + basic
      },
      data: querystring.stringify({
        grant_type: 'refresh_token',
        refresh_token
      }),
      method: 'POST'
    })
      .then(tokenResponse => {

        axios(RECENTLY_PLAYED_ENDPOINT, {
          method: 'GET',
          headers: { 'Authorization': 'Bearer ' + tokenResponse.data.access_token }
        })
          .then(recentResponse => {
            setTracks({
              listOfTracksFromAPI: recentResponse.data.items.slice(0, 5)
            });
          })
      });

  }, []);

  const recentTracks = tracks.listOfTracksFromAPI.map((recentTrack) => ({
    song: recentTrack.track.name,
    songUrl: recentTrack.track.external_urls.spotify,
    artists: recentTrack.track.artists.map((_artist) => _artist.name).join(', '),
    albumCover: recentTrack.track.album.images[0].url
  }));

  return (
    <div className="william__spotify" >
      <div className="william__spotify-container">
        <div className="william__spotify-container-header">
          <h1> Recently played on Spotify </h1>
          <SpotifyLogo />
        </div>
        <div className="william__spotify-songscontainer">
          <SpotifyTracks tracks={recentTracks}/>
        </div>
      </div>
    </div>
  )
}

export default Spotify
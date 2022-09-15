import React from 'react';
import { motion } from 'framer-motion';
import './spotify.css'

const SpotifyTracks = ({ tracks }) => {
  return tracks.map(recentTrack => {
    return (
      <div className="william__spotify-track">
        <a href={recentTrack.songUrl}> <motion.img src={recentTrack.albumCover} alt={recentTrack.song} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} /> </a>
        <h2> {recentTrack.song} </h2>
        <p> {recentTrack.artists} </p>
      </div>
    )
  })
}

export default SpotifyTracks
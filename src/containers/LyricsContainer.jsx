import React, { useState, useEffect } from 'react';
import Lyrics from '../components/artists/Lyrics';
import { useParams } from 'react-router-dom';
import { getLyrics }  from '../services/MusicBrainz.js';



const LyricsContainer = () => {
  const { name, title } = useParams();

  const [lyrics, setLyrics] = useState('');

  useEffect(() => {
    getLyrics(name, title)
      .then(lyrics => setLyrics(lyrics));
  }, []);
  
  return (
    <>
      <Lyrics lyrics={lyrics} />     
    </>
  );
};



export default LyricsContainer;

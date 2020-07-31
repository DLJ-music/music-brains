import React, { useState, useEffect } from 'react';
import Lyrics from '../components/artists/Lyrics';
import { useParams } from 'react-router-dom';
import { getLyrics }  from '../services/MusicBrainz.js';

const LyricsContainer = () => {
  const { name, title } = useParams();
  
  const [loading, setLoading] = useState('');
  const [lyrics, setLyrics] = useState('');

  useEffect(() => {
    setLoading(true);
    lyrics;
    getLyrics(name, title)
      .then(lyrics => {
        if(!lyrics) setTimeout(() => {
          history.go(-1); 
        }, 1500);
        setLyrics(lyrics); 
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  //loading animation 
  if(loading) return <div style={{ display: 'flex', WebkitJustifyContent: 'center' }}><img src='/loading.gif' alt="loading"/></div>;
  //broken link message and redirect on a timer
  if(!lyrics) return <section>
    <div style={{ display: 'flex', WebkitJustifyContent: 'center' }}>
      <h2>No Lyrics for this song...Redirecting</h2>
    </div>
    <div style={{ display: 'flex', WebkitJustifyContent: 'center' }}>
      <img style={{ width:'25%' }} src='/broken.png' alt="broken link" />
    </div>
  </section>;
 
  return (
    <>
      <Lyrics lyrics={lyrics} />     
    </>
  );
};

export default LyricsContainer;



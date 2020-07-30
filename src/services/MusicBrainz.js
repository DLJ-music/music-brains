export const getArtists = (artist, offset = 0, limit = 25) => {
  return fetch (`https://musicbrainz.org/ws/2/artist?query=${artist}&fmt=json&limit=${limit}&offset=${offset}`, { 
    headers: {
      Origin: null
    }
  })
    .then(res => res.json());
};
  
export const getArtistByID = (id) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${id}&fmt=json`, {
    headers: {
      Origin: null
    }
  })
    .then(res => res.json());
};

export const getReleaseByID = id => {
  return fetch(`http://musicbrainz.org/ws/2/recording?release=${id}&fmt=json`, {
    headers: {
      Origin: null
    }
  })
    .then(res => res.json());
};

export const getLyrics = (artist, song) => {
  return fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`, {
    headers: {
      Origin: null
    }
  })
    .then(res => res.json())
    .then(res => res.lyrics);
};

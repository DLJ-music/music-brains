export const getArtists = (artist, offset = 0, limit = 25) => {
  return fetch (`https://musicbrainz.org/ws/2/artist?query=${artist}&fmt=json&limit=${limit}&offset=${offset}`, { 
    headers: {
      Origin: null
    }
  })
    .then(res => res.json());
};
  
export const getArtistByID = id => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${id}&fmt=json`, {
    headers: {
      Origin: null
    }
  })
    .then(res => res.json());
};

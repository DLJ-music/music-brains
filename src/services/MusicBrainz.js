export const getArtists = (artist, offset = 0, limit = 25) => {
  return fetch (`https://musicbrainz.org/ws/2/artist?query=${artist}&fmt=json&limit=${limit}&offset=${offset}`, { 
    headers: {
      Origin: null
    }
  })
    .then(res => res.json());
};
  

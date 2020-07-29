export const getArtists = (artist, offset = 0) => {
  return fetch (`https://musicbrainz.org/ws/2/artist?query=${artist}&fmt=json&limit=25&offset=${offset}`, { 
    headers: {
      Origin: null
    }
  })
    .then(res => res.json());
};
  

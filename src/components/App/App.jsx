import React from 'react';
import ArtistList from '../artists/ArtistList'

export default function App() {
  const artists = [{ id: 'stjkstkjlljst', name: 'Jackson Michael', type: 'Group', score: 87 }]
  return <ArtistList artists={artists}/>;
}
  
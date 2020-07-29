import React from 'react'
import Artist from './Artist.jsx'
import PropTypes from 'prop-types'

const ArtistList = ({ artists }) => {
  const artistElements = artists.map(artist => (
    <li key={artist.id}>
      <Artist {...artist}/>
    </li>
  ))
  return (
    <ul>
      {artistElements}
    </ul>
  )
}

ArtistList.propTypes = {
  artists: PropTypes.array.isRequired
}

export default ArtistList


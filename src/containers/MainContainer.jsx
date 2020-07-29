import React, { useState, useEffect } from 'react'
import Search from '../components/search/Search'
import ArtistList from '../components/artists/ArtistList'

const MainContainer = () => {
  // useSearchHook
  const [searchQuery, setSearchQuery] = useState('')
  useEffect(() => {
    // mount artist list, no search query
  }, [])

  // useArtistList
  const [artists, setArtists] = useState([])
  useEffect(() => {
    // fetch initial data, no search params
    // setArtists to the received data
  }, [])
  return (
    <div>
      <Search handleChange={handleChange} handleSearch={handleSearch} />
      <ArtistList artists={artists}/>
    </div>
  )
}

export default MainContainer
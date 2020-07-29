import React, { useState, useEffect } from 'react'
import Search from '../components/search/Search'
import ArtistList from '../components/artists/ArtistList'
import { getArtists } from '../services/MusicBrainz.js'

const MainContainer = () => {
  // useSearchHook
  const [searchQuery, setSearchQuery] = useState('')
  const [searchInput, setSearchInput ] = useState('')
  useEffect(() => {
    // mount artist list, no search query
  }, [])
  //searchInput State
  const handleChange = ({target}) => {
    setSearchInput(target.value)    
  }
  const handleSearch = () => {
    setSearchQuery(searchInput)
  }
  // useArtistList
  const [artists, setArtists] = useState([])
  useEffect(() => {
    // fetch initial data, no search params
    // setArtists to the received data
    if(searchQuery === '' ) return
    getArtists(searchQuery)
    .then(({ artists }) => {
      setArtists(artists)
    })
  }, [searchQuery])
  return (
    <div>
      <Search handleChange={handleChange} handleSearch={handleSearch} />
      <ArtistList artists={artists}/>
    </div>
  )
}

export default MainContainer

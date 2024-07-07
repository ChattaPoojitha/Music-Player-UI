import React, { useState, useEffect } from 'react';
import { fetchSongs } from './api';
import Player from './components/Player';
import SongList from './components/SongList';
import Search from './components/Search';
import Tabs from './components/Tabs';
import './App.css';

const App = () => {
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [tab, setTab] = useState('For You');

  useEffect(() => {
    const getSongs = async () => {
      const data = await fetchSongs();
      setSongs(data);
      setFilteredSongs(data);
      setCurrentSong(data[0]);
    };

    getSongs();
  }, []);

  const handleSearch = (query) => {
    if (!query) {
      setFilteredSongs(songs);
      return;
    }

    const results = songs.filter(song =>
      song?.title?.toLowerCase().includes(query.toLowerCase()) ||
      song?.artist?.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredSongs(results);
  };

  const handleSongSelection = (song) => {
    setCurrentSong(song);
  };

  return (
    <div className="app">
      <Tabs setTab={setTab} />
      <Search onSearch={handleSearch} />
      <div className="content">
        <SongList songs={filteredSongs} setCurrentSong={handleSongSelection} currentSong={currentSong} />
        <Player currentSong={currentSong} />
      </div>
    </div>
  );
};

export default App;

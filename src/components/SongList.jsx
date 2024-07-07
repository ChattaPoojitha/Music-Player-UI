import React from 'react';
import './SongList.css';

const SongList = ({ songs, setCurrentSong, currentSong }) => {
    return (
        <div className="song-list">
            {songs.map((song, index) => (
                <div
                    key={index}
                    className={`song-item ${currentSong && currentSong.id === song.id ? 'selected' : ''}`}
                    onClick={() => setCurrentSong(song)}
                >
                    <img src={`https://cms.samespace.com/assets/${song.cover}`} alt={song.title} />
                    <div>
                        <h4>{song.title}</h4>
                        <p>{song.artist}</p>
                    </div>
                    <div className="duration">{song.duration}</div>
                </div>
            ))}
        </div>
    );
};

export default SongList;

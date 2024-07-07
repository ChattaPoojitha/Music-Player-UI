import React, { useState, useEffect, useRef } from 'react';
import './Player.css';

const Player = ({ currentSong }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying, currentSong]);

    if (!currentSong) return <div>Loading...</div>;

    return (
        <div className="player">
            <div className="player-cover">
                <img src={`https://cms.samespace.com/assets/${currentSong.cover}`} alt={currentSong.title} />
            </div>
            <div className="player-info">
                <h2>{currentSong.title}</h2>
                <h3>{currentSong.artist}</h3>
                <audio ref={audioRef} src={currentSong.url} />
                <div className="controls">
                    <button onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? 'Pause' : 'Play'}</button>
                </div>
            </div>
        </div>
    );
};

export default Player;

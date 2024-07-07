import React, { useState } from 'react';
import './Search.css';

const Search = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <div className="search">
            <input
                type="text"
                placeholder="Search Song, Artist"
                value={query}
                onChange={handleChange}
            />
        </div>
    );
};

export default Search;

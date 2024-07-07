import React from 'react';
import './Tabs.css';

const Tabs = ({ setTab }) => {
    return (
        <div className="tabs">
            <button onClick={() => setTab('For You')}>For You</button>
            <button onClick={() => setTab('Top Tracks')}>Top Tracks</button>
        </div>
    );
};

export default Tabs;

import {useState} from 'react';

function Searchbar({onsearch}) {
    const [query, setQuery, queryRef] = useState("");
    return (
        <div className="Searchbar">
            <input 
                type="text" 
                placeholder="Search accounts..." 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
            />
        </div>

    )
}

export default Searchbar;
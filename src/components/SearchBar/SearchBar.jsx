import React, { useState } from 'react';
import './searchbar.css';
export default function SearchBar({ searchKey, setSearchKey }) {
	// change the searchbar icon when input box is active.
	const [isInputActive, setIsInputActive] = useState(false);
	// update the searchkey state on change
	const handleKeyChange = (e) => {
		setSearchKey(e.target.value);
	};
	// clear the current search string.
	const handleClearsearchKey = () => {
		setSearchKey('');
	};

	return (
		<div className="search-div">
			<input type="text" className="search-input" placeholder="Search user by ID, Address, Name.." onChange={handleKeyChange} value={searchKey} onFocus={() => setIsInputActive(true)} onBlur={() => setIsInputActive(false)} />
			<img alt="img-search" className="search-icon" src={` ${isInputActive ? '/svgs/search-black.svg' : '/svgs/search.svg'}`}></img>
			{searchKey && <img alt="img-close" className="cross-icon" src={'/svgs/close-black.svg'} onClick={handleClearsearchKey} />}
		</div>
	);
}

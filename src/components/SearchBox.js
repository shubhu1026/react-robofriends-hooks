import React from "react";

const SearchBox = ( {searchField , searchChange} ) => {
    return (
        <div className="pa2">
            <input 
                className="pa3 ba b--washed-green bg-washed-blue"
                type='search' 
                placeholder="Search Robots" 
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;
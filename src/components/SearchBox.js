import React from "react";

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'> 
            <input
                className='pa3 ba b--green bg-lightest-blue hover-bg-light-green br2'
                type='search'
                placeholder='search robot' 
                onChange={searchChange}

                />
        </div>
    )
}

export default SearchBox;
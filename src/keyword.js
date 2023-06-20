import React, { useState } from 'react'

function Search() {
    const [open4, setopen4] = useState(false);

    return (
        <div>
            {open4 && <div className='sear'> <div class="warning">
                <span class="icon">&#9888;</span>
                <p>Result will be displayed through website api</p>
            </div></div>}
            <div class="search-container">
                <input type="text" class="search-input" placeholder="Search keyword" />
                <button onClick={() => setopen4(!open4)} class="search-button">Search</button>
            </div>


        </div>
    )
}

export default Search
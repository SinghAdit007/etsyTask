import React, { useState } from 'react'
import axios from 'axios'
function Search() {
    const [open4, setopen4] = useState(false);
    const [val,setval]=useState('');


    const handleclick=()=>{

        var headers = new Headers();
headers.append("x-api-key", "0aa6qx7gfy3cds87hvijwe40");
headers.append('Access-Control-Allow-Origin', 'true');
headers.append('Access-Control-Allow-Credentials', 'true');

var requestOptions = {
    method: 'GET',
    mode:'no-cors',
    redireacted:true,
    headers: headers,
};
            
fetch(`https://api.etsy.com/v3/application/listings/active?client_id=aoeoryx59j26t30056nqabv8&keywords=${val}`   ,requestOptions)
.then(response => console.log(response))
.then(result => console.log(result))
.catch(error => console.log('error', error));
    }
    return (
        <div>
            {open4 && <div className='sear'> <div class="warning">
                <span class="icon">&#9888;</span>
                <p>Result will be displayed through website api</p>
            </div></div>}
            <div class="search-container">
                <input type="text" class="search-input" onChange={(e)=>setval(e.target.value)} placeholder="Search keyword" />
                <button onClick={handleclick} class="search-button">Search</button>
            </div>


        </div>
    )
}

export default Search
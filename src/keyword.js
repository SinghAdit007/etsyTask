import React, { useState } from 'react'
import axios from 'axios'
import Card2 from './Card';
import Result from './data';
function Search() {
    const [open4, setopen4] = useState(false);
    const [val,setval]=useState('');


    const handleclick=async()=>{


        setopen4('true')
        
        
        Result.map((data,key)=>console.log(data,"a"))
//         var headers = new Headers();
// headers.append("x-api-key", "0aa6qx7gfy3cds87hvijwe40");
// headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
// headers.append('Access-Control-Allow-Credentials', 'true');
// headers.append('Access-Control-Allow-Methods' , 'GET')

// var requestOptions = {
//     method: 'GET',
//     credentials: "include",
//     headers: headers,
// };
            
// await fetch(`https://api.etsy.com/v3/application/listings/active?client_id=aoeoryx59j26t30056nqabv8&keywords=jewellery`   , {method: 'GET', mode:'cors', credentials: 'include',
// headers: {Accept: 'application/json'}})
// .then(response => console.log(response))
// .then(result => console.log(result))
// .catch(error => console.log('error', error));
    }
    return (
        <div>
            {open4 && <div className='sear'> <div class="   ">
                {/* <span class="icon">&#9888;</span>
                <p>Result will be displayed through website api</p> */}
            </div></div>}
            <div class="search-container">
                <input type="text" class="search-input" onChange={(e)=>setval(e.target.value)} placeholder="Search keyword" />
                <button onClick={handleclick} class="search-button">Search</button>
            </div>

            {open4 && 
        Result.sort((a,b)=>(b.views-a.views))
        &&

                Result.map((data,key)=>(
<div className='caaa'>
                    <Card2 title={data.title} price={data.price.amount} url={data.url} views={data.views}></Card2>
</div>
                ))
            }

        </div>
    )
}

export default Search
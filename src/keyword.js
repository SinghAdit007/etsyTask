import React, { useState } from 'react'
import axios from 'axios'
import Card2 from './Card';
import Result from './data';
function Search() {
    const [open4, setopen4] = useState(false);
    const [val, setval] = useState('');
    const [dd,setdd]=useState({});


    const handleclick = async () => {

        setopen4(!open4);
        let ii={

        }
        let items = JSON.parse(localStorage.getItem('etsydata'));

        if(items==null)
        {

            localStorage.setItem('etsydata', JSON.stringify(ii));
        }
        else
                {
         if(items.hasOwnProperty(`${val}`))
         {
            items[`${val}`]=1+items[`${val}`];
         }
         else
         {
            items[`${val}`]=1;
         }
            localStorage.setItem('etsydata', JSON.stringify(items));
            // let entries = Object.entries(items);
        setdd(items);
         }
        // console.log(entries);

    }
    return (
        <div>

            <div class="search-container">
                <input type="text" class="search-input" onChange={(e) => setval(e.target.value)} placeholder="Search keyword" />
                <button onClick={handleclick} class="search-button">Search</button>
            </div>
            <table>
            <tr>
    <th>keyword</th>
    <th>cnt</th>
    {/* <th>Country</th> */}
  </tr>
            {
            

              Object.entries(dd).map((t,k)=>(
                <tr>
                <td>{t}</td>
                <td>{dd[t]}</td>
              
              </tr>

                
              ))
            }
              </table>

          
          
          
          
          
          
          
          
          
          
          


        </div>
    )
}

export default Search
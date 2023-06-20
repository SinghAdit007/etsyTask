import logo from './logo.svg';
import './App.css';
import Search from './search';
import Search2 from './keyword';
import List from './list';
import List1 from './list3';
import List2 from './list2';

import { useState } from 'react';

function App() {


  const [open1,setopen1]=useState(false);
  const [open2,setopen2]=useState(false);
  const [open3,setopen3]=useState(false);


  return (
    <div className="App">
      <div className="button-container">
        <button onClick={()=>setopen1(!open1)} className="button">Top esty</button>
        <button onClick={()=>setopen2(!open2)} className="button">Top POD</button>
        <button onClick={()=>setopen3(!open3)} className="button">Top 10 products sale</button>
        

      </div>


      <div className="button-container">
      <Search></Search>
      <Search2></Search2>
      </div>


      {open2 && <div className="button-container">
     <List/>
      </div>}


      {open3 && <div className="button-container">
     <List1/>
      </div>}



      {open1 && <div className="button-container">
     <List2/>
      </div>}
      

    </div>
  );
}

export default App;

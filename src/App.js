import './App.css';
import Planetlist from './components/planetlist';
import Descriptionlist from './components/descriptionlist';
import { useEffect, useState } from 'react';

function App() {
  const [data,setData]=useState([]);
  const [pageAdd,setAdd]=useState('');
  const [backAdd,setBack]=useState('');
  const [discdata, setDiscdata] =useState([]);
  const [planetno,setPlanetno]=useState();
  
 const nextdata= () =>{
   if(pageAdd!=null)
   {
    fetch(pageAdd).then(y=>y.json()).then(y=>{setData(y.results);
      setAdd(y.next);
      setBack(y.previous);
      if(planetno>0){
      setPlanetno(planetno-y.results.length);}
      });
   }
 }
 const goBack= () =>{
   if(backAdd!=null)
   {
    fetch(backAdd).then(y=>y.json()).then(y=>{setData(y.results);
      setAdd(y.next);
      setBack(y.previous);
      if(planetno<(y.count-y.results.length)){
        setPlanetno(planetno+y.results.length);}
      });
   }
 }

  
useEffect(()=>{
  fetch('https://swapi.dev/api/planets/').then(x=>x.json()).then(x=>{setData(x.results);
  setAdd(x.next);
  setBack(x.previous);
  setPlanetno(x.count-x.results.length);

  });
},[]);
useEffect(()=>{
  fetch('http://localhost:3003/descriptions').then(x=>x.json()).then(x=>{setDiscdata(x);});
},[]);


  return (
    <div className="App">
      <button onClick={nextdata}>Next Page</button>
      <button onClick={goBack}>Back</button>
      <header className="App-header">
      <Descriptionlist data={discdata}/>      
        <Planetlist data={data} planetsLeft={planetno}/>        
      </header>
      <button onClick={nextdata}>Next Page</button>
      <button onClick={goBack}>Back</button>
    </div>
  );
}

export default App;
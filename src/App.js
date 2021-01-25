import './css/App.css';
import axios from 'axios'
import {useState, useEffect} from 'react'
import LoaderComponent from './components/LoaderComponent'
import SearchBox from './components/SearchBox'



const App = () => {
  const [loading, setLoading] = useState(false)

  const setterMethod = async () => {
   const data = await axios.get("https://api.coingecko.com/api/v3/coins/list")
    .then(res => {
      setLoading(true);
    }).catch(err => {
      console.log(err); 
    });
    console.log(data)
  }

  useEffect(()=>{
    setterMethod()
  },[])
  return (
    <>
      {
       loading ? <div style={{marginTop:-30}} id="searchBox"> <SearchBox /> </div> : <div style={{lineHeight:0.5}}> <LoaderComponent /> </div>
      }      
    </>
  );
}
 
export default App;

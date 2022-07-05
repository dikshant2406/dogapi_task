import './App.css';
import Order from './Order';
import Type from './Type';
import Category from './Category';
import { useState , useEffect} from 'react';
import Breed from './Breed';
import Display from './Display';
import { apiKey } from "./api_key";
import ImageComponent from './imageComponent';

function App() {
  const [order , setOrder] = useState('Random') ;
  const [type , setType] = useState('All') ;
  const [category , setCategory] = useState('None') ;
  const [breed , setBreed] = useState('')
  const [images , setImages] = useState([]) ;
  const [url , setUrl] = useState('https://api.thedogapi.com/v1/images/search?limit=9&format=json&mime_types=all&order=RANDOM&size=med') ;

  const getOrder = (res) => {
    setOrder(res) ;
    setUrl(`https://api.thedogapi.com/v1/images/search?limit=9&format=json&mime_types=${type}&order=${order}size=med`)
  }
  const getType = (res) => {
    setType(res) ;
    setUrl(`https://api.thedogapi.com/v1/images/search?limit=9&format=json&mime_types=${type}&order=${order}size=med`)
  }
  const getCategory = (res) => {
    setCategory(res) ;
    setUrl(`https://api.thedogapi.com/v1/images/search?limit=9&format=json&mime_types=${type}&order=${order}size=med`)
  }
  const getBreed = (res) => {
    res = res.slice(0,4) ;
    console.log(res) ;
    setUrl(`https://api.thedogapi.com/v1/images/search?limit=9&format=json&mime_types=${type}&order=${order}size=med`)
  }

  let imageUrl = [];
  let dogslist = [] ;
  useEffect ( () => {
    const headers = {
      "x-api-key" : apiKey
  }
  fetch( url + `&breed_id=${breed}`, {headers})
      .then(res => {
        let data = res.json() ;
        return data ;
      })
      .then((data) => {

          data.map((res) => (
            imageUrl.push(res.url)
          ))
          setImages(imageUrl) ;
          console.log(imageUrl) ;
      })
  }, [url]) ;
  
  return (
    <div className="App">
      <Order onOrder = {getOrder} />
      <Type onType = {getType} />
      <Category onCategory = {getCategory} />
      <Breed onBreed = {getBreed} />
      <div>
          {images.map((res) => <ImageComponent url = {res} />)}
      </div>
    </div>
  );
}

export default App;

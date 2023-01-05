import React,{useState,useEffect} from 'react'
import instance from '../baseUrl'
import './Banner.css'

function Banner({fetchUrl}) {


    //mpvies state
    const [movie,setMovies]=useState([])
    async function fetchData(){
        const result= await instance.get(fetchUrl)
        console.log(result.data.results)
        setMovies(result.data.results[
            Math.floor(Math.random()*result.data.results.length-1)
      ])
     }
    useEffect(()=>{
      fetchData()
    },[])

    console.log(movie);

    const base_url = "https://image.tmdb.org/t/p/original/";

  
    function trumcate(str,n){
      n=99;
      return str?.length>n ? str.substr(0,n-1)+"...":str; 

    }

  return (
    <div className='banner' style={
        {
            backgroundImage:`url(${base_url}${movie.backdrop_path})`,
            backgroundSize:"cover",
            
        }}>

          <div className='banner_content'>
             
             <h1 className='banner_title'>{movie.name}</h1>
            <h3 className='banner_desc'>{trumcate(movie.overview)}</h3>
          </div>

    </div>
  )
}

export default Banner
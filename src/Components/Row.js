import React,{useState,useEffect} from 'react'
import instance from '../baseUrl'
import './Row.css'


function Row({isLargeRow,title,fetchUrl}) {


    //mpvies state
    const [movies,setMovies]=useState([])
    async function fetchData(){
        const result= await instance.get(fetchUrl)
        console.log(result.data.results)
        setMovies(result.data.results)
    }
    useEffect(()=>{
      fetchData()
    },[])

    const  base_url = "https://image.tmdb.org/t/p/original/"
  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className='movies'>
        {
          movies.map(movies=>(
            <img className={`movie ${isLargeRow && "largemovie"} `}
            src={`${base_url}${isLargeRow? movies.poster_path: movies.backdrop_path}`}
            alt={movies.name}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Row
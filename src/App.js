
import Row from './Components/Row'
import './App.css';
import requests from './request';
import Banner from './Components/Banner';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
       
      </header>
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>
      <Row 
      isLargeRow={true}
      title="Netflix originals" 
      fetchUrl={requests.fetchNetflixOriginals}/>

      <Row
      //isLargeRow={true}
      title="Trending"
       fetchUrl={requests.fetchTrending}/>

      <Row 
      //isLargeRow={true} 
      title="TopRated" 
      fetchUrl={requests.fetchTopRated}/>

      <Row
      //isLargeRow={true}
       title="Action Movies" 
       fetchUrl={requests.fetchActionMovies}/>

      <Row 
      //isLargeRow={true}
      title="Comedy Movies" 
      fetchUrl={requests.fetchComedyMovies}/>

      <Row 
      //isLargeRow={true}
      title="Horror Movies"
       fetchUrl={requests.fetchHorrorMovies}/>

      <Row
      //isLargeRow={true}
       title="Romance Movies" 
       fetchUrl={requests.fetchRomanceMovies}/>

      <Row
      //isLargeRow={true}
       title="Documentaries" 
       fetchUrl={requests.fetchDocumentaries}/>

    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import {MovieDetail} from './Components/Home/MovieDetail/MovieDetail';
import {Home} from './Components/Home/Home';
import NavBar from '../src/Components/NavBar/NavBar'
import GenreCard from './Components/Home/GenreCard/GenreCard';

export function App() {
  return (
    <main>
      <div className='container-block'>
       {/* <MovieDetail/> */}
      {/* <Home/>  */}
      
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/movie/:id" element={<MovieDetail/>}/>
    </Routes> 
     <NavBar/>
     <GenreCard/>
     </div>
    </main>
  );
}

export default App;

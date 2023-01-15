import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../Container/Home/Home';
import Upcoming from "../Container/Upcoming-movies/Upcoming"
import TopRated from "../Container/Top-rated-movies/TopRated"
import Popular from "../Container/Popular/Popular"
import Details from '../Container/Details/Details';
import Header from '../Components/Header/Header';
import SearchContainer from '../Container/Search/search';

const RouteComponents = () => {
  return (
    <div>
        <BrowserRouter>
          <Header/>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/toprated" element={<TopRated />} />
              <Route path="/upcoming" element={<Upcoming />} />
              <Route path="/popular" element={<Popular />} />
              <Route path="/details/:movieid/:mediatype" element={<Details/>} />
              <Route path="/search" element={<SearchContainer />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default RouteComponents
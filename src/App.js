import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="web">
      <Navbar />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      ></Row>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Action Movies" fetchUrl={requests.fetchTopActionMovies}></Row>
      <Row title="Comedy Movies" fetchUrl={requests.fetchTopComedyMovies}></Row>
      <Row title="Horror Movies" fetchUrl={requests.fetchTopHorrorMovies}></Row>
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchTopRomanceMovies}
      ></Row>
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchTopDocumentaries}
      ></Row>
    </div>
  );
}

export default App;

import React from 'react';
import Card from "./components/Card.jsx";
import movies from "./movies"

const App = () => {
  return (
    <div>
      <h1 className='heading'> My movies</h1>
      
      <div className="cards">
      {
        movies.map((item, idx) => <Card item = {item} key = {idx} />)
      }
      </div>
    </div>
  )
}

export default App
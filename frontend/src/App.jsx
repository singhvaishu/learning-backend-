import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        console.log("API response:", response); // Log entire response
        console.log("API response data:", response.data); // Log response data
        if (Array.isArray(response.data)) {
          setJokes(response.data);
        } else {
          console.error("API response is not an array", response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Chai and Fullstack</h1>
      <p>JOKES: {jokes.length}</p>
      {
        Array.isArray(jokes) && jokes.map((joke) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  );
}

export default App;

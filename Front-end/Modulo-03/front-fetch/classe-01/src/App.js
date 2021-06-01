import './App.css';
import getSpotifyToken from "./utils/getSpotifyToken";
import { useState } from 'react';
import { Button } from '@material-ui/core';
import Card from './components/Card'

const baseURL = (pesquisa) =>
  `https://api.spotify.com/v1/search?q=${pesquisa}&type=track&limit=10`;

function App() {
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [tracks, setTracks] = useState([]);
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    
    setError('')
    setTracks([])
    if (!inputValue) return ;
    
    setLoading(true);

    try {
      const token = await getSpotifyToken();

      const response = await fetch(baseURL(inputValue), {
        headers: {
          'Authorization': token
        }
      });

      const {tracks:{items: songs}} = await response.json(); 
      setTracks(songs);
      
    } catch (error) {
      setError(error.message)
    }
    setLoading(false);
  }

  return (
    <div className="App">
        {loading && <span>Carregando...</span>}
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e)=> setInputValue(e.target.value)} />
        <Button 
          type='submit' 
          size='small' 
          color='primary' 
          variant='contained'
        >
          Enviar
        </Button>
      </form>
      {error && <span className='error'>{error}</span>}
      {tracks.length === 0 && <span>Não encontramos nada</span> }
      {tracks.map(track => (
        <Card track={track}/>
      ))}
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import Gallery from './Gallery';

function App() {
  let [data, setData] = useState({})
  let [artId, setArtId] = useState(12720)

  useEffect(() => {
    document.title = 'Welcome to ArtWorld'
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
    .then(response => response.json())
    .then(resData => setData(resData))
  }, [artId])

  const handleIterate = (e) => {
    setArtId(artId + Number(e.target.value))
  }

  const displayImage = () => {
    if(!data.primaryImage) {
      return (
        <h2>No Image</h2>
      )
    }
    return (
      <Gallery objectImg={data.primaryImage} title={data.title} />
    )
  }

  return (
    <div className="App">
      <h1>{data.title}</h1>
      <div style={{'width': '100%'}}>
        {displayImage()}
      </div>
    </div>
  );
}

export default App;

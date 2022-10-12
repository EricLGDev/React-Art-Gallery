import { useState, useEffect } from 'react';

function App() {
  let [data, setData] = useState({})
  let [artId, setArtId] = useState(12720)

  useEffect(() => {
    document.title = 'Welcome to ArtWorld'
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
    .then(response => response.json())
    .then(resData => setData(resData))
  }, [artId])
}

export default App;

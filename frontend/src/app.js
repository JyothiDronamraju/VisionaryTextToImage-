import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [text, setText] = useState('');
  const [imagePath, setImagePath] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:5000/generate', { text });
    setImagePath(response.data.image_path);
  };

  return (
    <div>
      <h1>Visionary Text-to-Image Generator</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          placeholder="Enter description" 
        />
        <button type="submit">Generate Image</button>
      </form>
      {imagePath && <img src={`http://localhost:5000/${imagePath}`} alt="Generated" />}
    </div>
  );
}

export default App;

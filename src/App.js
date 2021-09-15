import { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas';

function App() {
  const [upperLine, setUpperLine] = useState('');
  const [lowerLine, setLowerLine] = useState('');
  const [memeImage, setMemeImage] = useState('');

  const onChangeUpperLine = function (event) {
    setUpperLine(event.target.value);
  };

  const onChangeLowerLine = function (event) {
    setLowerLine(event.target.value);
  };

  const onChangeMemeImage = function (event) {
    setMemeImage(event.target.value);
  };

  const onClickExport = function (event) {
    html2canvas(document.querySelector('#meme')).then((canvas) => {
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  };

  return (
    <div className='App'>
      <select onChange={onChangeMemeImage}>
        <option value='fire'>House on fire</option>
        <option value='futurama'>Futurama</option>
        <option value='history'>History Channel</option>
        <option value='philosoraptor'>Philosoraptor</option>
        <option value='smart'>Smart Guy</option>
        <option value='matrix'>Matrix</option>
      </select>
      <br />
      <input onChange={onChangeUpperLine} type='text' placeholder='upper line' />
      <br />
      <input onChange={onChangeLowerLine} type='text' placeholder='lower line' />
      <br />
      <button onClick={onClickExport}>Export</button>
      <br />
      <div className='meme' id='meme'>
        <span>{upperLine}</span>
        <span>{lowerLine}</span>
        <img src={'/memes/' + memeImage + '.jpg'}></img>
      </div>
    </div>
  );
}

export default App;

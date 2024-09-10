
import { useState } from 'react';
import Header from './Header';
import Main from './MainFile';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [renderPage,setRenderPage]=useState('1')
  return (
    <div className="App">
      <Header renderPage={setRenderPage} />
      <Main renderPage={renderPage} />
    </div>
  );
}

export default App;

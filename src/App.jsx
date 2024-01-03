import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './Header.jsx';
import Base from './components/Base/Base.jsx';
const App = () => {
  return (
    <div className='container'>
      <Header/>
      <Base/>
    </div>
  );
};

const root = createRoot(document.getElementById('app'));
root.render(<App />);

export default App;

import { useState } from 'react';
import Header from './Header';
import Main from './Main';

function App() {
  const [menuExpanded, setMenuExpanded] = useState(false);

  return (
    <>
      <Header menuExpanded={menuExpanded} onMenuToggle={() => setMenuExpanded(!menuExpanded)} />
      <Main />
    </>
  );
}

export default App; 
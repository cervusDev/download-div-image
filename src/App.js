// just change the components commented to suit your needs

import React from 'react'
import { DownloadDivs } from './components/downloadDivs'
// import { DownloadCanvas } from './components/downloadCanvas'

export function App() {
  const ref = React.useRef(null);

  const handleClick = () => {
    if (ref.current) {
      ref.current.downloadScreenshot();
    }
  };

  return (
    <div className="App">
      <button onClick={handleClick}>download</button>
      <DownloadDivs ref={ref} />
    </div>
  );
}


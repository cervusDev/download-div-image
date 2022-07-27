// just change the components commented to suit your needs

import React from 'react'
// import { DownloadDivs } from './components/useReactScreenshot'
// import { DownloadCanvas } from './components/html2Canvas'
import { Sheets } from './components/sheetsJs'

export function App() {
  const ref = React.useRef(null);

  const handleClick = () => {
    if (ref.current) {
      ref.current.downloadCsv();
    }
  };

  return (
    <div className="App">
      <button onClick={handleClick}>download</button>
      <Sheets ref={ref}/>
    </div>
  );
}


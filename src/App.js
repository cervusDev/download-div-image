// just change the components commented to suit your needs

import React from 'react'
import { DownloadNestObject } from './components/nestedObjectToCsv'
// import { DownloadSheets } from './components/sheetsJs'
// import { DownloadCanvas } from './components/html2Canvas'
// import { DownloadSreenShots } from './components/useReactScreenshot'

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
      <DownloadNestObject ref={ref}/>
    </div>
  );
}


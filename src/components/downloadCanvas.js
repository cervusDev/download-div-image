import React from 'react'
import jsPDF from 'jspdf'
import htmlCanvas from 'html2canvas'

export const DownloadCanvas = React.forwardRef((props, ref) => {
  const imgRef = React.useRef(null)

  const download = () => {
    const input  = document.getElementById("dowload-map-pdf")
    htmlCanvas(input, { logging: true, useCORS: true }).then(canvas => {
      const imgHeight = canvas.height * 280 / canvas.width;
      const imageData = canvas.toDataURL("image/jpeg", 1.0);
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(imageData, 'PNG', 0, 0, 280, imgHeight);
      pdf.save('download.pdf');
    })
  }

  React.useImperativeHandle(ref, () => ({
    downloadScreenshot: () => download()
  }), []);

  return (
    <div id="dowload-map-pdf" ref={imgRef}>
        content test
    </div>
  );

})


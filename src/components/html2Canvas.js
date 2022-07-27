import React from 'react'
import jsPDF from 'jspdf'
import htmlCanvas from 'html2canvas'

export const DownloadCanvas = React.forwardRef(({ imageRef }, ref) => {
  const imgRef = React.useRef(null)

  const downloadPDF = React.useCallback(() => {
    const input  = document.getElementById(imageRef)
    htmlCanvas(input, { logging: true, useCORS: true }).then(canvas => {
      const imgHeight = canvas.height * 280 / canvas.width;
      const imageData = canvas.toDataURL("image/jpeg", 1.0);
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(imageData, 'PNG', 0, 0, 280, imgHeight);
      pdf.save('download.pdf');
    })
  }, [imageRef])

  const downloadJPG = React.useCallback(() => {
    const input  = document.getElementById(imageRef)
    htmlCanvas(input, { 
      logging: true, useCORS: true, scrollY: -window.scrollY }).then(canvas => {
      const link = document.createElement('a');

      if (typeof link.download === 'string') {
        link.href = canvas.toDataURL();
        link.download = 'mapa.jpg';
        link.click()
      }
    })
  }, [imageRef])

  
  React.useImperativeHandle(ref, () => ({
    downloadPdf: () => downloadPDF(),
    downloadJpg: () => downloadJPG(),
  }), [downloadPDF, downloadJPG]);

  return (
    <div id={imageRef} ref={imgRef}>
        content test
    </div>
  );

})


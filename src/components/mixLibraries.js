import React from 'react'
import jsPDF from 'jspdf'
import htmlCanvas from 'html2canvas'
import * as XLSX from 'xlsx/xlsx.mjs'
import { fakeObject } from './file/csv'

export const DownloadsMixLibraries = React.forwardRef(({ imageRef }, ref) => {
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
    htmlCanvas(input, { logging: true, useCORS: true }).then(canvas => {
      const link = document.createElement('a');

      if (typeof link.download === 'string') {
        link.href = canvas.toDataURL();
        link.download = 'mapa.jpg';
        link.click()
      }
    })
  }, [imageRef])

  const downloadCSV = React.useCallback(() => {
    const worksheet = XLSX.utils.json_to_sheet(fakeObject);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Dates");

    const max_width = fakeObject.reduce((w, r) => Math.max(w, r.name.length), 10);
    worksheet["!cols"] = [ { wch: max_width } ];

    XLSX.writeFile(workbook, "Presidents.xlsx");
  }, [])
  
  React.useImperativeHandle(ref, () => ({
    downloadPdf: () => downloadPDF(),
    downloadJpg: () => downloadJPG(),
    downloadCsv: () => downloadCSV(),
  }), [downloadPDF, downloadJPG, downloadCSV]);

  return (
    <div id={imageRef} ref={imgRef}>
        content test
    </div>
  );

})


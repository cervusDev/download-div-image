import React from 'react'
import * as XLSX from 'xlsx/xlsx.mjs';
import { fakeNestedObject } from './file/mockObjects'

export const DownloadNestObject = React.forwardRef((props, ref) => {
  const downloadCSV = React.useCallback(() => {
    const rows = fakeNestedObject.features.map(f => {
      const { properties } = f

      return {
        Ano: properties.DATA_CRIAC.split('/')[0],
        Distrito: properties.NOME_DIST,
        Dado: properties.DADO,
      }
    })

    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Dates");
    
    // const max_width = rows.reduce((w, r) => Math.max(w, r.Distrito.length), 10);
    // worksheet["!cols"] = [{ wch: max_width }];

    XLSX.writeFile(workbook, "mapa.xlsx");
  }, [])

  React.useImperativeHandle(ref, () => ({
    downloadCsv: () => downloadCSV(),
  }), [downloadCSV]);

  return <div>download csv file</div>
});

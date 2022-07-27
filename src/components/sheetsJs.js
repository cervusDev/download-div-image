import React from 'react'
import { fakeObject } from './file/csv'
import * as XLSX from 'xlsx/xlsx.mjs';

export const Sheets = React.forwardRef((props, ref) => {
  React.useRef(null);

  const downloadCSV = React.useCallback(() => {
    const worksheet = XLSX.utils.json_to_sheet(fakeObject);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Dates");

    const max_width = fakeObject.reduce((w, r) => Math.max(w, r.name.length), 10);
    worksheet["!cols"] = [ { wch: max_width } ];

    XLSX.writeFile(workbook, "Presidents.xlsx");
  }, [])

  React.useImperativeHandle(ref, () => ({
    downloadCsv: () => downloadCSV(),
  }), [downloadCSV]);

  return <div>download csv file</div>
});
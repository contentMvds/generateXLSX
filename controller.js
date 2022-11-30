const Excel = require("exceljs");
const { docToCSV, createHeadersByColumns } = require("./common");
const { model } = require("./model");

function createXLSX(res) {
  const workbook = new Excel.stream.xlsx.WorkbookWriter({ stream: res });
  const worksheet = workbook.addWorksheet("some-worksheet");

  worksheet.columns = createHeadersByColumns();

  model
    .find()
    .sort({ regional_origem: 1 })
    .limit(120000)
    .cursor()
    .on("data", (data) => {
      worksheet.addRow(docToCSV(data)).commit();
    })
    .on("close", () => {
      worksheet.commit();
      workbook.commit();
    })
    .on("error", (err) => {
      worksheet.commit();
      workbook.commit();
      res.send(500, { err, msg: "Failed to get otPaiCor from db" });
    });
}

module.exports = createXLSX;

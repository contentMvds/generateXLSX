module.exports = (app) => {
  app.get("/", async (req, res) => {
    res.send("Hello World!</br><a href='/xlsx'>donwloadXLSX</a>");
  });

  app.get("/xlsx", function (req, res) {
    const createXLSX = require("./controller");
    
    res.writeHead(200, {
      "Content-Disposition": 'attachment; filename="file.xlsx"',
      "Transfer-Encoding": "chunked",
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    createXLSX(res);
  });
  return app;
};

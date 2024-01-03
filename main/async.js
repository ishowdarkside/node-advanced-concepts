const https = require("http");

const start = Date.now();

function doRequest() {
  https
    .request("http://www.google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log(Date.now() - start);
      });
    })
    .end();
}

doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();

console.log("POZVANO");

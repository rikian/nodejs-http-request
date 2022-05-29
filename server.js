const https = require("https");
const options = {
  hostname: "lawnsoor.com", // <--address
  port: 443, // 443 jika https, 80 jika http
  path: "/node-js/simple-website-bersama-node-js", // path atau lokasi resouce yang dituju
  method: "GET", // method, "POST, GET" (GET meminta data, POST mengirim data)
};
const req = https.request(options, (res) => {
  res.on("data", (data) => {
    console.log(data.toString());
  });
  res.on("end", () => {
    console.log("No more data in response.");
  });
});
req.on("error", (err) => {
  console.error(err);
});
req.end();

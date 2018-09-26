var request = require("request");
var cheerio = require("cheerio");
const fs = require("fs");
const writestream = fs.createWriteStream("post.csv");
writestream.write(`Title, Link\n`);
request(
  "https://www.yourhtmlsource.com/myfirstsite/",
  (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);
      $("#content p").each((i, el) => {
        const s = $(el)
          .find("a")
          .text()
          .replace(/\s\s+/g, "\n");
        const links = $(el)
          .find("a")
          .attr("href");

        console.log(s, " ", links);
        writestream.write(`${s},${links}\n`);
      });
    } else {
      console.log("Not connected");
    }
  }
);

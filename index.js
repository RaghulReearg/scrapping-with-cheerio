var request = require("request");
var cheerio = require("cheerio");
request(
  "https://www.yourhtmlsource.com/myfirstsite/",
  (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);
      const siteheading = $("#htmlsource");
      //   console.log($(siteheading));
      //   const s = siteheading
      //     .children(".grid-block")
      //     .parent()
      //     .text();
      //   console.log(s);
      //   $("#otherstuff a").each((i, el) => {
      //     const iem = $(el).text();
      //     const link = $(el).attr("href");
      //     console.log(link);
      //   });
    } else {
      console.log("Not connected");
    }
  }
);

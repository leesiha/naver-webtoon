const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const getHtml = async () => {
  try {
    return await axios.get("https://comic.naver.com/webtoon/finish");
  } catch (error) {
    console.error(error);
  }
};

getHtml()
  .then((html) => {
    let ulList = [];
    const $ = cheerio.load(html.data);
    const $bodyList = $("div.list_area ul").children("li");

    $bodyList.each(function (i, elem) {
      ulList[i] = {
        id: $(this).find("div.thumb a img").attr("src"),
        title: $(this).find("a").attr("title"),
        author: $(this).find("dl dd.desc a").text(),
        // intro: $(this).find('p').text(),
        thumb_s: $(this).find("div.thumb a img").attr("src"),
      };
    });

    //const data = ulList.filter(n => n.title);
    let jsondata = JSON.stringify(ulList);
    fs.writeFileSync("webtoon_finish.json", jsondata);
    return console.log(ulList);
  })
  .then((res) => console.log(res));

const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const getHtml = async () => { 
    try { 
        return await axios.get("https://comic.naver.com/webtoon/weekday");
    }catch (error) {
        console.error(error);
    }
};

getHtml() .then(html => { 
    let ulList = []; 
    const $ = cheerio.load(html.data); 
    const $bodyList = $("div.webtoon_spot2 ul").children("li"); 
    
    $bodyList.each(function(i, elem) { 
        ulList[i] = { 
            id: $(this).find('a').attr('onclick'), 
            title: $(this).find('a strong').attr('title'), 
            author: $(this).find('p.author2 a').attr('title'), 
            intro: $(this).find('p').text(), 
            img: $(this).find('div.thumb7 a img').attr('src'),
            url: $(this).find('div.thumb7 a').attr('href')
        }; 
    }); 
    
    //const data = ulList.filter(n => n.title);
    let jsondata = JSON.stringify(ulList);
    fs.writeFileSync('webtoon_spot2.json', jsondata)
    return console.log(ulList);
}) 
.then(res => console.log(res));
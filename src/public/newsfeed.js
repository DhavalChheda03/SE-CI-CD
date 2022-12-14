const API_KEY = `4133a954c08249019e6f221dc4e9b1b8`;
const api_url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`;
// "https://newsapi.org/v2/top-headlines?country=in&apiKey=4133a954c08249019e6f221dc4e9b1b8"
  
async function getNews(url) {
    
    const response = await fetch(url);
    console.log(response);
    var newsHtml;
    var data = await response.json();
    let articles=data.articles;
    articles.forEach((element)=>{
        let news=`<div class="swiper-slide">
        <div class="newsbox">
        <img src="${element["urlToImage"]}">
        <h3>${element["title"]}</h3>
        <p>${element["description"]}</p>
        <a href="${element["url"]}" target="_blank"><button class="btn">Read more</button></a>
    </div>
    </div>`;
    newsHtml+=news;
    });
    let newsfeed=document.getElementById('newsfeed');
    newsfeed.innerHTML=newsHtml; 
    console.log(data);
}
getNews(api_url);


const data = null;
const xhr = new XMLHttpRequest();
xhr.withCredentials = true;
let lang = 'ru'
xhr.open("GET", `https://bing-news-search1.p.rapidapi.com/news?cc=${lang}&safeSearch=Off&textFormat=Raw`);
xhr.setRequestHeader(`accept-language`, `${lang}`);
xhr.setRequestHeader("x-bingapis-sdk", "true");
xhr.setRequestHeader("x-rapidapi-key", "d93da7b6ccmsh0c32a0d2dee493ep1a6521jsn64bd487ac230");
xhr.setRequestHeader("x-rapidapi-host", "bing-news-search1.p.rapidapi.com");
xhr.send(data);

 class Api{
    constructor(xhr){
        this.xhr = xhr
    }
    eventAdd(){
        this.xhr.addEventListener("load",  ()=> {
            let response = JSON.parse(this.xhr.responseText)
            let getsAPi = new GetsApi(response)
            getsAPi.take()
 
        });
    }
   
   
}
let content = document.querySelector('.content__news')

class GetsApi{
    constructor(response){
        this.response = response
    }
    take(){
        let arrObj = this.response.value
        console.log(arrObj[0])
        arrObj.forEach(item=>{
            let div = document.createElement('div')
            div.classList.add('mui-panel')
            div.style.margin = '10px 20px'
            div.innerHTML = `
            <h1>${item.name}</h1>
            <div class="data__public">${item.datePublished}</div>
            <description>${item.description}... <a href="${item.url}">Продолжение по ссылке</a></description>
            `
            content.appendChild(div)
        })
    }
}

let api = new Api(xhr)
api.eventAdd()
module.exports={api}
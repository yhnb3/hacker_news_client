const container = document.getElementById('root')
const ajax = new XMLHttpRequest();
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json'
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json'

function getData(url) {
  ajax.open('GET', url , false);
  ajax.send();

  return JSON.parse(ajax.response)
}

function newsDetail () {
  const id = location.hash.substr(1)
   
  const newsContent = getData(CONTENT_URL.replace('@id', id))

  container.innerHTML = `
    <h1>${newsContent.title}</h1>
    <div>
      <a href="#">목록으로</a>
    </div>
  `
}


function newsFeed() {
  const newsFeed = getData(NEWS_URL)
  container.innerHTML = `
    <ul>
    ${newsFeed.map((feed) => (`
      <li>
        <a href="#${feed.id}">
          ${feed.title} (${feed.comments_count})
        </a>
      </li>
    ` 
    )).join('')}
    </ul>
  `
}

function router() {
  const routerPath = location.hash

  if (routerPath === '' ) {  // #일때는 빈값을 반환
    newsFeed()
  } else {
    newsDetail()
  }
}

window.addEventListener('hashchange', router)

router();
# hacker_news_client
 해커 뉴스 클론앱을 만들면서 js및 ts의 이해하기

김민태의 프론트엔드 아카데미를 수강하면서 실습한 것들입니다.



## 새롭게 배운점 및 활용할 수 있을만한 포인트

### 2021-06-08

```javascript
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json'  // 기본 url

ajax.open('GET', CONTENT_URL.replace('@id', id), false) // ajax로 데이터를 전송받을때 활용하는 url을 replace로 재설정한다.
```

우리가 중복적으로 사용하게될 url에서 우리가 바꿔서 사용해야하는 id부분을 보통 제외하고 사용했다. 하지만 @id로 저장을 한후에 그 값을 replace로 대체하는 방법을 이용하면 아무래도 기존 content_url에 대해 누가 보더라도 id라는 변수를 통해서 받아 온다는 것을 알 수 있으니 좀 더 가독성있다는 생각이 들었습니다. 




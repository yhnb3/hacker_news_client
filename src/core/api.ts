import { NewsFeed, NewsDetail } from '../types'

export class Api {
    url: string;
    ajax: XMLHttpRequest;
  
    constructor(url: string) {
      this.url = url
      this.ajax = new XMLHttpRequest();
    }
    getReqeust<AjaxResponse>() : AjaxResponse {
      this.ajax.open('GET', this.url , false);
      this.ajax.send();
  
      return JSON.parse(this.ajax.response)
    }
  }
  
  function applyApiMixins(targetClass: any, baseClasses: any[]) {
    baseClasses.forEach(baseClass => {
      Object.getOwnPropertyNames(baseClass.prototype).forEach(name => {
        const descriptor = Object.getOwnPropertyDescriptor(baseClass.prototype, name)
  
        if (descriptor) {
          Object.defineProperty(targetClass.prototype, name, descriptor)
        }
      })
    })
  
  }
  
  export class NewsFeedApi extends Api  {
    getData() : NewsFeed[] {
      return this.getReqeust<NewsFeed[]>();
    }
  }
  
  
  export class NewsDetailApi extends Api {
    getData() : NewsDetail {
      return this.getReqeust<NewsDetail>();
    }
  }
  
  
  applyApiMixins(NewsFeedApi, [Api])
  applyApiMixins(NewsDetailApi, [Api])
  
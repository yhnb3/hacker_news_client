import { RouteInfo } from '../types'
import View from './view'

export default class Router {
  private isStart: boolean;
  private routeTable: RouteInfo[];
  private defaultRoute: RouteInfo | null;

  constructor() {
    window.addEventListener('hashchange', () => this.route())
    
    this.routeTable = [];
    this.defaultRoute = null;
    this.isStart = false
  }

  addRouterPath(path: string, page: View, params: RegExp | null = null): void {
    this.routeTable.push({ path, page, params })
    if (!this.isStart) {
      this.isStart = true
      setTimeout(this.route.bind(this), 0)
    }
  }
  setDefaultPage(page: View, params: RegExp | null = null): void {
    this.defaultRoute = { path: '', page, params }
  }
  private route() {
    const routePath: string = location.hash

    if(routePath === '' && this.defaultRoute) {
      this.defaultRoute.page.render()
      return 
    }

    for (const routeInfo of this.routeTable) {
      if (routePath.indexOf(routeInfo.path) >= 0) {
        if (routeInfo.params) {
          const parseParams = routePath.match(routeInfo.params)
          if(parseParams) {
            routeInfo.page.render.apply(null, [parseParams[1]])
          }
        } else {
          routeInfo.page.render()
          
        }
        return 
      }
    }
  }
} 
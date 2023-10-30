export class Router {
  routes = {}

  add(routeName, page){
    this.routes[routeName] = page
  }

  route(event){
    event = event || window.event
    event.preventDefault()
  
    window.history.pushState({}, "", event.target.href)
  
    this.handle()
  }
  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404] 
    fetch(route)
    .then(data => data.text())
    .then(html => {
      document.querySelector('#app').innerHTML = html
      
      if(pathname == '/'){
        document.getElementsById('body').className = 'home'
      }else if (pathname == '/universo'){
        document.getElementById('body').className = 'universo'
      } else{
        document.getElementById('body').className ='exploracao'
      }
    })
  }
}


export default new Router ()
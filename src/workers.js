export default function workers(){
  this.addEventListener('fetch', event => {
      fetch(event.request.url).then(res=>{
        console.log(res)
      })
  })

}
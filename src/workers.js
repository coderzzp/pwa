export default function workers(){
  this.addEventListener('fetch', event => {
    alert(1)
      fetch(event.request.url).then(res=>{
        console.log(res)
      })
  })

}
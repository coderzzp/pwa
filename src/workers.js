export default function workers(){
  console.log(self)
  window.addEventListener('fetch', event => {
    alert(1)
      fetch(event.request.url).then(res=>{
        console.log(res)
      })
  })
}
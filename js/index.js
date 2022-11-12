let title = document.querySelector('.title')
let ul = document.querySelector('ul')
let reload = document.querySelector('.reload')

window.onload =function(){
  if(window.navigator.onLine){
    testOnline()
  }else{
    testOffline()
  }
}
window.addEventListener('online',function(){
  testOnline()
})
window.addEventListener('offline',function(){
  testOffline()
})

function testOnline(){
title.innerHTML='OnLine Now ... '
title.style.color='green'
ul.classList.add('hide')
reload.classList.add('hide')
}
function testOffline(){
  title.innerHTML='OffLine Now ... '
  title.style.color='rgb(175, 47, 47)'
  ul.classList.remove('hide')
  reload.classList.remove('hide')
}
reload.onclick = function(){
  window.location.reload()
}
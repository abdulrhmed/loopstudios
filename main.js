document.getElementById('humbur').addEventListener('click',function(){
    let saidbar =document.getElementById('saidbar')
    saidbar.style.transform= ' translateY(0)'
    var body=document.querySelector('body')
    body.style.overflowY='hidden'
    
})


document.getElementById('close').addEventListener('click',function(){
    let saidbar =document.getElementById('saidbar')
    saidbar.style.transform= ' translateY(-100%)'
    var body=document.querySelector('body')
    body.style.overflowY='unset'
    
})
let v=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
let index
let d=document.getElementById('btn')

let x=()=>{
    let s=''
    
    for(let  i=0;i<6;i++){
         index=Math.floor(Math.random()*v.length)
        s+=v[index]


    }
    document.getElementById('hex').textContent=s
    document.body.style.background='#'+s
}
d.addEventListener('click',x) 
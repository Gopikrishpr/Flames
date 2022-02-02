const head = document.querySelector('.head');
const btn = document.querySelector('#btn');
let count =0;
let str = ['FRIENDS','LOVE','AFFECTIONATE','MARRIAGE','ENEMY','SIBILINGS',
          'F','L','A','M','E','S'];
function cancel(f,n){
    let h = n,c=h;
    while(f.length !=1){
        c = h;
        if(c > f.length) c = h%f.length;
        if(c==0) c=f.length;
        f.splice(c-1,1);
        h=n;
        if(h>=(f.length-(c-1))) h-=(f.length-(c-1));
    }
    return f[0];
}
flames = () =>{
    let name = document.getElementById('name').value.toLowerCase().replaceAll(" ","");
    let crushName = document.getElementById('crushName').value.toLowerCase().replaceAll(" ","");
    if(name == '' || crushName=='') {
        alert("Please fill the input field");
        return false;
    }
    const div = document.createElement('div');
    div.className='output';
    const input = document.querySelector('.inputs');
    if(count > 0) head.removeChild(input.nextElementSibling);
    for(let i =0;i<6;i++){
        const p = document.createElement('p');
        p.appendChild(document.createTextNode(str[i]));
        p.className="para"+i;
        div.appendChild(p);
    }
    div.className ='output animate__fadeInRight';
    head.appendChild(div);
    let n = name.length+crushName.length,f = ['F','L','A','M','E','S'];
    let ch1 = [],ch2=[];
    for(let i=0;i<name.length;ch1[i]=name[i],i++);
    for(let i=0;i<crushName.length;ch2[i]=crushName[i],i++);
    for(let i=0,j=0;i<name.length;i++){
        for(j=0;j<crushName.length && ch1[i] != ch2[j];j++);
        if(j<crushName.length){
            ch1[i]=ch2[j]='?';
            n-=2;
        }
    }
    let index = str.indexOf(cancel(f,n))-6;
    let para = document.querySelectorAll('p');
    for(let i=0;i<6;i++){
        if(i == index){
           para[i].style.background='lightGreen';
           para[i].style.transform= 'scale(1.5,1.5)';
        }
    }
    count++;
}
btn.addEventListener('click',flames);

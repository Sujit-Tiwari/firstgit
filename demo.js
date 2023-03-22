var newDiv=document.createElement('div');
newDiv.className='hey'
newDiv.id='hey1';
newDiv.setAttribute('title',"Be Happy Always");
var c1=document.createTextNode('Hello')
newDiv.appendChild(c1);
var conatiner=document.querySelector('header .container');
var h1 =document.querySelector('header h1');
var befitem=document.querySelector('main befitem')
newDiv.style.fontSize='30px';
newDiv.style.font='bold'
console.log(newDiv);
conatiner.insertBefore(newDiv, h1);
var parentnode=document.getElementById('items');

parentnode.innerHTML='<li>item 1</li><li>item 2</li><li>item 3</li><li>item 4</li>'
parentnode.innerHTML='<li>hello</li>'+parentnode.innerHTML;

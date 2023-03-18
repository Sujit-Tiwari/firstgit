var seconditem=document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.color="green";
var invisible=document.querySelector('.list-group-item:nth-child(3)');
// invisible.style.display='none';

var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++)
{
   odd[i].style.backgroundColor='green';
}

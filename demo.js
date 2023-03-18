console.log("hello sir Biilionar sujit")
console.log(document.domain);
console.log(document.URL);
var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
// items[1].textContent = 'hello';
// items[1].style.fontWeight="bold";
// items[1].style.backgroundColor="yellow";
// items[1].style.fontColor="green";
var input=document.querySelector('input');
input.value='Hello Sujji';
var sub=document.querySelector('input[type="Submit"]');
sub.value='OK'
// var firstitem=document.querySelector('.list-group-item');
// firstitem.style.color='red';
// var lastitem=document.querySelector('.list-group-item:last-child')
// lastitem.style.fontWeight='bold'
// lastitem.style.color='pink'
// lastitem.style.backgroundColor='blue';
var odd=document.querySelectorAll('li:nth-child(odd)');
var even=document.querySelectorAll('li:nth-child(even)');
for(var i=0;i< odd.length;i++)
{
    odd[i].style.fontWeight="bold";
   odd[i].style.color="green";
   odd[i].style.backgroundColor="lightgray";
   even[i].style.fontWeight="bold";
   even[i].style.color="darkblue";
   even[i].style.backgroundColor="#C5C5C5";
}

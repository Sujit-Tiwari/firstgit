var items=document.getElementsByClassName('list-group-item');
items[2].style.backgroundColor='green'
for(var i=0;i<items.length;i++)
{
    items[i].style.fontWeight="bold";
    items[i].style.color="red";
}
var lastitem=document.getElementsByTagName('li');
lastitem[4].style.backgroundColor="gray"

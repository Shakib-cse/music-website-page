let morebtn = document.querySelector('more-head');
let hideitem = document.querySelector('header-item');


morebtn.addEventListener('click', function(){

    if (hideitem.getElementsByClassName.maxHeight){
        hideitem.style.maxHeight = '100px';
    } 
    else{
        hideitem.style.maxHeight = '300px';
    }
});
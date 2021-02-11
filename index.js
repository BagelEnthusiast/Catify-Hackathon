// const body = document.querySelector('body')
// body.style.backgroundImage = chrome.extension.getURL('catbackground1.png')
//document.body.style.backgroundColor = 'red';


var input = document.getElementById('getval');
    input.onchange = function(evt){
        var tgt = evt.target || window.event.srcElement, 
            files = tgt.files;
        if (FileReader && files && files.length) {
            var fr = new FileReader();
            fr.onload = function () {
                localStorage['catbackground2.png'] = fr.result;
            }
            fr.readAsDataURL(files[0]);
        }
}

window.onload=function(){
  var el = document.querySelector('body');
  el.style.backgroundImage = 'url(' + localStorage['catbackground2.png'] + ')';
}
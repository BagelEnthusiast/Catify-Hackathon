//document.body.style.backgroundColor = 'red';
const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a')

for (let i=0; i < text.length; i++) {
  if (text[i].innerHTML.includes('m')) {
    text[i].innerHTML = text[i].innerHTML.replace('m', 'meow');
  }
}
document.addEventListener('keydown', (e) => {
  console.log(e.code)
})

document.body.style.backgroundImage = 'url("chrome-extension://@'+chrome.runtime.id+'/cat1.png")'

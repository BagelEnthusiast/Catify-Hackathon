function openSettings() {
  document.getElementById("settings").classList.toggle("settings-open");
}
document.getElementById("settings-button").addEventListener('click', openSettings)

let userName;

function saveName() {
  localStorage.setItem('receivedName', userName);
}

userName = localStorage.getItem('receivedName');

if (userName == null) {
  userName = 'friend';
}

function changeName() {
  userName = document.getElementById('name-input').value;
  saveName();
}

document.getElementById('name-form').addEventListener('submit', (e) => {
  e.preventDefault();
  changeName();
  getGreeting();
});

function getGreeting() {
  document.getElementById('greeting').innerHTML = `Meow, ${userName}. Have a great day!`;
}

getGreeting();


// window.addEventListener('DOMContentLoaded', (e) => {
//   console.log('event is happening')
//   document.body.style.backgroundColor = 'red';
// });



//changeColor();

// chrome.runtime.onInstalled.addListener(function() {
//   chrome.storage.sync.set({color: '#FFB6C1'}, function() {
//     console.log('The color is pink!');
//   });
//   chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
//     chrome.declarativeContent.onPageChanged.addRules([{
//       conditions: [new chrome.declarativeContent.PageStateMatcher({
//         pageUrl: {hostContains: '.'},
//       })],
//       actions: [new chrome.declarativeContent.ShowPageAction()]
//     }]);
//   });
// });

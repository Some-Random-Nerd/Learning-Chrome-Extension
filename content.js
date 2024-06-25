const keyboardChanges = {
  "KeyQ": "KeyQ",
  "KeyW": "KeyW",
  "KeyE": "KeyF",
  "KeyR": "KeyP",
  "KeyT": "KeyB",
  "KeyY": "KeyJ",
  "KeyU": "KeyL",
  "KeyI": "KeyU",
  "KeyO": "KeyY",
  "KeyP": "Semicolon",
  "KeyA": "KeyA",
  "KeyS": "KeyR",
  "KeyD": "KeyS",
  "KeyF": "KeyT",
  "KeyG": "KeyG",
  "KeyH": "KeyM",
  "KeyJ": "KeyN",
  "KeyK": "KeyE",
  "KeyL": "KeyI",
  "Semicolon": "KeyO",
  "KeyZ": "KeyX",
  "KeyX": "KeyC",
  "KeyC": "KeyD",
  "KeyV": "KeyV",
  "KeyB": "KeyZ",
  "KeyN": "KeyK",
  "KeyM": "KeyH",
}
var isEnabled = true

chrome.runtime.onInstalled.addListener(() => { // This means whenever the extension is installed

});

chrome.action.onClicked.addListener(async (tab) => { // This runs whenever _excecute_action runs in manifest.json, or when a tab is clicked

});



// This event listener waits until the entire DOM content is loaded. No clue what that is 
document.addEventListener('DOMContentLoaded', function() {

  // This event listener listens for any click event on the webpage.
  document.addEventListener('click', function(event) {
    
    // This condition checks if the clicked element is a button.
    if (event.target.tagName === 'BUTTON' && keyboardChanges[event.code] != undefined) {
      event.preventDefault();
      simulateKeyPress(keyboardChanges[event.code])
      
      // Logs the pressed button element to the console.
      console.log('Button pressed:', event.target);
    }
  });
});



function simulateKeyPress(keyCode) {
  const event = new KeyboardEvent('keydown', {
    code: keyCode,
    key: keyCode,
    bubbles: true
  });
  document.dispatchEvent(event);
}
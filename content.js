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


// This event listener waits until the entire DOM content is loaded. No clue what that is 
document.addEventListener('DOMContentLoaded', function() {

  // This event listener listens for when a key is clicked
  document.addEventListener('keydown', function(event) {
    event.preventDefault();
    
    isEnabled = event.altKey && event.code === "KeyG" ? !isEnabled: isEnabled
    

    simulateKeyPress(keyboardChanges[event.code] ?? event.code)
      
    // Logs the pressed button element to the console.
    console.log('Button pressed:', event.target);
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
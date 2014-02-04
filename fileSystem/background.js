/**
 * Listens for the app launching then creates the window.
 * Ignores the provided window size.
 *
 * @see http://developer.chrome.com/trunk/apps/app.window.html
 */

var events = [];

chrome.app.runtime.onLaunched.addListener(function(launchData) {
  chrome.app.window.create('index.html', {
    width: 244,
    height: 380,
  });
});
//your JS code here. If required.
// Function to get a cookie by name
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

// Function to set a cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

// Function to apply user preferences
function applyPreferences() {
  const fontSize = getCookie('fontsize');
  const fontColor = getCookie('fontcolor');

  if (fontSize) {
    document.documentElement.style.setProperty('--fontsize', `${fontSize}px`);
    document.getElementById('fontsize').value = fontSize;
  }

  if (fontColor) {
    document.documentElement.style.setProperty('--fontcolor', fontColor);
    document.getElementById('fontcolor').value = fontColor;
  }
}

// Event listener for form submission
document.getElementById('preferencesForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form from submitting

  const fontSize = document.getElementById('fontsize').value;
  const fontColor = document.getElementById('fontcolor').value;

  // Save preferences in cookies
  setCookie('fontsize', fontSize, 365);
  setCookie('fontcolor', fontColor, 365);

  // Apply preferences
  applyPreferences();
});

// Apply preferences on page load
window.onload = function() {
  applyPreferences();
};

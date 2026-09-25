const password = document.getElementById("password");
const strengthFill = document.getElementById("strength-fill");
const strengthText = document.getElementById("strength-text");

password.addEventListener("input", function () {
  const value = password.value;

  let score = 0;

  if (value.length >= 8) {
    score += 25;
  }

  if (value.length >= 12) {
    score += 15;
  }

  if (/[a-z]/.test(value)) {
    score += 10;
  }

  if (/[A-Z]/.test(value)) {
    score += 10;
  }

  if (/[0-9]/.test(value)) {
    score += 10;
  }

  if (/[^A-Za-z0-9]/.test(value)) {
    score += 10;
  }

  if (value.length >= 16) {
    score += 10;
  }

  strengthFill.className = "";

  if (value.length === 0) {
    strengthFill.style.width = "0%";
    strengthText.textContent = "Enter a password";
  }
  else if (score < 45) {
    strengthFill.style.width = score + "%";
    strengthFill.classList.add("weak");
    strengthText.textContent = "Weak";
  }
  else if (score < 75) {
    strengthFill.style.width = score + "%";
    strengthFill.classList.add("medium");
    strengthText.textContent = "Medium";
  }
  else {
    strengthFill.style.width = score + "%";
    strengthFill.classList.add("strong");
    strengthText.textContent = "Strong";
  }
});
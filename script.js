// Countdown Timer
const timer = document.getElementById('timer');

function countdown() {
  const now = new Date().getTime();
  const deadline = new Date(now + 10 * 60 * 1000);

  const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = deadline - now;

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timer.innerHTML = `${minutes}m ${seconds}s`;

    if (distance < 0) {
      clearInterval(x);
      timer.innerHTML = "EXPIRED";
    }
  }, 1000);
}

countdown();

// Slide-in Form after 15 seconds
setTimeout(function() {
  document.getElementById('slide-in-form').style.display = 'block';
}, 15000);


var countDownDate = new Date("Aug 16, 2019 13:00:00").getTime();

var x = setInterval(function() {
var now = new Date().getTime();
var distance = countDownDate - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = days + "days " + hours + "hrs "
  + minutes + "min " + seconds + "sec ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Hope You Enjoyed the Show!";
  }
}, 1000);

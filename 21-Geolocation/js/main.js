'use strict';

const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition((data) => {
  speed.textContent = data.coords.speed;
  arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}),
  (err) => {
    console.log(err);
    alert('Hey!, You gotta allow that to happen!');
  };

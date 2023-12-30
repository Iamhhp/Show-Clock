const eleSec = document.querySelector('.clock p.sec');
const eleMin = document.querySelector('.clock p.min');
const eleHour = document.querySelector('.clock p.hour');
const radiosModel = document.querySelectorAll('input');

let timeMoving = '0.1s';

function showTimeClock1() {
  const valueTransitionDuration = getComputedStyle(eleSec).getPropertyValue('transition-duration');

  const time = new Date();
  const degHour = time.getHours() * (360 / 12) - 90; // - 360 / 12;
  const degMin = time.getMinutes() * (360 / 60) - 90; // - 360 / 60;
  const degSec = time.getSeconds() * (360 / 60) - 90; // - 360 / 60;

  if (degSec == -90 && valueTransitionDuration != '0s') {
    eleSec.style.setProperty('transition-duration', '0s');
  } else if (eleSec.style.transitionDuration == '0s') {
    eleSec.style.setProperty('transition-duration', timeMoving);
  }

  eleSec.style.setProperty('transform', `rotate(${degSec}deg)`);
  eleMin.style.setProperty('transform', `rotate(${degMin}deg)`);
  eleHour.style.setProperty('transform', `rotate(${degHour + (degMin / (6 * 60)) * 30}deg)`);
}

radiosModel.forEach((input) => {
  input.addEventListener('change', (e) => {
    const selectRadio = e.target.id;
    const divClock = document.querySelector('div.clock');
    switch (selectRadio) {
      case 'model-1': {
        divClock.style.borderRadius = '50%';
        break;
      }
      case 'model-2': {
        divClock.style.borderRadius = '0%';
        break;
      }
      case 'model-3': {
        eleSec.style.setProperty('transition-duration', '0.1s');
        eleMin.style.setProperty('transition-duration', '0.1s');
        eleHour.style.setProperty('transition-duration', '0.1s');
        timeMoving = '0.1s';
        break;
      }
      case 'model-4': {
        eleSec.style.setProperty('transition-duration', '1s');
        eleMin.style.setProperty('transition-duration', '1s');
        eleHour.style.setProperty('transition-duration', '1s');
        timeMoving = '1s';
        break;
      }
      default: {
        // model-6
        break;
      }
    }
  });
});
window.setInterval(showTimeClock1, 1000);

const AnalogClock = $container => {
  $container.innerHTML = `<div class="hand hour"></div>
  <div class="hand minute"></div>
  <div class="hand second"></div>
  <div class="time time1">|</div>
  <div class="time time2">|</div>
  <div class="time time3">|</div>
  <div class="time time4">|</div>
  <div class="time time5">|</div>
  <div class="time time6">|</div>
  <div class="time time7">|</div>
  <div class="time time8">|</div>
  <div class="time time9">|</div>
  <div class="time time10">|</div>
  <div class="time time11">|</div>
  <div class="time time12">|</div>`;

  const secondsMinuteDeg = 6;
  const handHour = document.querySelectorAll('.hand.hour');
  const handMinute = document.querySelectorAll('.hand.minute');
  const handSecond = document.querySelectorAll('.hand.second');

  setInterval(() => {
    const currentDate = new Date();
    const seconds = currentDate.getSeconds();
    const minutes = currentDate.getMinutes();
    const hours = currentDate.getHours();
    const hourDeg = (hours > 12 ? (hours - 12) * 30 : hours * 30) + minutes * 0.5;

    handHour.forEach(e => e.style.setProperty('--deg', hourDeg));
    handMinute.forEach(e => e.style.setProperty('--deg', secondsMinuteDeg * minutes));
    handSecond.forEach(e => e.style.setProperty('--deg', secondsMinuteDeg * seconds));
  }, 1000);
};

export default AnalogClock;

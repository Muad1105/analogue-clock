const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');
function clock() {
  let day = new Date();

  const deg = 6;
  // let options = { hour: 'numeric', minute: 'numeric', seconds: 'numeric' };
  // console.log(day.toLocaleDateString('hi-IN', options));
  let hh = day.getHours();
  console.log(hh);
  hh > 12 ? (hh -= 12) : hh;
  hh *= 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;
  console.log('hh', hh / 30, 'mm', mm / 6, 'ss', ss / 6);

  hr.style.transform = `rotateZ(${hh + mm / 12 + ss / 720}deg)`;
  mn.style.transform = `rotateZ(${mm + ss / 60}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
}

setInterval(clock, 1000);

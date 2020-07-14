class CountdownTimer {
  constructor({
    selector,
    targetDate
  }) {
    this.selector = selector;
    this.targetDate = targetDate;

    this.refs = {
      timer: document.querySelector('#timer-1'),
      tegDays: document.querySelector(`[data-value = "days"]`),
      tegHours: document.querySelector(`[data-value = "hours"]`),
      tegMins: document.querySelector(`[data-value = "mins"]`),
      tegSecs: document.querySelector(`[data-value = "secs"]`)
    }

    this.timer()
  };

  currentData() {
    const time = (Date.parse(this.targetDate)) - Date.parse(new Date());
    if (time <= 0) {
      clearInterval(timerId);
      alert("Время закончилось");
    } else {
      this.getTimeRemaining(time);
    }
  };

  getTimeRemaining(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    this.getElement(days, hours, mins, secs);

  };

  getElement(days, hours, mins, secs) {
    this.refs.tegDays.innerText = String(days).padStart(2, "0");
    this.refs.tegHours.innerText = String(hours).padStart(2, "0");
    this.refs.tegMins.innerText = String(mins).padStart(2, "0");
    this.refs.tegSecs.innerText = String(secs).padStart(2, "0");
  };

  timer() {
    this.currentData();
    setInterval(() => {
      this.currentData();
    }, 1000);
  };
};



new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2020'),
});
//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(hours, minutes = 0) {
    this.hours = hours;
    this.minutes = minutes;
    this.time = new Date(new Date().setHours(hours, minutes));
  }

  toString() {
    return this.time.toTimeString().slice(0, 5);
  }

  plus(minutesToAdd) {
    this.time.setMinutes(this.minutes + minutesToAdd);
    return this.toString();
  }

  minus(minutesToSub) {
    this.time.setMinutes(this.minutes - minutesToSub);
    return this.toString();
  }

  equals(clock) {
    return this.toString() === clock.toString();
  }
}

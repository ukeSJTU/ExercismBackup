//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(hours = 0, minutes = 0) {
    const totalMinutes = hours * 60 + minutes;

    this.normalizeTime(totalMinutes);
  }

  normalizeTime(totalMinutes) {
    const minutesInDay = 24 * 60;
    const normalizedMinutes = ((totalMinutes % minutesInDay) + minutesInDay) % minutesInDay;
    
    this.hours = Math.floor(normalizedMinutes / 60);
    this.minutes = normalizedMinutes % 60;
  }

  toString() {
    const paddedHours = this.hours.toString().padStart(2, '0');
    const paddedMinutes = this.minutes.toString().padStart(2, '0');
    return `${paddedHours}:${paddedMinutes}`;
  }

  plus(minutesToAdd) {
    const totalMinutes = this.hours * 60 + this.minutes + minutesToAdd;
    return new Clock(0, totalMinutes);
  }

  minus(minutesToSubtract) {
    const totalMinutes = this.hours * 60 + this.minutes - minutesToSubtract;
    return new Clock(0, totalMinutes);
  }

  equals(otherClock) {
    return this.hours === otherClock.hours && this.minutes === otherClock.minutes;
  }
}

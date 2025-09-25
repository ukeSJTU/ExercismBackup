//
// This is only a SKELETON file for the 'Meetup' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const meetup = (year, month, week, weekday) => {
  // Convert month from 1-based to 0-based for JavaScript Date
  const jsMonth = month - 1;
  
  // Map weekday names to numbers (0=Sunday, 6=Saturday)
  const weekdays = {
    'Sunday': 0, 'Monday': 1, 'Tuesday': 2, 'Wednesday': 3,
    'Thursday': 4, 'Friday': 5, 'Saturday': 6
  };
  
  const targetWeekday = weekdays[weekday];
  
  if (week === 'teenth') {
    // Find the teenth day (13th-19th) that matches the weekday
    for (let day = 13; day <= 19; day++) {
      const date = new Date(year, jsMonth, day);
      if (date.getDay() === targetWeekday) {
        return date;
      }
    }
  } else if (week === 'last') {
    // Start from the last day of the month and work backwards
    const lastDay = new Date(year, jsMonth + 1, 0).getDate();
    for (let day = lastDay; day >= 1; day--) {
      const date = new Date(year, jsMonth, day);
      if (date.getDay() === targetWeekday) {
        return date;
      }
    }
  } else {
    // Handle first, second, third, fourth
    const weekNumbers = { 'first': 1, 'second': 2, 'third': 3, 'fourth': 4 };
    const weekNumber = weekNumbers[week];
    
    let count = 0;
    for (let day = 1; day <= 31; day++) {
      const date = new Date(year, jsMonth, day);
      // Check if we've moved to next month
      if (date.getMonth() !== jsMonth) break;
      
      if (date.getDay() === targetWeekday) {
        count++;
        if (count === weekNumber) {
          return date;
        }
      }
    }
  }
  
  throw new Error('Date not found');
};

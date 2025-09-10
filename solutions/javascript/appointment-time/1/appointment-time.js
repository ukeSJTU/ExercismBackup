// @ts-check

/**
 * Create an appointment
 *
 * @param {number} days
 * @param {number} [now] (ms since the epoch, or undefined)
 *
 * @returns {Date} the appointment
 */
export function createAppointment(days, now = undefined) {
  const currentTime = now ? new Date(now) : new Date();
  const appointmentDate = new Date(currentTime);
  appointmentDate.setDate(appointmentDate.getDate() + days);
  return appointmentDate;
}

/**
 * Generate the appointment timestamp
 *
 * @param {Date} appointmentDate
 *
 * @returns {string} timestamp
 */
export function getAppointmentTimestamp(appointmentDate) {
  return appointmentDate.toISOString();
}

/**
 * Get details of an appointment
 *
 * @param {string} timestamp (ISO 8601)
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function getAppointmentDetails(timestamp) {
  const date = new Date(timestamp);
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    date: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes()
  };
}

/**
 * Update an appointment with given options
 *
 * @param {string} timestamp (ISO 8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function updateAppointment(timestamp, options) {
  const date = new Date(timestamp);
  
  // Update the date with provided options
  if (options.year !== undefined) {
    date.setFullYear(options.year);
  }
  if (options.month !== undefined) {
    date.setMonth(options.month);
  }
  if (options.date !== undefined) {
    date.setDate(options.date);
  }
  if (options.hour !== undefined) {
    date.setHours(options.hour);
  }
  if (options.minute !== undefined) {
    date.setMinutes(options.minute);
  }
  
  // Return the updated appointment details
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    date: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes()
  };
}

/**
 * Get available time in seconds (rounded) between two appointments
 *
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 *
 * @returns {number} amount of seconds (rounded)
 */
export function timeBetween(timestampA, timestampB) {
  const dateA = new Date(timestampA);
  const dateB = new Date(timestampB);
  
  // Get the absolute difference in milliseconds
  const diffInMs = Math.abs(dateB.getTime() - dateA.getTime());
  
  // Convert to seconds and round
  const diffInSeconds = diffInMs / 1000;
  return Math.round(diffInSeconds);
}

/**
 * Get available times between two appointment
 *
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 */
export function isValid(appointmentTimestamp, currentTimestamp) {
  const appointmentDate = new Date(appointmentTimestamp);
  const currentDate = new Date(currentTimestamp);
  
  // Return true if appointment is in the future
  return appointmentDate > currentDate;
}

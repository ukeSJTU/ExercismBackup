//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, ageInSeconds) => {
  const EARTH_YEAR_IN_SECONDS = 31_557_600;

  const orbitalPeriods = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1.0,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
  };

  if (!(planet in orbitalPeriods)) {
    throw new Error('not a planet');
  }
  
  const earthAge = ageInSeconds / EARTH_YEAR_IN_SECONDS;

  const planetAge = earthAge / orbitalPeriods[planet];

  return Math.round(planetAge * 100) / 100;
};

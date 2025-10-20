class SpaceAge:
    def __init__(self, seconds):
        self.seconds = seconds
        self.earth_year_seconds = 31557600  # seconds in one Earth year
        
        # Orbital periods in Earth years
        self.orbital_periods = {
            'mercury': 0.2408467,
            'venus': 0.61519726,
            'earth': 1.0,
            'mars': 1.8808158,
            'jupiter': 11.862615,
            'saturn': 29.447498,
            'uranus': 84.016846,
            'neptune': 164.79132
        }
    
    def _calculate_age(self, orbital_period):
        """Helper method to calculate age on a planet given its orbital period."""
        earth_years = self.seconds / self.earth_year_seconds
        planet_years = earth_years / orbital_period
        return round(planet_years, 2)
    
    def on_mercury(self):
        return self._calculate_age(self.orbital_periods['mercury'])
    
    def on_venus(self):
        return self._calculate_age(self.orbital_periods['venus'])
    
    def on_earth(self):
        return self._calculate_age(self.orbital_periods['earth'])
    
    def on_mars(self):
        return self._calculate_age(self.orbital_periods['mars'])
    
    def on_jupiter(self):
        return self._calculate_age(self.orbital_periods['jupiter'])
    
    def on_saturn(self):
        return self._calculate_age(self.orbital_periods['saturn'])
    
    def on_uranus(self):
        return self._calculate_age(self.orbital_periods['uranus'])
    
    def on_neptune(self):
        return self._calculate_age(self.orbital_periods['neptune'])

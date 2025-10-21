from datetime import timedelta

def add(moment):
    # One gigasecond = 1,000,000,000 seconds
    gigasecond = timedelta(seconds=1_000_000_000)
    
    # Add the gigasecond to the given moment
    return moment + gigasecond
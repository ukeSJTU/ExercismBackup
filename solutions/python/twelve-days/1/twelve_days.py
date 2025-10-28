def recite(start_verse, end_verse):
    ordinals = [
        "first", "second", "third", "fourth", "fifth", "sixth",
        "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth"
    ]
    
    gifts = [
        "a Partridge in a Pear Tree",
        "two Turtle Doves",
        "three French Hens",
        "four Calling Birds",
        "five Gold Rings",
        "six Geese-a-Laying",
        "seven Swans-a-Swimming",
        "eight Maids-a-Milking",
        "nine Ladies Dancing",
        "ten Lords-a-Leaping",
        "eleven Pipers Piping",
        "twelve Drummers Drumming"
    ]
    
    result = []
    
    for verse_num in range(start_verse, end_verse + 1):
        verse = f"On the {ordinals[verse_num - 1]} day of Christmas my true love gave to me: "
        
        if verse_num == 1:
            verse += gifts[0] + "."
        else:
            for i in range(verse_num - 1, 0, -1):
                verse += gifts[i] + ", "
            verse += "and " + gifts[0] + "."
        
        result.append(verse)
    
    return result

def response(hey_bob):
    def is_question(msg):
        return msg.strip().endswith("?")

    def is_yell(msg):
        msg = msg.strip()
        return msg.isupper() and any(c.isalpha() for c in msg)

    def is_silence(msg):
        return msg.strip() == ""

    hey_bob = hey_bob.strip()

    if is_question(hey_bob) and is_yell(hey_bob):
        return "Calm down, I know what I'm doing!" 
    elif is_question(hey_bob):
        return "Sure."
    elif is_yell(hey_bob):
        return "Whoa, chill out!"
    elif is_silence(hey_bob):
        return "Fine. Be that way!"

    return "Whatever."
def piglatinify(st):
    """
    Takes in a string, and returns the pig-latin translation of
    that string.
    Note: You may assume there will be no punctuation for now
    HINT: You may not end up using regular expressions for this one...

    "hello, connor" -> "ello-hay, onnor-cay
    """
    VOWELS = [letter for letter in "aeiou"]
    CONS = [letter for letter in "qwrtyplkjhgfdszxcvbnm"]

    # Make string lowercase, and return itsself if it is the empty string
    st = st.lower()
    if st == "":
        return ""
    
    # Create a new string to return
    new_st = ""
    
    # Change each word to pig latin
    for word in st.split(" "):
        if word[0] in VOWELS:
            new_st += f"{word}-way "
        elif word[1] in CONS:
            new_st += f"{word[2:]}-{word[0:2]}ay "
        else:
            new_st += f"{word[1:]}-{word[0]}ay "

    # removing trailing space
    new_st = new_st[:-1]

    return new_st
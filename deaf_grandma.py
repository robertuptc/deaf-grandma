def deaf_grandma():
    counter= 0
    text = input("HEY KID!")
    while counter != 2:
        if text == "":
            text = input("WHAT!")
        elif text == "GOODBYE!":
            if counter == 0:
                counter += 1
                text = input("LEAVING SO SOON?")
            elif counter == 1:
                counter += 1
                print("LATER, SKATER!")
        elif text.isupper():
            text = input("NO, NOT SINCE 1946!")
        else:
            text = input("SPEAK UP, KID!")
deaf_grandma()
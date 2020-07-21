def is_armstrong_number(number):

    order = len(str(number))
    temp = number
    sum = 0
    while temp > 0:
        digit = temp % 10
        sum += digit ** order
        temp //= 10 

    if sum == number:
        return True
    return False
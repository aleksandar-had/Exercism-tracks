import rstr


def generate_random_name():
    return rstr.xeger(r"^[A-Z]{2}\d{3}$")


class Robot:
    used_names = list()

    def __init__(self):
        _given_name = ""
        while _given_name in self.used_names:
            _given_name = generate_random_name()
        self.name = _given_name
        self.used_names.append(_given_name)

    def reset(self):
        self.__init__()

import time


def get_prime():
    prime_numbers = []
    n = 10000000  #int(input("Количество простых чисел:"))
    i = 1
    start = time.perf_counter()
    while len(prime_numbers) != n:
        i += 1
        if len(prime_numbers) == 0:
            prime_numbers.append(i)
        else:
            counter = 0
            for j in prime_numbers:
                if i % j == 0:
                    counter += 1
                if j > 9:
                    break
            if counter == 0:
                prime_numbers.append(i)
    poc_time = f'время выполнения: {time.perf_counter() - start}'
    return len(prime_numbers), poc_time


print(get_prime())

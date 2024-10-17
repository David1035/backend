x = int(input('ingresa la tabla de multiplicar '))
for i in range(1, 11):
    print(i, '*', x, '=' ,i * x)

numeros = range(1, 101)

for i in numeros:
    if(i % 2 == 0):
        print(i)


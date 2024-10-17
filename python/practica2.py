palabra = input('Ingrese una frase o palabra ')

vocales = ['a', 'e', 'i', 'o', 'u']

numeroVocales = 0
numeroConsonantes = 0

for letra in palabra:
    if letra.isalpha(): # verifica si el caráctes es una letra
        if letra in vocales:
            numeroVocales += 1
        else:
            numeroConsonantes += 1

print(f'Tienes {numeroVocales} vocales y {numeroConsonantes} consonantes')
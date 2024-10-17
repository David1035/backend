# pedir por teclado 3 números, realizar la suma y luego, sacar el promedio. promedio es la cantidad total por la cantidad de veces

numero = int(input("ingresa el primer numero "))
nuemro1 = int(input("Ingresa otro número "))
numero2 = int(input("ingressa otro numero "))

totalSuma = (numero + nuemro1 +numero2)

promedioSuma = totalSuma / len(totalSuma)

print("la suma total es", totalSuma, " y el promedio es", promedioSuma )
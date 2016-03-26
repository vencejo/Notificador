from mpd import MPDClient 
import time

radio = MPDClient()
radio.connect("localhost",6600)
# Documentacion de la libreria en www.pythonhosted.org/python-mpd2/index.html

radio.clear() # Limpia la playlist anterior

radio.add("http://77.92.76.134:7100") # Pone una estacion de radio en la playlist
# Busqueda de IPs de Radios en www.xatworld.com/radio-search

radio.play()

# Pone el volumen al 79%
radio.setvol(79)

#time.sleep(10)
#radio.stop()



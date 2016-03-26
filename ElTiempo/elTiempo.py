# -*- coding: utf-8-*-

import requests
import pprint
import ConfigParser

config = ConfigParser.ConfigParser()
config.read('datosCuentaElTiempo.ini')

credenciales = config.get('datosCuentaElTiempo', 'credenciales')
        
def elTiempoAhora(latitud=37.40,longitud=-1.75):
    """ Devuelve un diccionario con los valores climaticos acutales en las coordenadas dadas.
    La latitud y la longitud se han de dar con dos digitos de precision, por ejemplo:
    Coords. Pulpi: 37.40 Lat -1.75 Long """
    
    peticion = credenciales
    peticion += '/api/weather/v2/observations/current'
    peticion += '?units=m&geocode='+ ("2C" if latitud<0 else "") + str(latitud) + "%" + \
                ("2C" if longitud<0 else "") + str(longitud)+ '&language=es' 
    
    res = requests.get(peticion)
    try:
        res.raise_for_status()
    except Exception as exc:
        print('There was a problem: %s' % (exc))
        
    observacion = res.json()['observation']
    
    return {'dia': observacion['dow'], 'nubes': observacion['sky_cover'], 'presion': observacion['ptend_desc'],
           'direccion del viento': observacion['wdir_cardinal'], 'velocidad del viento':observacion['metric']['wspd'],
            'temperatura aparente': observacion['metric']['feels_like'], 'indice ultravioleta': observacion['uv_desc'],
            
           }

def elTiempo24h(latitud=37.40,longitud=-1.75):
    """ Devuelve un diccionario con los valores climaticos para las proximas 24h en las coordenadas dadas.
    La latitud y la longitud se han de dar con dos digitos de precision, por ejemplo:
    Coords. Pulpí: 37.40 Lat -1.75 Long """
    
    peticion = "https://5635e87f-4847-47e6-89eb-48389c89baf4:v7nWXHIh3q@twcservice.eu-gb.mybluemix.net"
    peticion += '/api/weather/v2/forecast/hourly/24hour'
    peticion += '?units=m&geocode='+ ("2C" if latitud<0 else "") + str(latitud) + "%" + \
                ("2C" if longitud<0 else "") + str(longitud)+ '&language=es' 
    
    res = requests.get(peticion)
    try:
        res.raise_for_status()
    except Exception as exc: 
        print('There was a problem: %s' % (exc))
        
    observacion = res.json()['forecasts']
    
    probPrecipitacion24h = [observacion[i]['pop'] for i in range(24)]
    temperatura = [observacion[i]['feels_like'] for i in range(24)]
    velocidadViento = [observacion[i]['wspd'] for i in range(24)]
    indiceUltravioleta = [observacion[i]['uv_desc'] for i in range(24)]
    condicionesParaGolf = [observacion[i]['golf_category'] for i in range(24)] #No aplicable de noche
    
    return {'probPrecipitacion24h':probPrecipitacion24h, 'temperatura': temperatura, 'velocidadViento': velocidadViento,
           'indice ultravioleta': indiceUltravioleta, 'condicionesParaGolf':condicionesParaGolf}
   
    
pprint.pprint(elTiempoAhora())
print("")
pprint.pprint(elTiempo24h())

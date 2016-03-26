# -*- coding: utf-8-*-

import requests
import pprint
import ConfigParser
import shutil
import os

config = ConfigParser.ConfigParser()
config.read('credencialesIBM.ini')

user = config.get('credenciales', 'user')
password = config.get('credenciales', 'password')
        
def sintetizador(texto):
    """ Emite con voz sintetizada un texto dado. 
    Para ello hace una peticion a Watson de IBM """
    
    vozEnrrique = 'es-ES_EnriqueVoice'
    vozLaura = 'es-ES_LauraVoice'
    
    res = requests.get("https://stream.watsonplatform.net/text-to-speech/api/v1/synthesize",
            auth=(user, password),
            params={'text':texto, 'voice':vozLaura, 'accept': 'audio/wav'},
            stream=True, verify=False)
    try:
        res.raise_for_status()
    except Exception as exc:
        print('There was a problem: %s' % (exc))
        
    with open("temp.wav", "wb") as temp:
        temp.write(res.content)
        
    os.system("aplay -D plughw:1,0 temp.wav")
    
sintetizador("hola mundo. Esto es una prueba de lectura a ver si hablo bien el español. ¿Que opinas?")
    

# -*- coding: utf-8-*-
import imaplib
import email
import email.header
import re
from dateutil import parser
import ConfigParser
import sys

reload(sys)
sys.setdefaultencoding('UTF8')

config = ConfigParser.ConfigParser()
config.read('datoscorreo.ini')

user = config.get('datosCorreo', 'usuario')
password = config.get('datosCorreo', 'pass')



def obtenerRemitente(correo):
    return email.utils.parseaddr(correo['From'])[1]
    
def obtenerEncabezado(correo):
    return unicode(email.header.decode_header(correo['subject'])[0][0])
    

def obtenerFecha(email):
    return parser.parse(email.get('date'))


def obtenerMasRecientes(emails):

    dates = [obtenerFecha(e) for e in emails]
    dates.sort(reverse=True)
    if dates:
        return dates[0]
    return None


def cogerEmailsSinLeer( desde=None, marcarComoLeido=False, limite=None):
    """ Si se pone un limite al numero de mensajes y este es mayor al de 
    mensajes sin leer, se devuelve el numero de mensajes sin leer """
    
    conn = imaplib.IMAP4_SSL('imap.gmail.com')
    conn.debug = 0
    conn.login(user, password)
    conn.select(readonly=(not marcarComoLeido))

    msgs = []
    (retcode, messages) = conn.search(None, '(UNSEEN)')

    if retcode == 'OK' and messages != ['']:
        numUnread = len(messages[0].split(' '))
        if limite and numUnread > limite:
            return numUnread

        for num in messages[0].split(' '):
            # parse email RFC822 format
            ret, data = conn.fetch(num, '(RFC822)')
            msg = email.message_from_string(data[0][1])

            if not desde or getDate(msg) > since:
                msgs.append(msg)
    conn.close()
    conn.logout()

    return msgs




if __name__ == "__main__":
    
   mensajes = cogerEmailsSinLeer()
   print([obtenerRemitente(mail) for mail in mensajes])
   print([obtenerEncabezado(mail) for mail in mensajes])

    

import ConfigParser
import tweepy

config = ConfigParser.ConfigParser()
config.read('datosCuentaTwitter.ini')

APP_KEY = config.get('datosTwitter', 'APP_KEY')
APP_SECRET = config.get('datosTwitter', 'APP_SECRET')
OAUTH_TOKEN = config.get('datosTwitter', 'OAUTH_TOKEN')
OAUTH_SECRET = config.get('datosTwitter', 'OAUTH_TOKEN_SECRET')

auth = tweepy.OAuthHandler(APP_KEY, APP_SECRET)
auth.set_access_token(OAUTH_TOKEN, OAUTH_SECRET)

api = tweepy.API(auth)


tweetsDeLaGenteSeguidaPorAlicia = api.home_timeline(count=6) #Coge 6 tweets

for tweet in tweetsDeLaGenteSeguidaPorAlicia:
    print("")
    print(tweet.user.screen_name)
    print(tweet.created_at)
    print(tweet.text)
    print(" *" * 40)

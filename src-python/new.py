# to be able to do javascript stuff in python
from javascript import require, On, Once, AsyncTask, once, off

# create mineflayer class object
mineflayer = require('mineflayer')

# create the bot object with mineflayer class object
bot = mineflayer.createBot({
    'host': 'localhost', 
    'port': 25565, 
    'username': 'MCSR_bot', 
    'hideErrors': False })

# execute the javascript function 'once' that logs the bot in
once(bot, 'login')
bot.chat('I spawned')

# create an event listener for the 'playerJoin' event (on the bot object)
@On(bot, 'chat')
def onChat(this, user, message, *rest):
    print(f'{user} said "{message}"')

    # If the message contains stop, remove the event listener and stop logging.
    if 'stop' in message:
        off(bot, 'chat', onChat)

while True:
    pass
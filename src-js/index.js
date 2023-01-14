const mineflayer = require('mineflayer')
const { pathfinder, Movements, goals } = require('mineflayer-pathfinder')
const Goalfollow = goals.GoalFollow 

const bot = mineflayer.createBot({
    host: 'localhost',
    port: 25565,
    username: 'zocrates_bot',
    password: ''
})

bot.loadPlugin(pathfinder)

function findBuriedTreasure () {
    
}

function followPlayer () {
    const playerZocrates = bot.players['Zocrates']
    
    if (!playerZocrates) {
        bot.chat("No Zocrates")
        return
    }

    const mcData = require('minecraft-data')(bot.version)
    const movements = new Movements(bot, mcData)
    bot.pathfinder.setMovements(movements)

    const goal = new Goalfollow(playerZocrates.entity, 2)
    bot.pathfinder.setGoal(goal, true)

}



bot.once('spawn', followPlayer)
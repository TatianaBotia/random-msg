const messages = [
    'Tatiana',
    'Kathy',
    'Betty',
    'Orlando',
    'Nico',
    'Leo',
    'Carol',
    'Angelica',
    'Felipe'
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)]
    return console.log(message)
}
module.exports = { randomMsg }
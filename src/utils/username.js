

const ADJECTIVES = [
    'boundless',
    'plausible',
    'sleepy',
    'slim',
    'dangerous',
    'purple',
    'electronic'
]

const OBJECTS = [
    'puddle',
    'piano',
    'window',
    'bowl',
    'socks',
    'chalk',
    'brocolli'
]

function genRandomUsername() {
    const adj = ADJECTIVES[Math.floor(Math.random()*7)]
    const obj = OBJECTS[Math.floor(Math.random()*7)]

    return `${adj}-${obj}`
}

module.exports = {
    genRandomUsername
}
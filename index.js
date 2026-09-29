import { createClient } from 'bedrock-protocol'

const HOST = process.env.HOST || 'play.yourserver.com'
const PORT = process.env.PORT || 19132

console.log('Starting Ricky-bot...')

function startBot() {
  const client = createClient({
    host: HOST,
    port: Number(PORT),
    username: 'Ricky_Bot',
    offline: true,
    version: '1.21.20'
  })

  client.on('spawn', () => {
    console.log('Bot joined world!')
  })

  client.on('disconnect', (reason) => {
    console.log('Disconnected:', reason)
    setTimeout(startBot, 5000)
  })

  client.on('error', (err) => {
    console.log('Error:', err.message)
  })
}

startBot()

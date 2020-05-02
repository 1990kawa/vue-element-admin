const { sh, cli } = require('tasksfile')
const chalk = require('chalk')
const config = require('../vue.config.js')
const rawArgv = process.argv.slice(2)
const args = rawArgv.join(' ')
const port = process.env.PORT || 3000

const report = rawArgv.includes('--report')

const publicPath = config.publicPath

var connect = require('connect')
var serveStatic = require('serve-static')
const app = connect()

async function start() {
  
  app.use(
    publicPath,
    serveStatic('./dist', {
      index: ['index.html', '/']
    })
  )
  
  app.listen(port, function () {
    console.log(chalk.green(`> Preview at  http://localhost:${port}${publicPath}`))
    if (report) {
      console.log(chalk.green(`> Report at  http://localhost:${port}${publicPath}report.html`))
    }
  
  })
}
start()

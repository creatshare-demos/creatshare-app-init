let program = require('commander'),
	cs = require('../src/cs')

program
	.allowUnknownOption()
	.version('2.0.0')
	.description('The scaffold of CreatShare`s front-end project')
	.option('-e, --enjoy')

program
   .command('create <dir>')
   .description('create a new web app project')
   .action(function(dir) {
     console.log('create "%s"', dir)
   })

program.parse(process.argv)

if (program.rawArgs[2] == 'create') {
	console.log('start create')
	cs.create()
} else if (program.rawArgs[2] == 'share') {
	console.log('start share')
	cs.share()
} else {
	console.log('warning: missing required command `create` or `share`')
}
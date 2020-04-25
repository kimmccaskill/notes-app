const note = require('./notes')
const chalk = require('chalk')
const yargs = require('yargs')

yargs.version('1.1.0')

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    note.addNote(argv.title, argv.body)
  }
})

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    note.removeNote(argv.title)
  }
})

yargs.command({
  command: 'list',
  describe: 'Lists the notes',
  handler: () => {
    console.log('Listing notes')
  }
})

yargs.command({
  command: 'read',
  describe: 'Reads the notes',
  handler: () => {
    console.log('Reading the notes')
  }
})

yargs.parse()

// console.log(yargs.argv)
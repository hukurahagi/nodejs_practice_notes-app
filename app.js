const yargs = require('yargs')
const notes = require('./notes')

//version
yargs.version('1.1.0')

//command
yargs.command({
    command:'add',
    describe:'新しいノートの追加',
    builder:{
        title:{
            describe:'ノートのタイトル',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:'ノートの中身',
            demandOption: true,
            type: 'string'
        }
    },
    handler: argv => {
        notes.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command:'remove',
    describe:'ノートの削除',
    builder:{
        title:{
            describe:'ノートのタイトル',
            demandOption: true,
            type: 'string'
        }
    },
    handler: argv => {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'ノートのリストを表示',
    handler: function(){
        notes.listNotes()
    }
})

yargs.command({
    command:'read',
    describe:'ノートの中身を表示',
    builder:{
        title:{
            describe:'ノートのタイトル',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()
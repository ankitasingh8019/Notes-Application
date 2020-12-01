const chalk=require('chalk')
const yargs=require('yargs')
const Notes= require('./notes.js')
//customize our yargs
yargs.version('1.1.0')
//create a add command
yargs.command({
    command:'add',
    describe:'Add a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note Body',
            demandOption:true,
            type:'string'

        }
    },
    handler(argv){
       Notes.addNote(argv.title,argv.body)
    }
})
//create a remove command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        Notes.removeNotes(argv.title)
    }
})
//To create Read command
yargs.command({
    command:'read',
    describe:'To read a note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        Notes.readNote(argv.title)
    }
})
//To create List command
yargs.command({
    command:'list',
    describe:'To list all notes',
    handler(){
        Notes.listNotes()
    }
})
//add,remove,list,read
yargs.parse()

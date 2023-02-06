const getNotes = require("./notes")
const chalk = require('chalk')
const yargs = require("yargs")

// Create add command
yargs.command({
    command:"add",
    describe:"Add a new note",
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:'string'
        },
        body:{
            describe:"Note body",
            demandOption:true,
            type:'string'
        }
    },
    handler: (argv)=>{
        console.log("Title: "+ argv.title)
        console.log("Body: "+ argv.body)
    }
})

// Create remove command
yargs.command({
    command:"remove",
    describe:"Remove a note",
    handler:()=>{
        console.log("Removing the note!")
    }
})

// Create a list command
yargs.command({
    command:"list",
    describe:"List your notes",
    handler:()=>{
        console.log("Listing out all note")
    }
})

// Create a read command
yargs.command({
    command:"read",
    describe:"Read a note",
    handler:()=>{
        console.log("Reading a note")
    }
})


yargs.parse()
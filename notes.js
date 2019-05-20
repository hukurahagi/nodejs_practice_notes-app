const fs = require('fs')
const chalk = require('chalk')

const addNote = (title,body) =>{
    const notes = loadNotes()
    const duplicateNote = notes.find(note=> note.title === title)

    debugger;

    if(!duplicateNote){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New notes is added!'))
    }else{
        console.log(chalk.red.inverse('Note title is taken!'))
    }
}

const saveNotes = notes => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)    
    }catch(e){
        return []
    }
}

const removeNote = title =>{
    const notes = loadNotes()
    
    const notesToKeep = notes.filter(note=> note.title !== title )

    if(notes.length > notesToKeep.length){
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse('notes is removed!'))
    }else{
        console.log(chalk.red.inverse('No note found!'))
    }
}

const listNotes = ()=>{
    const notes = loadNotes()
    console.log(chalk.green.inverse('list notes!'))
    for(note of notes){
        console.log(note.title)
    }
}

const readNote = (title)=>{
    const notes = loadNotes()
    const targetNote = notes.find(note=> note.title === title)

    if(targetNote){
        console.log(targetNote.body)
    }else{
        console.log(chalk.red.inverse('No title!'))
    }
}

module.exports = {
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}
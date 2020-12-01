const chalk=require('chalk')
const fs=require('fs')
const addNote=(title,body)=>{
    const notes=loadNotes()
    const duplicateNote=notes.find((note)=>note.title===title)
    //debugger
    if(!duplicateNote)
    {
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added !'))}
        else{
            console.log(chalk.red.inverse('This Note title is already taken !'))
        }
}
const saveNotes=(notes)=>{
            const dataJSON=JSON.stringify(notes)
            fs.writeFileSync('notes.json',dataJSON)
        }
const loadNotes=()=>{
            try{
                const dataBuffer=fs.readFileSync('notes.json')
                const dataJSON=dataBuffer.toString()
                return JSON.parse(dataJSON)
            }
            catch(e){
                return []
            }
        }
const removeNotes=(title)=>{
            const notes=loadNotes()
            const notesToKeep= notes.filter((note)=>note.title!==title)
        if (notes.length!==notesToKeep.length)
        {
            console.log(chalk.green.inverse('Note Removed !'))
            saveNotes(notesToKeep)
        }
        else{
            console.log(chalk.red.inverse('No note found !'))
        }
    
    }
const listNotes=()=>{
        console.log(chalk.inverse('Your notes..'))
        const notes=loadNotes()
        notes.forEach((note)=>{
            console.log(note.title)
        })
}
const readNote=(title)=>{
    const notes=loadNotes()
    const noteToRead=notes.find((note)=>note.title===title)
     if(noteToRead)
    {
    console.log(chalk.blue.inverse(noteToRead.title))
    console.log(noteToRead.body)
    }
    else{
        console.log(chalk.red.inverse('No note found !'))
    }
}
module.exports={
    addNote:addNote,
    removeNotes:removeNotes,
    listNotes:listNotes,
    readNote:readNote
}
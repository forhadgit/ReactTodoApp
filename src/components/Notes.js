import React,{ Component } from 'react'
import Note from './Note';
import { NoteContext } from '../context/Note.context';

class Notes extends Component {
    static contextType=NoteContext;
  render(){
     const {notes} = this.context;
    return(
        <div>
            <h3>Notes</h3>
            {notes.map( note => (
            <Note key={note.id} title={note.title} 
                  description={note.description} 
                  note={note}/>))}
            
            
        </div>
        
    )
  }
    
    
}
export default Notes;
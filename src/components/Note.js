import React, { Component } from 'react';
import {NoteContext} from '../context/Note.context';




class Note extends Component {
    static contextType = NoteContext;
    handleRemove = (id) => {
        this.context.removeNote(id)
    }
    render(){
        
        const { id, title, description } = this.props.note; 
      
            return(
                <div className='card'>
                    <div className='card-body'>
                        <h3 className='card-title'>{title}</h3>
                        <p className='card-description'>{description}</p>
                        <button className='btn btn-secondary' 
                                onClick={() => this.handleRemove(id)}>Remove</button>
                    </div>
        
                </div>
            )
    
    }
    
}
    

export default Note;

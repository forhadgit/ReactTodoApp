import React, { Component, createContext } from 'react';

export const NoteContext = createContext();
export class NoteProvider extends Component{
    state = {
        notes : [
            {   
                id:1,
                title: 'Notes 1',
                description: 'Note 1 Description'
            },
            {   
                id:2,
                title: 'Notes 2',
                description: 'Note 2 Description'
            },
            {   
                id:3,
                title: 'Notes 3',
                description: 'Note 3 Description'
            },
            {   
                id:4,
                title: 'Notes 4',
                description: 'Note 4 Description'
            },
        ]

    };

    addNote = note =>{
        this.setState({
            notes: [...this.state.notes, note]
        });
    };
    removeNote = id => {
        this.setState({
            notes: this.state.notes.filter(note => note.id !== id)
        });
    };
        
    render(){
        return(
            <NoteContext.Provider value={{notes: this.state.notes,
            addNote: this.addNote, removeNote: this.removeNote
            }}>
             {this.props.children}
            </NoteContext.Provider>
        )
    }
}
import React, { Component } from 'react';
import uuid from 'uuid/v4';
import classNames from 'classnames';
import { NoteContext} from '../context/Note.context';


class AddNote extends Component{
    static contextType = NoteContext;

    state = {
        id: uuid(),
        title: '',
        description: '',
        errors:{} 
    };
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        if(this.state.title === ''){
            this.setState({
                errors: {
                    ...this.state.errors,
                    title: 'Please provide Title'
                }
            });
            return;
        }
        if(this.state.description ===''){
            this.setState({
                errors: {
                    ...this.state.errors,
                    description:'Please provide description'
                }
                
            });
            return;
        }
        this.context.addNote(this.state);
        this.props.history.push('/')
        this.setState({
            id: '',
            title: '',
            description: '',
            errors: {}
        });
           
    };
    
    render(){
        return(
            <> <h1>Add Note</h1>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input 
                            type='text' 
                            name='title'
                            value={this.state.title}
                            onChange={this.handleChange}
                            className={classNames(
                                'form-control',
                                !!this.state.errors.title && 'is-invalid'
                            )}
                            
                        />
                        <div className="invalid-feedback">
                            Title must be Required

                        </div>
                </div>

                <div className="form-group">
                        <label htmlFor="title"> Description </label>

                        <textarea 
                            
                            name='description'
                            value={this.state.description}
                            onChange={this.handleChange}
                            className={classNames(
                                'form-control',
                                !!this.state.errors.description && 'is-invalid'
                            )}
                        />
                        <div className="invalid-feedback">
                            Description must be Required

                        </div>
                        
                        
                </div>
                   <button className='btn btn-secondary' >
                    Submit

                </button>
            </form>
            </>
        )
    }
    
}


export default AddNote;

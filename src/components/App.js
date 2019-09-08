import React,{ Component } from 'react'
import {
    Route,
    Switch,
  } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Notes from './Notes';
import AddNote from './AddNote';
import About from './About';
import NotFound from './NotFound';
import { NoteProvider } from '../context/Note.context';


class App extends Component{



    render(){
        return(
            <div className='container'>  
                <Header />
                <Switch>
                 <NoteProvider>
                    
                <Route 
                   path="/" 
                   exact
                   component={Notes}
                    />
               
                <Route 
                   path='/addnote'
                   component={AddNote}/>
                
                  
                <Route 
                    path="/about" 
                    component={About} />
                
                </NoteProvider> 
                <Route component={NotFound} />  
                </Switch>  
                <Footer />
            </div>
           
        )
    }
}

export default App;
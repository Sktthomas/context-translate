import React from 'react'
import LanguageContext from '../context/LanguageContext'
import ColourContext from '../context/ColourContext'

class Button extends React.Component {

    //static contextType = LanguageContext; //hooking up context to our Button component. It has to be named this and be static
    //We can only use this.context when we are using a single context

    renderSubmit(value) {
        return value === 'english' ? 'Submit' : 'Send'
    }

    render(){
        console.log(this.context) //this.context references the context object

        //const text = this.context === 'english' ? 'Submit' : 'Send';
        return (
            <ColourContext.Consumer>
                {(colour) => 
                 <button className={`ui button ${colour}`}>
                     <LanguageContext.Consumer>
                         {value => this.renderSubmit(value)}
                     </LanguageContext.Consumer>
                 </button>
                }
            </ColourContext.Consumer>
        )           
    }
}

export default Button
import React from 'react'
import LanguageContext from '../context/LanguageContext'

class Button extends React.Component {

    static contextType = LanguageContext; //hooking up context to our Button component. It has to be named this and be static

    render(){
        console.log(this.context) //this.context references the context object
        return <button className="ui button primary"></button>
    }
}

export default Button
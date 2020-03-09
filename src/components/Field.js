import React from 'react'
import LanguageContext from '../context/LanguageContext'

class Field extends React.Component {

    static contextType = LanguageContext; //Forms a link between our class and the context object, so we can reference it

    render(){

        const text = this.context === 'english' ? 'Name' : 'Navn'
        
        return (
            <div className="ui field">
                <label>{text}</label>
                <input />
            </div>
        )
    }
}

export default Field
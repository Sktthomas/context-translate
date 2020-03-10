//This component can connect between App and Button/Field

import React from 'react'

const Context =  React.createContext('english'); //english is the default value that is put into the pipe

export class LanguageStore extends React.Component { //It is not default export, so we have to name it using the {} when we import
    state = {language: 'english'};

    onLanguageChange = (language) => {
        this.setState({ language })
    }

    render() {
        return(
            <Context.Provider value={{...this.state, onLanguageChange: this.onLanguageChange}}> {/*//this adds all state and callbackfunctions} */}
             {this.props.children} {/** You can pass JSX as props to a component. This shows up as props.children */}
            </Context.Provider>
        )
    }
}

export default Context;

//We can from this file:
//import LanguageContext
//or
//import {LanguageStore}

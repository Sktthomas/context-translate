import React from 'react';
import UserCreate from './UserCreate'
import LanguageContext from '../context/LanguageContext'
import ColourContext from '../context/ColourContext'
import LanguageSelector from './LanguageSelector'

class App extends React.Component {

    state = { language: 'english'};

    onLanguageChange = language => {
        this.setState({language: language})
    }

    render() {
        return(
            <div className="ui container">
                <LanguageSelector onLanguageChange={this.onLanguageChange} /> {/*Passing a callback function down to that component, so we can receive the language clicked on from it */}
                <LanguageContext.Provider value={this.state.language}> {/* This is how we update our context object I think.*/}
                    <ColourContext.Provider value="primary">
                        <UserCreate />
                    </ColourContext.Provider>
                </LanguageContext.Provider>
            </div>
        )
    }
}

export default App;
import React from 'react';
import UserCreate from './UserCreate'
import LanguageContext from '../context/LanguageContext'

class App extends React.Component {

    state = { language: 'english'};

    onLanguageChange = language => {
        this.setState({language: language})
    }

    render() {
        return(
            <div className="ui container">
                <div>
                    Select a language:
                    <i className="flag uk" onClick={() => this.onLanguageChange('english')} />
                    <i className="flag dk" onClick={() => this.onLanguageChange('danish')} />
                </div>
                <LanguageContext.Provider value={this.state.language}>
                    <UserCreate />
                </LanguageContext.Provider>
            </div>
        )
    }
}

export default App;
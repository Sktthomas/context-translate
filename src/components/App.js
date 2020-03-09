import React from 'react';

class App extends React.Component {

    state = { language: 'english'};

    onLanguageChange = language => {
        this.setState({language: language})
    }

    render() {
        return(
            <div className="ui container">
                <div>
                    Select a languae:
                    <i className="flag uk" onClick={() => this.onLanguageChange('english')} />
                    <i className="flag dk" onClick={() => this.onLanguageChange('danish')} />
                </div>
                {this.state.language}
            </div>
        )
    }
}

export default App;
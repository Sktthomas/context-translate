import React from 'react';

class LanguageSelector extends React.Component {
    render() {
        return( 
        <div>
            Select a language:
            <i className="flag uk" onClick={() => this.props.onLanguageChange('english')} />
            <i className="flag dk" onClick={() => this.props.onLanguageChange('danish')} />
        </div>
        )
    }
}
export default LanguageSelector
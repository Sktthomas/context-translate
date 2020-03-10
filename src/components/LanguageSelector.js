import React from 'react';
import LanguageContext from '../context/LanguageContext'

class LanguageSelector extends React.Component {

    static contextType = LanguageContext;

    render() {
        return( 
        <div>
            Select a language:
            <i className="flag uk" onClick={() => this.context.onLanguageChange('english')} />
            <i className="flag dk" onClick={() => this.context.onLanguageChange('danish')} />
        </div>
        )
    }
}
export default LanguageSelector
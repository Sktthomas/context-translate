import React from 'react';
import UserCreate from './UserCreate'
import  {LanguageStore} from '../context/LanguageContext'
import ColourContext from '../context/ColourContext'
import LanguageSelector from './LanguageSelector'

class App extends React.Component {

    render() {
        return(
            <div className="ui container">
                <LanguageStore> {/** Gives us access to the store */}
                <LanguageSelector />
                    <ColourContext.Provider value="primary">
                        <UserCreate />
                    </ColourContext.Provider>
                </LanguageStore>
            </div>
        )
    }
}

export default App;
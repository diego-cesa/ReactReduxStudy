//This component handles the App template used of every page
import React, { PropTypes } from 'react';
import Header from './common/Header';
class App extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <Header />
                {this.props.children}
            </div>
        );
    }
}

//This makes children as a required prop for this component
App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;
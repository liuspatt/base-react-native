import React from 'react';
import Page from "../../pages/wellcome/wellcome";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        
    }

    next_page = () =>{
        this.props.navigation.navigate('WellcomeExplanation');
        console.log("asdfasdf");
    }
    render() {

        return (
            <Page
                next_page={this.next_page}
            >
            </Page>

        );
    }
}
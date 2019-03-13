import React from 'react';
import NavRouter from './url'
import {StoreProvider} from './hooks/main_store';

export default class App extends React.Component {
    render() {
        return (
            <StoreProvider>
                <NavRouter/>
            </StoreProvider>
        );
    }
}

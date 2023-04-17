
import React from 'react';

import Nav from '@/components/Nav';
import Main from '@/components/Main';
import classNames from 'classnames';
const App: React.FC = () => {

    return (
        <div className={classNames()}>
            <Nav></Nav>
            <Main></Main>
        </div>
    )
}
export default App;

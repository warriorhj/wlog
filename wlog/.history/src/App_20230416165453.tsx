
import React from 'react';

import Nav from '@/components/Nav';
import Main from '@/components/Main';
import classNames from 'classnames';
import s from './App.scss';
const App: React.FC = () => {

    return (
        <div className={classNames(s.AppBox,s.bg0)}>
            <Nav></Nav>
            <Main></Main>
        </div>
    )
}
export default App;

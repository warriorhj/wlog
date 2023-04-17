
import React from 'react';

import Nav from '@/components/Nav';
import Main from '@/components/Main';
import classNames from 'classnames';
import s from './index.scss';
const App: React.FC = () => {

    return (
        <div className={classNames(s.AppBox,s.b)}>
            <Nav></Nav>
            <Main></Main>
        </div>
    )
}
export default App;

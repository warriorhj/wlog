/*
 * @Descripttion: 
 * @version: 
 * @Author: Hao
 * @Date: 2023-04-16 13:59:16
 * @LastEditors: Hao
 * @LastEditTime: 2023-04-16 14:09:02
 * @FilePath: \wlog\src\components\Main\index.tsx
 */


import React from 'react';

import s from './index.scss';
import { Routes,Route } from 'react-router-dom';

const Main: React.FC = () => {
    return (
        <>
        <main className={s.main}>
            <div className={s.center}>

                <Routes>
                    <Route path="/" element={<Home />} />

                </Routes>

            </div>

        </main>
        </>
    )
}

export default Main;
/*
 * @Descripttion: 
 * @version: 
 * @Author: Hao
 * @Date: 2023-04-15 12:26:30
 * @LastEditors: Hao
 * @LastEditTime: 2023-04-15 21:36:18
 * @FilePath: \wlog\src\components\Nav\index.tsx
 */


import React from 'react';

import { useLinkList } from '../../hooks/useLinkList';

const Nav: React.FC = () => {

    const {navArr,secondArr,mobileNavArr} = useLinkList();


    
    return (
        <>
            <nav>

                <div>

                </div>

                
            </nav>

        </>
    )
}
export default Nav;
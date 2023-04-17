/*
 * @Descripttion: 
 * @version: 
 * @Author: Hao
 * @Date: 2023-04-15 12:26:30
 * @LastEditors: Hao
 * @LastEditTime: 2023-04-15 22:02:47
 * @FilePath: \wlog\src\components\Nav\index.tsx
 */


import React from 'react';
import {NavLink} from 'react-router-dom';
import { useLinkList } from './config';

const Nav: React.FC = () => {

    const {navArr,secondArr,mobileNavArr} = useLinkList();


    
    return (
        <>
        <nav className=''>

        </nav>
        
        
        
        </>

        
    )
}
export default Nav;
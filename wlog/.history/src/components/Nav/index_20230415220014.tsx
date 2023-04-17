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
import {NavLink} from 'react-router-dom';
import { useLinkList } from './config';

const Nav: React.FC = () => {

    const {navArr,secondArr,mobileNavArr} = useLinkList();


    
    return (
        <
        
            <div>hello word</div>
            <nav>
        
                <div>
                {
                    navArr.map((item,index) => (
                        <NavLink

                        to={item.to}
                        key={index}
                        >
                            {item.name}
                        </NavLink>

                    ))
                }
                </div>

                
                

                
            </nav>

        
    )
}
export default Nav;
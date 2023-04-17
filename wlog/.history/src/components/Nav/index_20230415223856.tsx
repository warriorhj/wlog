/*
 * @Descripttion: 
 * @version: 
 * @Author: Hao
 * @Date: 2023-04-15 12:26:30
 * @LastEditors: Hao
 * @LastEditTime: 2023-04-15 22:33:07
 * @FilePath: \wlog\src\components\Nav\index.tsx
 */


import React from 'react';
import {NavLink} from 'react-router-dom';
import { useLinkList } from './config';
import classNames from 'classnames';
import s from './index.scss';

const Nav: React.FC = () => {

    const {navArr,secondArr,mobileNavArr} = useLinkList();


    
    return (
        <>
        <nav className={classNames(s.nav)}>
            <div>
            </div></div></div></div></div></div></div></div></div></div></div>

            {
                navArr.map((item,index)=>(
                    <NavLink 
                    key={index} 
                    to={item.to} 
                    className={({isActive})=>(isActive?s.navActive:s.navBtn)} >
                        {item.name}
                    </NavLink>
                ))
                
            }

        </nav>
        
        
        
        </>

        
    )
}
export default Nav;
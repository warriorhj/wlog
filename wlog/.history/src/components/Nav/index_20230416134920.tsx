/*
 * @Descripttion: 
 * @version: 
 * @Author: Hao
 * @Date: 2023-04-15 12:26:30
 * @LastEditors: Hao
 * @LastEditTime: 2023-04-16 13:49:08
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
            <div className={s.navContent}>


                

                
                {
                    navArr.map((item,index)=>(
                        <NavLink 
                        className={({isActive})=>(isActive?s.navActive:s.navBtn)}
                        to={item.to} 
                        key={index} 
                        >
                            {item.name}
                        </NavLink>
                    ))
                    
                }
            </div>
        </nav>
        
        
        
        </>

        
    )
}
export default Nav;
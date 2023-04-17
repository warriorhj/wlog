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
import classNames from 'classnames';
import s from './index.scss';

const Nav: React.FC = () => {

    const {navArr,secondArr,mobileNavArr} = useLinkList();


    
    return (
        <>
        <nav className={classNames(s.nav)}>

            {
                navArr.map((item,index)=>(
                    <NavLink 
                    key={index} 
                    to={item.path} activeClassName={s.active} exact={true}>{item.name}
                    </NavLink>
                ))
                )}
            }

        </nav>
        
        
        
        </>

        
    )
}
export default Nav;
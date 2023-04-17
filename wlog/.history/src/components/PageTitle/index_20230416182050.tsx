/*
 * @Descripttion: 
 * @version: 
 * @Author: Hao
 * @Date: 2023-04-16 15:49:54
 * @LastEditors: Hao
 * @LastEditTime: 2023-04-16 16:05:08
 * @FilePath: \wlog\src\components\PageTitle\index.tsx
 */
/*
 * @Descripttion: 
 * @version: 
 * @Author: Hao
 * @Date: 2023-04-16 15:49:54
 * @LastEditors: Hao
 * @LastEditTime: 2023-04-16 15:59:11
 * @FilePath: \wlog\src\components\PageTitle\index.tsx
 */

import classNames from 'classnames';
import React from 'react';
import s from './index.scss';
import { useMount } from 'ahooks';
import Typed fr
interface Props{
    title?:string;
    desc?:string;
    className?:string;
    children?:React.ReactNode;
}

const PageTitle: React.FC<Props> = ({title,desc,className,children}) => {

    useMount(() => {
        console.log(title,desc,className,children);
        
    })

    return (
        <div className={classNames(s.box,className)}>
            <div className={s.title}>{title}</div>
            {desc && <div className={s.desc}>{desc}</div>}
            {children}
        </div>
    )
        
}

export default PageTitle;

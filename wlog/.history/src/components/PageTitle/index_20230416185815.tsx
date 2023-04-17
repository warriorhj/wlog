/*
 * @Descripttion: 
 * @version: 
 * @Author: Hao
 * @Date: 2023-04-16 15:49:54
 * @LastEditors: Hao
 * @LastEditTime: 2023-04-16 18:57:21
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
import React,{useRef} from 'react';
import s from './index.scss';
import { useMount } from 'ahooks';
import Typed from 'typed.js';

interface Props{
    title?:string;
    desc?:string;
    className?:string;
    children?:React.ReactNode;
}

const PageTitle: React.FC<Props> = ({title,desc,className,children}) => {

    const el = useRef(null);

    useMount(() => {
        const typed
        Promise.resolve().then(() => {
            // @ts-ignore
            setTimeout(() => {
                // @ts-ignore
                const typed = new Typed(el.current, {
                    strings: [],
                    typeSpeed: 100,
                        });
            }, 1000);
        })

        
        return () => {
            typed.destroy();
        }
    });

    return (
        <div className={classNames(s.box,className)}>
            <div className={s.title}>{title}</div>
            <span className={s.desc} ref={el}></span>
            {/* {<div className={s.desc} ref={el}></div>} */}
            {children}
        </div>
    )
        
}

export default PageTitle;

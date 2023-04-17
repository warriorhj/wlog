/*
 * @Descripttion: 
 * @version: 
 * @Author: Hao
 * @Date: 2023-04-16 17:09:39
 * @LastEditors: Hao
 * @LastEditTime: 2023-04-16 21:16:16
 * @FilePath: \wlog\src\components\Card\index.tsx
 */

import classNames from 'classnames';
import React,{MouseEventHandler} from 'react';
import { Skeleton } from 'antd';
import s from './index.scss';


interface Props{
    className?:string;
    loading?:boolean;
    isStatic?:boolean;
    onClick?:MouseEventHandler<HTMLDivElement>;
    children?:React.ReactNode;
}


const Card: React.FC<Props> = ({children,className,loading,isStatic,onClick}) => {
    return (
        <div
        className={classNames(
            s.card,
            className,
            {[s.center]:loading},
            {[s.active]:!isStatic}
        )}
        onClick={onClick}
        >
            {loading?<Skeleton paragraph />:children}
        </div>
    )
}

export default Card;
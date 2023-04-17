/*
 * @Descripttion: 
 * @version: 
 * @Author: Hao
 * @Date: 2023-04-16 15:49:54
 * @LastEditors: Hao
 * @LastEditTime: 2023-04-16 15:51:02
 * @FilePath: \wlog\src\components\PageTitle\index.tsx
 */

import classNames from 'classnames';
import React from 'react';

interface Props{
    title?:string;
    desc?:string;
    className?:string;
    children?:React.ReactNode;
}

const PageTitle: React.FC<Props> = ({title,desc,className,children}) => {

    return (
        <div className=''>

        </div>
    )
        
}

export default PageTitle;

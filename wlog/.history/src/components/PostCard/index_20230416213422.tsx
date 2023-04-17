/*
 * @Descripttion: 
 * @version: 
 * @Author: Hao
 * @Date: 2023-04-16 17:08:00
 * @LastEditors: Hao
 * @LastEditTime: 2023-04-16 21:34:22
 * @FilePath: \wlog\src\components\PostCard\index.tsx
 */

import React from 'react';


import s from './index.scss'


interface Props{
    title?:string;
    content?:string;
    date?:string;
    tags?:string[];
    loading?:boolean;
    onClick?:React.MouseEventHandler<HTMLDivElement>;
}


const PostCard: React.FC<Props> = ({title,content,date,tags,loading,onClick}) => {
    return (
        <Card
        className={s.card}
        isStatic={true}
        onClick={onClick}
        >
        
        </Card>
    )
}

export default PostCard;
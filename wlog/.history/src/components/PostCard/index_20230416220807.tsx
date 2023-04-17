/*
 * @Descripttion: 
 * @version: 
 * @Author: Hao
 * @Date: 2023-04-16 17:08:00
 * @LastEditors: Hao
 * @LastEditTime: 2023-04-16 22:07:59
 * @FilePath: \wlog\src\components\PostCard\index.tsx
 */
/*
 * @Descripttion: 
 * @version: 
 * @Author: Hao
 * @Date: 2023-04-16 17:08:00
 * @LastEditors: Hao
 * @LastEditTime: 2023-04-16 21:42:53
 * @FilePath: \wlog\src\components\PostCard\index.tsx
 */

import React from 'react';
import dayjs from 'dayjs';
import Card from '../Card';

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
            <div className={s.title}>{title}</div>
            <div className={s.content}>{content}</div>
            <div className={s.info}>
                <span className={s.date}>{dayjs(date!).format("YYYY-MM-DD")}</span>
                <div className={s.tags}>
                    {
                        tags?.map((tag)=>{
                            return (
                                <span className={s.tag} key=>{tag}</span>
                            )
                        })
                    }
                </div>
            </div>
            
        </Card>
    )
}

export default PostCard;
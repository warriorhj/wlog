/*
 * @Descripttion: 
 * @version: 
 * @Author: Hao
 * @Date: 2023-04-16 17:08:00
 * @LastEditors: Hao
 * @LastEditTime: 2023-04-16 17:08:06
 * @FilePath: \wlog\src\components\PostCard\index.tsx
 */

import React from 'react';

interface Props{
    title?:string;
    content?:string;
    


const PostCard: React.FC<Props> = ({title,content,date,tags,loading,onClick}) => {
    return (
        <Card
        className={className}
        loading={loading}
        isStatic={isStatic}
        onClick={onClick}
        >
            <div className={s.title}>{post.title}</div>
            <div className={s.content}>{post.content}</div>
        </Card>
    )
}

export default PostCard;
/*
 * @Descripttion: 
 * @version: 
 * @Author: Hao
 * @Date: 2023-04-16 22:23:38
 * @LastEditors: Hao
 * @LastEditTime: 2023-04-16 22:40:33
 * @FilePath: \wlog\src\components\Aside\BlogCard\index.tsx
 */

import React from 'react';
import Card from '@/components/Card';

import s from './index.scss';
import {useTime} from '@/utils/hooks/useTime';
const BlogCard: React.FC = () => {

    const {timetext} = useTime(); 

    return (
        <Card className={s.card}>
            <p className={s.text}>
                {timetext}，<br/>
                我是<span className={s.color}>惘闻</span><br/>
                欢迎来到<br/>
                我的<span className={s.color}>Wlog</span>
                
            </p>
            <img src></img>
        </Card>
    )
}


export default BlogCard;
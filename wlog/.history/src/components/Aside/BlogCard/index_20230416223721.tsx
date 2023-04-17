/*
 * @Descripttion: 
 * @version: 
 * @Author: Hao
 * @Date: 2023-04-16 22:23:38
 * @LastEditors: Hao
 * @LastEditTime: 2023-04-16 22:36:54
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
            <p>
                {timetext}，<br/>
                
                


            </p>
        </Card>
    )
}


export default BlogCard;
/*
 * @Descripttion: 
 * @version: 
 * @Author: Hao
 * @Date: 2023-04-16 14:39:58
 * @LastEditors: Hao
 * @LastEditTime: 2023-04-16 14:47:25
 * @FilePath: \wlog\src\components\pages\Home\Section\index.tsx
 */

import React,{useState} from "react";
import s from './index.scss'
import {getFakeListData} from './config';


const Section: React.FC = () => {
    

    const [list, setList] = useState(getFakeListData())

    return (
        <section className={s.section}>
            
        </section>
    )

}

export default Section;

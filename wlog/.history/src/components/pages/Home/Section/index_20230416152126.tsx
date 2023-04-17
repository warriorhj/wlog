/*
 * @Descripttion: 
 * @version: 
 * @Author: Hao
 * @Date: 2023-04-16 14:39:58
 * @LastEditors: Hao
 * @LastEditTime: 2023-04-16 15:19:53
 * @FilePath: \wlog\src\components\pages\Home\Section\index.tsx
 */

import React,{useState} from "react";
import s from './index.scss'
import {getFakeListData} from './config';


const Section: React.FC = () => {
    

    const [data, setData] = useState(getFakeListData())
    
    return (
        <section className={s.section}>
            {
                data?data.data.map((item,index)=>{
                    
            }
            
        </section>
    )

}

export default Section;

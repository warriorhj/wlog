/*
 * @Descripttion: 
 * @version: 
 * @Author: Hao
 * @Date: 2023-04-16 14:15:02
 * @LastEditors: Hao
 * @LastEditTime: 2023-04-16 16:01:11
 * @FilePath: \wlog\src\pages\Home\index.tsx
 */

import React from "react";

import Section from './Section'
import PageTitle from '@/components/PageTitle'
import s from './index.scss'
import { siteTitle } from "@/utils/constants";

const Home: React.FC = () => {
    return (
        <>
            <PageTitle title={site}></PageTitle>
            <div className={s.body}>
                <Section></Section>
             
            </div>
        </>
        
    )
}


export default Home;

/*
 * @Descripttion: 
 * @version: 
 * @Author: Hao
 * @Date: 2023-04-16 14:15:02
 * @LastEditors: Hao
 * @LastEditTime: 2023-04-16 22:14:46
 * @FilePath: \wlog\src\pages\Home\index.tsx
 */

import React from "react";
import { useMount,useSafeState } from "ahooks";
import Section from './Section'
import PageTitle from '@/components/PageTitle'
import s from './index.scss'
import { siteTitle } from "@/utils/constants";
import Aside from "@/components/Aside";


const getPoem = require('jinrishici');


const Home: React.FC = () => {

    const [poem,setPoem] = useSafeState('')

    useMount(() => {
        getPoem.load((
            res:{
                data:{
                    content: string;
                }
            }
        )=>{
            setPoem(res.data.content)
        });        
    })

    return (
        <>
            <PageTitle title={siteTitle} desc={poem} className={s.homeTitle}></PageTitle>
            <div className={s.body}>
                <Section></Section>
                <Aside></Aside>
            </div>
        </>
        
    )
}


export default Home;
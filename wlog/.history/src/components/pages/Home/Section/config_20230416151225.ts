/*
 * @Descripttion: 
 * @version: 
 * @Author: Hao
 * @Date: 2023-04-16 14:54:23
 * @LastEditors: Hao
 * @LastEditTime: 2023-04-16 15:11:37
 * @FilePath: \wlog\src\components\pages\Home\Section\config.ts
 */

import {faker} from '@faker-js/faker';



export const useLinkList = () => {

    const data = [];

    for(let i=0;i<10;i++){
        data.push({
            id: faker.datatype.uuid(),
            class:faker.datatype.string(),
            content:faker.lorem.paragraph(),
            title:faker.lorem.sentence(),
            url:faker.internet.url(),
            tags:[faker.lorem.words()],
            openid:faker.datatype.string(),
            data:faker.datatype.datetime(),
        })
    }

    

    
}

export const useLinkList = () => {
    const navArr = [
        {"name":"图库",to:"/gallery"},
        {"name":"关于",to:"/about"},
        {"name":"说说",to:"/say"},
        {"name":"留言",to:"/msg"},
        {"name":"友链",to:"/link"},
        {"name":"作品",to:"/show"},
        {"name":"建站",to:"/log"},

    ];
    const secondArr = [
        {name:"找文章",to:"/article"},
    ];
    const mobileArr = [
        
    ];

    return {
        navArr,
        secondArr,
        mobileArr,
    };  
    }

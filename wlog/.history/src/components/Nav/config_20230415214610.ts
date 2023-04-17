
export const useLinkList = () => {
    const navArr = [
        {"name":"图库",to:"/gallery"},
        {"name":"关于",to:"/about"},
        {"name":"说说",to:"/say"},
        {"name":"留言",to:"/msg"},
        {"name":"友链",to:"/link"},
        

    ];
    const secondArr = [
    ];
    const mobileArr = [
        
    ];

    return {
        navArr,
        secondArr,
        mobileArr,
    };  
    }

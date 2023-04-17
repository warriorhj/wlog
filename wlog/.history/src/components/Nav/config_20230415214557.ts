
export const useLinkList = () => {
    const navArr = [
        {"name":"图库",to:"/gallery"},
        {"name":"关于",to:"/about"},
        {"name":"说说",to:"/say"},
        {"name":"留言",to:"/message"},

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

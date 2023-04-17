
export const useTime = () => {
    const date = new Date().getHours();

    const timetext = date < 12 ?
        'Good Morning' :date < 17 ?
        'Good Afternoon' : 'Good Evening';

    return {timetext};
}
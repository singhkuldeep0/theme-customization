import useMediaQuery from "@/hooks/MediaQuery"

const Theme = () => {
    const colors = ["#1D9BF0", "#FFD400", "#F91880", "#7856FF", "#FF7A00", "#00BA7C"]
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

    const background = [
        {
            secondary: '#ffffff',
            primary: '#d0d0d0',
            textprimary: '#4a4a4a',
            textsecondary: '#000000',
        },
        {
            secondary: '#2f2f2f',
            primary: '#7b7b7b',
            textprimary: '#b2b2b2',
            textsecondary: '#e9e9e9',
        },
        {
            secondary: '#000000',
            primary: '#636363',
            textprimary: '#cecece',
            textsecondary: '#ffffff',
        }
    ]

    const fontSize = [
        // at 0%
        {
            xs: isAboveMediumScreens ? '8px' : '6px',
            sm: isAboveMediumScreens ? '10px' : '8px',
            base: isAboveMediumScreens ? '12px' : '10px',
            lg: isAboveMediumScreens ? '14px' : '12px',
            xl: isAboveMediumScreens ? '16px' : '14px',
            xxl: isAboveMediumScreens ? '18px' : '16px',
            xxxl: isAboveMediumScreens ? '22px' : '18px',
            xxxxl: isAboveMediumScreens ? '28px' : '20px',
            xxxxxl: isAboveMediumScreens ? '36px' : '22px',
            xxxxxxl: isAboveMediumScreens ? '48px' : '26px',
        },
        // at 25%
        {
            xs: isAboveMediumScreens ? '10px' : '8px',
            sm: isAboveMediumScreens ? '12px' : '10px',
            base: isAboveMediumScreens ? '14px' : '12px',
            lg: isAboveMediumScreens ? '16px' : '14px',
            xl: isAboveMediumScreens ? '18px' : '16px',
            xxl: isAboveMediumScreens ? '20px' : '18px',
            xxxl: isAboveMediumScreens ? '26px' : '20px',
            xxxxl: isAboveMediumScreens ? '32px' : '22px',
            xxxxxl: isAboveMediumScreens ? '42px' : '26px',
            xxxxxxl: isAboveMediumScreens ? '48px' : '30px',
        },
        // at 50%
        {
            xs: isAboveMediumScreens ? '12px' : '10px',
            sm: isAboveMediumScreens ? '14px' : '12px',
            base: isAboveMediumScreens ? '16px' : '14px',
            lg: isAboveMediumScreens ? '18px' : '16px',
            xl: isAboveMediumScreens ? '20px' : '18px',
            xxl: isAboveMediumScreens ? '24px' : '20px',
            xxxl: isAboveMediumScreens ? '30px' : '24px',
            xxxxl: isAboveMediumScreens ? '36px' : '28px',
            xxxxxl: isAboveMediumScreens ? '48px' : '32px',
            xxxxxxl: isAboveMediumScreens ? '64px' : '36px',
        },
        // at 75%
        {
            xs: isAboveMediumScreens ? '14px' : '12px',
            sm: isAboveMediumScreens ? '16px' : '14px',
            base: isAboveMediumScreens ? '18px' : '16px',
            lg: isAboveMediumScreens ? '20px' : '18px',
            xl: isAboveMediumScreens ? '24px' : '20px',
            xxl: isAboveMediumScreens ? '28px' : '22px',
            xxxl: isAboveMediumScreens ? '36px' : '26px',
            xxxxl: isAboveMediumScreens ? '42px' : '30px',
            xxxxxl: isAboveMediumScreens ? '48px' : '34px',
            xxxxxxl: isAboveMediumScreens ? '72px' : '38px'
        },
        // at 100%
        {
            xs: isAboveMediumScreens ? '16px' : '14px',
            sm: isAboveMediumScreens ? '18px' : '16px',
            base: isAboveMediumScreens ? '20px' : '18px',
            lg: isAboveMediumScreens ? '24px' : '20px',
            xl: isAboveMediumScreens ? '28px' : '22px',
            xxl: isAboveMediumScreens ? '36px' : '24px',
            xxxl: isAboveMediumScreens ? '42px' : '28px',
            xxxxl: isAboveMediumScreens ? '48px' : '34px',
            xxxxxl: isAboveMediumScreens ? '56px' : '38px',
            xxxxxxl: isAboveMediumScreens ? '84px' : '42px',
        }
    ]

    return {
        colors , background , fontSize
    }
}

export default Theme




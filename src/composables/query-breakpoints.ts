export const breakPointsEnum = {
    xl: 1600,
    lg: 1199,
    md: 991,
    sm: 767,
    xs: 575,
}

export const useQueryBreakpoints = () => {
    const breakpoints = reactive(useBreakpoints(breakPointsEnum))
    const isMobile = breakpoints.smaller('sm')
    const isPad = breakpoints.between('sm', 'md')
    const isDesktop = breakpoints.greater('md')

    return {
        breakpoints,
        isMobile,
        isPad,
        isDesktop,
    }
}

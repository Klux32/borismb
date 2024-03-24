export const Container = ({children, style}) => {
    return(
        <div className={`container py-5 ${style}`}>
            {children}
        </div>
    )
}


export const ContainerFluid = ({children, style, id}) => {
    return(
        <div id={id} className={`container-fluid ${style}`}>
            {children}
        </div>
    )
}

export const Heading = ({children, style}) => {
    return(
        <h2 className={`py-5 ${style}`}>
            {children}
        </h2>
    )
}
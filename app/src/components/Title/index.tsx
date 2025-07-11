interface TitleProps {
    label: string
}

function Title({label}:TitleProps){
    return (
        <h1 className="text-[#E8E8E8]">{label}</h1>
    )
}

export {Title}
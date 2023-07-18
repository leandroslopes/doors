import style from "../styles/Card.module.css"

interface CardProps {
    bgColor?: string
    children?: any
}

export default function Card(props: CardProps) {

    return (
        <div 
            className={style.card}
            style={{
                backgroundColor: props.bgColor ?? "#FFF"
            }}
        >
            {props.children}            
        </div>
    )
}
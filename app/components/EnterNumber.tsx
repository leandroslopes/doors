import style from "../styles/EnterNumber.module.css"

interface EnterNumberProps {

    text: string
    value: number
    onChange: (newValue: number) => void
}

export default function EnterNumber(props: EnterNumberProps) {

    const dec = () => props.onChange(props.value - 1)
    const inc = () => props.onChange(props.value + 1)

    return (
        <div className={style.enterNumber}>
            <span className={style.text}>{props.text}</span>
            <span className={style.value}>{props.value}</span>
            <div className={style.buttons}>
                <button className={style.button} onClick={dec}>-</button>
                <button className={style.button} onClick={inc}>+</button>
            </div>
        </div>
    )
}
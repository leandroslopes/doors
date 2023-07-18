import style from '../styles/Door.module.css'
import DoorModel from '../model/door'
import Gift from '../components/Gift'

interface DoorProps {
    value: DoorModel
    onChange: (newDoor: DoorModel) => void
}

export default function Door(props: DoorProps) {

    const door = props.value

    const selected = door.selected && !door.open ? style.selected : ''

    const alternarSelecao = e => props.onChange(door.alternarSelecao())

    const toOpen = e => {

        e.stopPropagation()

        props.onChange(door.toOpen())
    }

    function renderizarPorta() {

        return (
            <div className={style.door}>
                <div className={style.number}>{door.number}</div>
                <div className={style.macaneta} onClick={toOpen}>
                </div>
            </div>
        )
    }

    return (
        <div className={style.area} onClick={alternarSelecao}>
            <div className={`${style.frame} ${selected}`}>
                { door.closed ? renderizarPorta() : 
                    door.hasGift ? <Gift /> : false }
            </div>
            <div className={style.chao}></div>
        </div>
    )
}
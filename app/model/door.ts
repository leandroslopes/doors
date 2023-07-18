export default class DoorModel {

    // PRIVATE ATTRIBUTES
    #number: number
    #hasGift: boolean
    #selected: boolean
    #open: boolean

    constructor(number: number, hasGift = false, selected = false, open = false) {

        this.#number = number
        this.#hasGift = hasGift
        this.#selected = selected
        this.#open = open
    }

    get number() {
        return this.#number
    }
    
    get hasGift() {
        return this.#hasGift
    }

    get selected() {
        return this.#selected
    }

    get open() {
        return this.#open
    }

    get closed() {
        return !this.#open
    }

    desselecionar() {
        const selected = false

        // Retorna uma nova porta, não alterando a porta anterior
        return new DoorModel(this.number, this.hasGift, selected, this.open)
    }

    alternarSelecao() {
        const selected = !this.#selected

        return new DoorModel(this.number, this.hasGift, selected, this.open)
    }

    toOpen() {
        const open = true

        return new DoorModel(this.number, this.hasGift, this.selected, open)
    }
}
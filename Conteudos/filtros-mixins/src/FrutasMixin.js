export default {
    data() {
        return {
            fruta: '',
            frutas: ['banana', 'maca']
        }
    },
    methods: {
        add() {
            this.frutas.push(this.fruta)
            this.fruta = ''
        }
    }
}
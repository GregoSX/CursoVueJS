export default {
    computed: {
		fraseComVirgula() {
			return this.frase.replace(/ /g, ',')
		},
		contarLetras() {
			return this.frase.split(' ').map(p => `${p} (${p.length})`).join(' ')
		}
	}
}
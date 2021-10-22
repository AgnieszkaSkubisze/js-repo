const btn = document.querySelector('button')
const complements = ['madra','lojalna','pracowita','zaradna','przekojunąca','zabawna','racjonalna', 'ogarnieta','oczytana','przewidujaca','troskliwa']
const div = document.querySelector('div')

const prefixs = ['Jestem pewien ze ', 'Słyszalem ze ', 'Wszyscy mowia ze ', 'Załoze sie ze ']

const complementGenerator = () => {
    const indexOfComplement = Math.floor(Math.random() * complements.length)
    const indexOfPrefix = Math.floor(Math.random() * prefixs.length)
    div.textContent = ` ${prefixs[indexOfPrefix]} Agnieszka jest  :  ${complements[indexOfComplement]}`

}



btn.addEventListener('click', complementGenerator)
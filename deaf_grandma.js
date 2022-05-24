function deafGrandma() {
    let goodByeCount = 0
    

    grandma(prompt('HEY KID!'))
    function grandma(firstPrompt) {
        let heyKid = firstPrompt
        if (heyKid === '') {
            grandma(prompt('WHAT?!'))
        } else if (heyKid === 'GOODBYE!') {
            if (goodByeCount === 1) {
                return
            } else {
                goodByeCount += 1
                grandma(prompt('LEAVING SO SOON?'))
            }
    
        } else if (heyKid.split('').map(elem => elem.replace(/[^a-zA-Z]/, '')).join('').split('').every(elem => elem.match(/[A-Z]/))) {
            grandma(prompt('NO,NOT SINCE 1946!'))
        } else {
            grandma(prompt('SPEAK UP, KID!'))
        }
    }
   return alert('LATER, SKATER!')
}



console.log(deafGrandma())
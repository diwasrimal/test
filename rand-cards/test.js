let lengthList = [13, 16]

function randMod10() {
    return Math.floor((Math.random() * 10) % 10)
}

const len = lengthList[randMod10() % 2]

function randCard(len) {
    let card = []
    for (let i = 0; i < len; i++) {
        card.push(randMod10())
    }
    return card
}

function generate(n) {
    
    let cardList = []

    while (cardList.length != n) {
        
        let cardFound = false
        let card
    
        while (!cardFound) {

            card = randCard(len)
            card[0] = 4
            card.reverse()

            let sum = 0 
            for (let i = 1; i <= len; i++) {

                // for odd placed digits (starting from end)
                if (i % 2 != 0)
                    sum += card[i-1]
                
                // for even placed digits
                else {
                    let num = card[i-1]
                    num *= 2
                    if (num >= 10)
                        num = Math.floor((num / 10)) + (num % 10)       // 18 will be 1 + 8
                    sum += num
                }
            }

            if (sum % 10 == 0) {
                cardFound = true
                cardList.push(card.reverse())  
            }
        }
    }

    let cardStrings = []
    for (let i = 0; i < cardList.length; i++) {
        let visaCard = cardList[i]
        let cardString = ''
        for (let j = 0; j < visaCard.length; j++) {
            cardString += visaCard[j]
        }
        cardStrings.push(cardString)
    }
    
    for (let i = 0; i < cardStrings.length; i++) {
        document.write(cardStrings[i])
    }
    // return cardList 
}

// console.log(visaCards)
// function run(num) {

//     let visaCards = generate(20)
//     let cardStrings = []
//     for (let i = 0; i < visaCards.length; i++) {
//         let visaCard = visaCards[i]
//         let cardString = ''
//         for (let j = 0; j < visaCard.length; j++) {
//             cardString += visaCard[j]
//         }
//         cardStrings.push(cardString)
//     }
    
//     for (let i = 0; i < cardStrings.length; i++) {
//         document.write(cardStrings[i])
//     }
// }



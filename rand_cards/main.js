function randMod10() {
    return Math.floor((Math.random() * 10) % 10)
}

function randCard(type) {

    let cardInfos = {
        "visa": {"firstDigit": 4, "length": [13,16]},
        "mastercard": {"firstDigit": 5, "length": [13]}
        
    }
    
    // finding information based on card type
    let cardInfo = cardInfos[type]
    let len = cardInfo["length"]            // len is object
    len = len[randMod10() % len.length]     // len is number now
    let firstDigit = cardInfo["firstDigit"]

    let card = []
    for (let i = 0; i < len; i++) {
        card.push(randMod10())
    }
    card[0] = firstDigit
    return card
}

function generate(type) {

    while (true) {

        var card = randCard(type)
        card.reverse()      // for the sake of calculation

        let sum = 0 
        for (let i = 1; i <= card.length; i++) {

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
            card.reverse()      // set card back to normal
            break
        }
    }

        // converting the card array into string
        let cardString = ''
        for (let i = 0; i < card.length; i++) {
            cardString += card[i]
        }

        return cardString
}

console.log("hello owrold")
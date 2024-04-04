import { navUl, membershipContainer } from "./constanats.js";
import { users } from "./db.js";
import { valueSetter, tagCreator } from "./helpers.js";
// const memberShipType = {
//     simple: 'simple',
//     standart: 'standart',
//     premium: 'premium',
// }
class SimpleMemberShip {
    constructor(cost, month, type) {
        this.cost = cost;
        this.month = month;
        this.type = type;
    }
}

class StandartMemberShip {
    constructor(cost, month, type) {
        this.cost = cost;
        this.month = month;
        this.type = type;
    }
}

class PremiumMemberShip {   
    constructor(cost, month, type) {
        this.cost = cost;
        this.month = month;
        this.type = type;
    }

}


class memberFactory {
    static list = [
        new SimpleMemberShip(1000, 6, 'simple'),
        new StandartMemberShip(2000, 8, 'standart'),
        new PremiumMemberShip(6000, 5, 'premium')
    ]


    create(userName, type) {
        const memberShip = memberFactory.list[type]
        if (memberShip) {
            return {
                userName, ...memberShip
            }
        } else {
            throw new Error('Oooops sorry by')
        }
        
    }
}

const factory = new memberFactory()



const foo = (list) => {

    for(let i in list) {
        let memberShips = document.getElementById('memberShips')
        console.log(list[i])
        tagCreator('li', memberShips, ['h2', 'p', 'p'], list[i])
        
        
        
    }
}
foo(memberFactory.list)

navUl.addEventListener('click', (tag) => {
    if(tag.target.tagName === 'A') {
        if(tag.target.id === 'buy') {
            membershipContainer.style.transform = 'translate(0, 0)'
            document.querySelector('nav').style.filter = 'blur(2px)'
        }
    }
})


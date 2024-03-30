const memberShipType = {
    simple: 'simple',
    standart: 'simple',
    premium: 'premium'
}
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
    static list = {
        simple: new SimpleMemberShip(1000, 6, 'simple'),
        standart: new StandartMemberShip(2000, 8, 'standart'),
        premium: new PremiumMemberShip(6000, 5, 'premium')
    }

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

const users = [
    factory.create('John', 'simple'),
    factory.create('Davit', 'premium')
]

console.log(users)
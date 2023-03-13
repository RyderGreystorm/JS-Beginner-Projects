const person = {
    name: 'Leonardo',
    shirt: 'white'
}

person.phone = '+233552685072'

// console.log(person)



const introducer = (shirt, name) => {
    const person2 = {
        name: name,
        shirt: shirt,
        assets: 100000,
        liability: 50000,
        netWorth: function(){
            return this.assets - this.liability
        }
    }
    return intro = `Hi my name is ${person2.name} , my networth is ${person2.netWorth()} and the color of my shirt is ${person2.shirt}`
}
console.log(introducer('white', 'Leonardo'))
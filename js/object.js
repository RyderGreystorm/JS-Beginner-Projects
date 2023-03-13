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
    }
    return intro = `Hi my name is ${person2.name} and the color of my shirt is ${person2.shirt}`
}
console.log(introducer('black', 'Qazi'))
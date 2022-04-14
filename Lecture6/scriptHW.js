const obj = {
    name: 'Alex',
    age: 33,
    marks: [10, 9, 8, 10, 9],
    address: {
        country: 'UA',
        city: 'Dnipro'
    }
}

function getCopy(obj) {
    let objCopy = {};
    for (let key in obj) {
        const value = obj[key];
        if (typeof value === 'object' || value === null) {
            return objCopy = {
                ...objCopy,
                [key]: getCopy(value)
            }
        } else {
            objCopy[key] = value;
        }
    }
    return objCopy;
}

const kate = getCopy(obj);
kate.name = 'Kate';
kate.age = 21;
kate.address.phoneNumber = '+380985961418';
console.log(kate, 'Kate');
console.log(obj, 'obj');
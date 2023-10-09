const phones = [
    { name: 'Samsung', cemera: 12, storage: '32gb', price: 36000, color: 'silver' },
    { name: 'Walton', cemera: 10, storage: '32gb', price: 22000, color: 'silver' },
    { name: 'iphone', cemera: 10, storage: '32gb', price: 82000, color: 'silver' },
    { name: 'Xaomi', cemera: 10, storage: '32gb', price: 52000, color: 'silver' },
    { name: 'Oppo', cemera: 10, storage: '32gb', price: 20000, color: 'silver' },
];

function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);
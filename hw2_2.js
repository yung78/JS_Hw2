const goodsBase = [
    ,
    {
        id: 1,
        name: 'футболка красная',
        description: 'мужская, без принта, 100% хлопок',
        sizes: ['M', 'L', 'XL', 'XXL'],
        price: 1000,
        available: true,
    },
    {
        id: 2,
        name: 'кофта серая',
        description: 'мужская, на молнии, 50% хлопок/50% полиэстер',
        sizes: ['M', 'L', 'XL', 'XXL'],
        price: 1500,
        available: true,
    },
    {
        id: 3,
        name: 'ботинки синие',
        description: 'мужские, демисезонные, кожа',
        sizes: ['M', 'L', 'XL', 'XXL'],
        price: 2500,
        available: true,
    },
    {
        id: 4,
        name: 'шапка черная',
        description: 'мужская, флисовая',
        sizes: ['M', 'L', 'XL', 'XXL'],
        price: 700,
        available: true,
    },
    {
        id: 5,
        name: 'брюки черные',
        description: 'мужские, городской стиль',
        sizes: ['M', 'L', 'XL', 'XXL'],
        price: 2000,
        available: true,
    },
    {
        id: 6,
        name: 'пуховик черный',
        description: 'мужской, набивка - синтепон',
        sizes: ['M', 'L', 'XL', 'XXL'],
        price: 5000,
        available: true,
    },
    {
        id: 7,
        name: 'перчатки',
        description: 'Флисовые со вставками для использования тачскрина',
        sizes: ['M', 'L', 'XL', 'XXL'],
        price: 800,
        available: true,
    },
];

let basketBase = [
    ,
    {
        good: goodsBase[2],
        amount: 1,
    },
    {
        good: goodsBase[4],
        amount: 1,
    },
    {
        good: goodsBase[7],
        amount: 2,
    },
];


function addGoods(id, count) {
    addItem = {
        good: goodsBase[id],
        amount: count,
    }
    basketBase.push(addItem);
    return basketBase;
}


function delGoods(numInBasket) {
    if (numInBasket == basketBase.length-1) {
        basketBase.pop();
    }
    else {
        basketBase.splice(numInBasket, 1);
    }
    return basketBase;
}


function clearBasket() {
    basketBase.splice(1, basketBase.length-1);
    return basketBase;
}


function result() {
    let sumAmount = 0;
    let sumPrice = 0;
    for (let i=1; i < basketBase.length; i++) {
        sumAmount += basketBase[i].amount
        sumPrice += basketBase[i].amount * basketBase[i].good.price
    }
    let finalBasket = {
        totalAmount: sumAmount,
        totalSumm: sumPrice,
    };
    return finalBasket
}


console.log(clearBasket())
// console.log(addGoods(process.argv[2], process.argv[3]))
console.log(addGoods(6, 2))
console.log(addGoods(5, 1))
console.log(addGoods(1, 4))
console.log(delGoods(1))

console.log(result())








// console.log(goodsArr, goodsArr.length)
// console.log(basketArr, basketArr.length)
const totalBalance = document.querySelector('.total__balance'),
    totalMoneyIncome = document.querySelector('.total__money-income'),
    totalMoneyExpenses = document.querySelector('.total__money-expenses'),
    historyList = document.querySelector('.history__list'),
    form = document.getElementById('#form'),
    operationName = document.querySelector('.operation__name'),
    operationAmount = document.querySelector('.operation__amount');

let dbOperation = [
    {
        id: '1',
        description: 'Получил зарплату',
        amount: 30000,
    },
    {
        id: '1',
        description: 'Квартплата',
        amount: -10000,
    },
    {
        id: '1',
        description: 'Купил обувь',
        amount: -6000,
    },
    {
        id: '1',
        description: 'Заказ на фриланс',
        amount: 10000,
    },
    {
        id: '1',
        description: 'Купил книги',
        amount: -2500,
    },
];

const renderOperation = (operation) => {
    const className = operation.amount < 0 ?
         'history__item-minus' : 
         'history__item-plus';
    const listItem = document.createElement('li');

    listItem.classList.add('history__item');
    listItem.classList.add(className);
    listItem.innerHTML = `${operation.description}
        <span class="history__money">${operation.amount} ₽</span>
        <button class="history_delete">x</button>
    `;
    historyList.append(listItem);
};

const updateBalance = () => {
    const resultIncome = dbOperation
        .filter((item) => item.amount > 0)
        .reduce((result, item) => result + item.amount, 0);

    const resultExpenses = dbOperation
        .filter((item) => item.amount < 0)
        .reduce((result, item) => result + item.amount, 0);

    totalMoneyIncome.textContent = resultIncome;
    totalMoneyExpenses.textContent = resultExpenses;
};

const init = () => {
    historyList.textContent = '';
    dbOperation.forEach(renderOperation);
    updateBalance();
};

init();
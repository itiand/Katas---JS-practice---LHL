const calculateChange = function(total, cash) {
  //denomininations array of objects twenty dollar bills to pennies
  const billsAndCoins = [
    {name: 'twentyDollar', value: 2000 },
    {name: 'tenDollar', value: 1000 },
    {name: 'fiveDollar', value: 500 },
    {name: 'twoDollar', value: 200 },
    {name: 'oneDollar', value: 100 },
    {name: 'quarter', value: 25 },
    {name: 'dime', value: 10 },
    {name: 'nickel', value: 5 },
    {name: 'penny', value: 1 }
  ];

  let change = cash - total;
  console.log('change: ', change)
  const changeResult = {};

  // loop through array of denominations
  for(const coin of billsAndCoins) {
      if(change >= coin.value) {
        changeResult[coin.name] = Math.floor(change / coin.value); // the amount of bill/coin to give on the respective bill/coin
        change -= changeResult[coin.name] * coin.value; //then subtract the amount owed by the amount of bill/coin we will give them
      }
  }

  return changeResult;
}



console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

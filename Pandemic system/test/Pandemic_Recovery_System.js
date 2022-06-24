const Pandemic_Recovery_System = artifacts.require("Pandemic_Recovery_System");

contract('Pandemic_Recovery_System', (accounts) => {
  it('should put 10000 Coin in the first account', async () => {
    const Pandemic_Recovery_SystemInstance = await Pandemic_Recovery_System.deployed();
    const balance = await Pandemic_Recovery_SystemInstance.getBalance.call(accounts[0]);

    assert.equal(balance.valueOf(), 10000, "10000 wasn't in the first account");
  });
  it('should call a function that depends on a linked library', async () => {
    const Pandemic_Recovery_SystemInstance = await Pandemic_Recovery_System.deployed();
    const Pandemic_Recovery_SystemBalance = (await Pandemic_Recovery_SystemInstance.getBalance.call(accounts[0])).toNumber();
    const Pandemic_Recovery_SystemEthBalance = (await Pandemic_Recovery_SystemInstance.getBalanceInEth.call(accounts[0])).toNumber();

    assert.equal(Pandemic_Recovery_SystemEthBalance, 2 * Pandemic_Recovery_SystemBalance, 'Library function returned unexpected function, linkage may be broken');
  });
  it('should send coin correctly', async () => {
    const Pandemic_Recovery_SystemInstance = await Pandemic_Recovery_SystemCoin.deployed();

    // Setup 2 accounts.
    const accountOne = accounts[0];
    const accountTwo = accounts[1];

    // Get initial balances of first and second account.
    const accountOneStartingBalance = (await Pandemic_Recovery_SystemCoinInstance.getBalance.call(accountOne)).toNumber();
    const accountTwoStartingBalance = (await Pandemic_Recovery_SystemCoinInstance.getBalance.call(accountTwo)).toNumber();

    // Make transaction from first account to second.
    const amount = 10;
    await Pandemic_Recovery_SystemCoinInstance.sendCoin(accountTwo, amount, { from: accountOne });

    // Get balances of first and second account after the transactions.
    const accountOneEndingBalance = (await Pandemic_Recovery_SystemCoinInstance.getBalance.call(accountOne)).toNumber();
    const accountTwoEndingBalance = (await Pandemic_Recovery_SystemCoinInstance.getBalance.call(accountTwo)).toNumber();


    assert.equal(accountOneEndingBalance, accountOneStartingBalance - amount, "Amount wasn't correctly taken from the sender");
    assert.equal(accountTwoEndingBalance, accountTwoStartingBalance + amount, "Amount wasn't correctly sent to the receiver");
  });
});

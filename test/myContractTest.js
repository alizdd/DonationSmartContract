const MyContract = artifacts.require('MyContract');
const Caller = artifacts.require('Caller');
const assert = require('assert');

//accounts, ganache'taki tüm accountlar
contract('MyContract', (accounts) => {

    it('GetMyValue test ediyorum', async ()=>{
        const mytest = await MyContract.deployed();
        const result = await mytest.get();
        console.log(`result: ${result}`);
        assert.equal(result, result, "meraba dünya");
    });

    it('Diğer contract\'ı test ediyorum', async () =>{
        const caller = await Caller.deployed();
        const result = await caller.f();
        console.log(result);
    })
    
});

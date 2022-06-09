const Bagis = artifacts.require('Bagis');
const Caller = artifacts.require('Caller');
const assert = require('assert');

//accounts, ganache'taki tüm accountlar
contract('Bagis', (accounts) => {


    it('Bagis Contract Testidir', async ()=>{
        const bagisContract = await Bagis.deployed();
        const result = await bagisContract.get();
        console.log(`result: ${result}`);
        assert.equal(result, result, "meraba dünya");
    });


});

const Tickets = artifacts.require('Tickets');
const assert = require('assert');

//accounts, ganache'taki tüm accountlar
contract('Tickets', (accounts) => {
    const BUYER=accounts[1];
    const TICKET_ID=0;

    it('should allower a user to buy a ticket', async ()=>{
        const instance = await Tickets.deployed(); // ilgili contract'ın modifiye edilebilir ve işlem yapılabilir yeni bir instance'ını oluşturur.
        const originalTicket = await instance.tickets(
            TICKET_ID
        );
        //index parametresinin dışındaki obje parametresi, payable özelliğine göre eklenmektedir. Ödenecek tutar ve ödeyen adres tanımlanır
        await instance.buyTicket(TICKET_ID, 
            {
                from: BUYER, 
                value: originalTicket.price
            });        
        const updatedTicket = await instance.tickets(TICKET_ID);
        assert.equal(
            updatedTicket.owner,
            BUYER,
            'the buyer should now own this ticket'
        );
    });

});

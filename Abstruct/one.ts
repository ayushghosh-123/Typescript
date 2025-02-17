class Payment{
    constructor(protected amount:number, protected account: Number){}
    isPaymentValid(amount: number){
        return this.amount > 0;
    }
}

class Rupay extends Payment{
        

    }

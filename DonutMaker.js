
export default class DonutMaker {
    constructor(numDonuts, autoClickers, autoClickerCost,donutMultiply, donutMultiCost){
        this.numDonuts = numDonuts;
        this.autoClickers= autoClickers;
        this.autoClickerCost = autoClickerCost;
        this.donutMultiply = donutMultiply;
        this.donutMultiCost = donutMultiCost;
        
        
    }
    
addDonut(){
    this.numDonuts += Math.pow(1.2, this.donutMultiply);
   
    

    // if(this.numAutoClickers === 0){
    // this.numDonuts++;
    // } else {
    //     this.numDonuts = this.numAutoClickers;
    // }
}


addAutoClicker(){
    if(this.numDonuts >= 100){
        this.autoClickers++; 
        this.numDonuts -=100;
        this.autoClickerCost = Math.round(this.autoClickerCost * 1.1);
        
        
    }
}

activateAutoClickers(){
    if(this.autoClickers > 0){
        this.numDonuts += this.autoClickers * Math.pow(1.2, this.donutMultiply);
        
    }
}
addMultipler(){
    if(this.numDonuts >=25){
        this.donutMultiply++;
        this.numDonuts -=25;
        this.donutMultiCost = Math.round(this.donutMultiCost *2);
       
    }
}


}


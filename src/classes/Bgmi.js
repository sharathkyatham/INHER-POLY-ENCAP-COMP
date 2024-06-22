import Pubg from "./Pubg";

class Bgmi extends Pubg{

    constructor(){
        super();
        console.log("Bgmi constructor");
    }

    gunType =()=>{
        console.log("SMG Weapons");
    }

    requiredAmmo =()=>{
        console.log("It uses 9mm Ammo");
    }
}

export default Bgmi;
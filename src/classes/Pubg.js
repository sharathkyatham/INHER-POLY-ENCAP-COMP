class Pubg{

constructor(){
    console.log("Pubg constructor");
    this.nameOFGun = "GROZA";
    this.nameOFGun = "AKM";
    this.nameOFGun = "M762";
    this.nameOFGun = "M24";

    this.nameOFGun = "UZI";
    this.nameOFGun = "VSS";
    this.nameOFGun = "P90";
    this.nameOFGun = "VECTOR";
}

gunType =()=>{
    console.log("AR Weapons");
}

requiredAmmo =()=>{
    console.log("It uses 7.62mm Ammo");
}

attachableScopes =()=>{
    console.log("Scopes are Red dot,2x scope,4x scope,6x scope");
}

forRecoil =()=>{
    console.log("For better Performance it needs Grips and Compensator");
}

playingBehavior =()=>{
    console.log("Guns be with us, Let's Ruins the Areas.");
}
}

export default Pubg;
const introx  = document.getElementById("intro");
  const newWallet = document.getElementById("new");
  const exstWallet = document.getElementById("exst");
const log = document.getElementById("log");
const lognew = document.getElementById("lognew");
  const setpin = document.getElementById("setpin");
const sbox = document.getElementById("seedbox");
const nsbox = document.getElementById("newseedbox");
const a1 = document.getElementById("alert1");
const a2 = document.getElementById("alert2");
const a3 = document.getElementById("alert3");
const pkbox = document.getElementById("pkbox");


const ufPath = "";
let userFile = false;

const hideAll = () => {
  introx.style.display = "none";
  log.style.display = "none";
  lognew.style.display = "none";
  sbox.style.display = "none";
  nsbox.style.display = "none";
  a1.style.display = "none";
  a2.style.display = "none";
  a3.style.display = "none";
  pkbox.style.display = "none";
  console.log("#  All Elements hidden !");
}
const newSeed = () => {
  hideAll();
  nsbox.style.display = "grid";
  console.log("# NEW Seedphrase");
}
const exstSeed = () => {
  hideAll();
  sbox.style.display = "grid";
  console.log("# Existing Seedphrase");
}
const doNew = () => {
  hideAll();
  lognew.style.display = "grid";
  setpin.addEventListener("click",newSeed);
  console.log("# New Wallet !");
}
const doExisting = () => {
  hideAll();
  lognew.style.display = "grid";
  setpin.addEventListener("click",exstSeed);
  console.log("# Existing Wallet gets imported !");
}
const makeFirst = () => {
  introx.style.display = "grid";
  console.log("# Initialisation ... !")
  newWallet.addEventListener("click",doNew);
  exstWallet.addEventListener("click",doExisting);
}
const goLog = () => {
  log.style.display = "grid"; 
  console.log("# Logging In !")
}
/** Function CheckUserFile
  * Empty Call
***/
const checkUserFile = () => {
  return false;
}

/** FUNCTION Initialise the Extension
  * METHOD hideAll
  * METHOD checkUserFile
  * CONDITION userFile exists ? goLog : makeFirst
***/
const init = () => {
  hideAll();
  if(checkUserFile()) goLog();
  else makeFirst();
}
/** METOD Initialise the Extension
  * Empty Call
***/
init();


// CommonJS, every files is module (by default)
//modules - Encapsulated Code (only share minimum)

//import module
const names = require('./3-names.js')
const FN_MyName = require('./4-utils.js')
const Data = require('./5-alternatives.js')
require("./6-mind-grenade.js")

// MyName(names)

FN_MyName.MyName(names.mohamed)
FN_MyName.MyName(names.jamila)

//Show os Info
const os =require('os')
const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}

FN_MyName.showOS(currentOS)
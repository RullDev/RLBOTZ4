global.DeveloperMode = 'false' //true Or false
global.linkGC = ['https://chat.whatsapp.com/D2NUDa6vk4I6hrS176mErV']
global.Owner = {
  // use the phone number with the country code, for example Indonesia '62' America '1' etc
  '6287753812675': { // put your number here
    name: 'Owner Rull Bot/Creator KhrlMstfa',
    isDev: false, // if true this number will send if bot have bug and developer mode true
    isReport: false, // if true this number will send if user use command /report or /join
    isCreator: true // if true this number will send if user use command /owner or /creator
  },
  '6281390658325': { // put your number here
    isDev: true, // if true this number will send if bot have bug and developer mode true
    isReport: true, // if true this number will send if user use command /report or /join
    isCreator: false // if true this number will send if user use command /owner or /creator
  },
  '6282256115584': { // put your number here
    name: 'Dave',
    isDev: false, // if true this number will send if bot have bug and developer mode true
    isReport: true, // if true this number will send if user use command /report or /join
    isCreator: false // if true this number will send if user use command /owner or /creator
  },
  '6287753812675': {
    isReport: true // if true this number will send if user use command /report or /join
  },
  '13479805233': {} // ignore if you don't want anything, like name dll
}
global.mods = ['13479805233'] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  td: 'https://api-toxic-devil.herokuapp.com/api',
  fdci: 'https://api.fdci.se',
  skh: 'https://sekha.me',
  dzx: 'https://api.dhamzxploit.my.id',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://api.chipa.xyz',
  hardianto: 'http://hardianto.xyz',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://sekha.me': 'apirey',
  'https://api.chipa.xyz': 'pais',
  'http://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM
global.packname = 'Sticker Made With RullBot'
global.author = 'Rull Bot Is The Best'

global.multiplier = 39 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

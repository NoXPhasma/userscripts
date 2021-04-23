// ==UserScript==
// @name          Open Page in Steam Client
// @namespace     NoXPhasma
// @version       1.0
// @icon          https://store.steampowered.com/favicon.ico
// @description   Adds a "Client↗" Link in the Steam Header Menu, to open current page in the Steam Client.
// @match         https://store.steampowered.com/*
// @match         https://steamcommunity.com/*
// @author        NoXPhasma
// @grant         none
// ==/UserScript==

const el = document.querySelector('.supernav_container')
const link = document.createElement('a')
const client = 'steam://openurl/' + document.location

link.setAttribute('href', client)
link.setAttribute('title', 'Open Page in Steam Client')
link.className = 'menuitem'
link.text = 'Client↗'
el.appendChild(link)

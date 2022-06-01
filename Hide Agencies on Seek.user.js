// ==UserScript==
// @name         Hide Agencies on Seek
// @namespace    https://github.com/BoKu/Seek-BAdvertisers
// @version      0.1
// @description  Hides agency adverts on Seek
// @homepage     https://github.com/BoKu/Seek-BAdvertisers
// @supportURL   https://github.com/BoKu/Seek-BAdvertisers/pulls
// @author       BoKu
// @match        *://*.seek.com.au/*
// @match        *://*.seek.co.nz/*
// @resource     json https://raw.githubusercontent.com/BoKu/Seek-BAdvertisers/main/badvertisers.json
// @grant        GM_getResourceText
// @run-at       document-end
// @license 	 Creative Commons Attribution-ShareAlike 3.0 Unported License.
// ==/UserScript==
(function() {
    const badvertisers = GM_getResourceText("json");
    const strAdSection = "[data-search-sol-meta]";
    const strAdNameClass = ".l2mi890";
    const JobsArray = document.querySelectorAll(strAdSection);
    if(badvertisers)(
        JobsArray.forEach(Ad =>{
            const badvertiseName = Ad.querySelector(strAdNameClass).innerText;
            (badvertisers.includes(badvertiseName))?Ad.remove():false;
        })
    )
})();

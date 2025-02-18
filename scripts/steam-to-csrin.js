// ==UserScript==
// @name         Steam to CS.RIN.RU Button
// @namespace    https://github.com/DuckSleazzy
// @version      1.0
// @description  Add a button to redirect from Steam store page to CS.RIN.RU forum search
// @author       DuckSleazzy
// @match        https://store.steampowered.com/app/*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Extract the appId from the URL
    const url = window.location.href;
    const appIdMatch = url.match(/\/app\/(\d+)\//);
    if (!appIdMatch) return; // Exit if the appId is not found

    const appId = appIdMatch[1];

    // Create the button
    const button = document.createElement('button');
    button.textContent = 'Search on CS.RIN.RU';
    button.style.position = 'fixed';
    button.style.bottom = '20px';
    button.style.right = '20px';
    button.style.zIndex = 1000;
    button.style.padding = '10px 20px';
    button.style.backgroundColor = '#0078d4';
    button.style.color = '#ffffff';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';

    // Add an event listener to the button
    button.addEventListener('click', () => {
        const redirectUrl = `https://cs.rin.ru/forum/search.php?keywords=${appId}&fid%5B%5D=10&sr=topics&sf=firstpost`;
        window.location.href = redirectUrl;
    });

    // Append the button to the body
    document.body.appendChild(button);
})();
const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

const goThrough = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const url = 'https://en.wikipedia.org/wiki/List_of_airports${queryParam}A';

const main = async() => {
      browser = await puppeteer.launch({
        headless: true,
        defaultViewport: {
        height: 1020,
        width: 1080,
        },
    });
    
    // for(let i=0;i<=goThrough.length-1; i++){
        const data = await getData();
    
    // fs.writeFileSync("myData.json", JSON.stringify(items, null, 2));
};

const finalItem = [];

const getData = async(item) =>{
    const page = await browser.newPage();
    const queryParam = '_by_IATA_airport_code:_';
    await page.goto(`https://en.wikipedia.org/wiki/List_of_airports${queryParam}A`);
    const content = page.content;
    const $ = cheerio.load(page);
    const table = $('table.wikitable.sortable.jquery-tablesorter');
    coonsole.log($);
    const data1 = [];
    table.find('tbody tr').each((i, element) => {
        const $row = $(element);
        const data2 = {};
        data2.name = $row.find(`td`);
        data1.push(data2);
        console.log(data2);
    });
    console.log(data1);
    // const Datach = cheerio('tbody > tr > td',content);
    // console.log(content);

    // console.log(Datach);
            // const finalItem = [];

            // for (let i = 0; i < 5; i++) {
            //     const products = await page.evaluate(() => {
            //     const table = document.querySelectorAll('table.wikitable.sortable.jquery-tablesorter');
            //     // const states = [];
            //     // table.find('tbody tr').slice(2).each((i, element) => {
            //     //     // const state = {},
            //     //     // state.name = $row.find(`tbody.tr.td`);
            //     //     const $row = $(element);  //we are going to take that element and turn into jquery colleection
            //     //     const state = {};
            //     //     state.name = $row.find(`tbody tr td`);
            //     //     states.push(state);
            //     // });
                
            //     const tableItem = Array.from(table).map((table) => {
            //     // const IATA = table.querySelectorAll(`.wikitable > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(1)`);
            //     const IATA = table.querySelector('tbody tr td'); 
            //     // const IATA = $.find(`tbody.tr.td`);   
            //     const ICAO = table.querySelector(`tbody tr td:nth-child(2)`);
            //     const airportName = table.querySelector('tbody tr td a').innerHTML;
            //     const LocationServed = table.querySelector('tbody tr td a');
            //     const time = table.querySelector('.wikitable > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(5)');
            //     const DST = table.querySelector('.wikitable > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(6)');

            //     const location = LocationServed.textContent.split(", ");
            //     const allLocation = location.map((location) => {
            //         location
            //     })

            //     return {
            //         "iata":IATA?.textContent,
            //         "icao":ICAO?.textContent,
            //         "airport name": airportName,
            //         "locations": location,
            //         "UTC": time?.textContent,
            //         "DST":DST?.textContent
            //     }
            //     });
            //     return tableItem;
            //     });
            //     finalItem.push(...products);
            // }
            // console.log( finalItem);
    // const goto = await page.goto(`https://en.wikipedia.org/wiki/List_of_airports${queryParam}${item}`);
    // console.log("goto" + goto);
    // const finalItem = [];
                // const table = await page.waitForSelector('table.wikitable.sortable.jquery-tablesorter')
                // .then((table) => {
                //     page.evaluate(() => {
                //         const itemArray = [];
                //         //const row = document.querySelectorAll('tbody tr');
                //         const row = document.querySelectorAll('tbody tr th');
                //         // const IATA = {};
                //         // IATA.name = row.querySelectorAll(`th a`);
                //         // .each((i, element) => {
                //         //     const row = document.querySelectorAll(element);
                //         // });
                //         console.log(row);
                //     });
                // })
                // .catch(() => console.log("Selector Error"));
    // console.log(tableData);
    // const result = page.evaluate(() => {
    //     const table = document.querySelectorAll('table.wikitable.sortable.jquery-tablesorter');
        
    // });
    
};  

main();
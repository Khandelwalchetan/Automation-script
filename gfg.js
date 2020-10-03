let puppeteer=require("puppeteer");
let cheerio=require("cheerio");
let fs=require("fs");
let url="https://www.geeksforgeeks.org/";

let question=process.argv[2];


(async function(){
    let browser=await puppeteer.launch({
        headless:true,
        defaultViewport:null,
        args:["--start-maximized"]

    });
    let pages=await browser.pages();
    let page=pages[0];
    //await page.goto(url);
    await page.goto(url, { waitUntil: "networkidle0" });
    await page.type("#gsc-i-id2", question+" questions");
    await page.click("#___gcse_1 .gsc-search-button-v2")
    // await Promise.all(
    //     [page.waitForNavigation({ waitUntil: "networkidle0" }),
    //     page.click("button[gsc-search-button gsc-search-button-v2]")])
    const page2 = await browser.newPage();        // open new tab
    await page2.goto("https://www.geeksforgeeks.org/"+question+"-asked-interview-questions/",{ waitUntil: "networkidle0" });       // go to github.com 
    await page2.bringToFront();                   // make the tab active

    await page2.pdf({path: 'questions.pdf', format: 'A4'})


    //await page.goto("https://www.geeksforgeeks.org/"+question+"-asked-interview-questions/")
    // const result = await page2.evaluate(() => {
    //     let content = document.querySelector('.entry-content').innerHTML
    //  return {
    //      content
    //    }
    // })


   // console.log(result)

    ///awafs.writeFileSync("f1.html",result);


    // const page3=await browser.newPage();
    // await page3.goto("f3.html");
 
   //console.log(result);
//    let $=cheerio.load(result);
//    let bowlers=$("p");
//     console.log(bowlers.text())

    
    //await browser.close();  


})();

const puppeteer = require('puppeteer');
let cFile = process.argv[2];
let fs = require("fs");
let scrap = require("./scrap");
(async () => {
  try {
    browser = await puppeteer.launch({
      headless: false,
      defaultViewport: {
        width: 1280,
        height: 587
      }
    });
            browser.close();
  } catch (err) {
    console.log(err);
    return err;
  }
})()

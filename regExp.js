'use strict';
const color = require('colors');
const fs = require('fs');
// File to check
const readeble = process.argv[2];

const regex = /Settlement Due Date:\s+(([0-9]{1,2}(([a-z]{2})?)\s[A-Za-z]{3,9}\s[0-9]{4})|((30 days)|(thirty days))|((45 days)|(forty five days))|((60 days)|(sixty days))|((90 days)|(ninety days))|(((0?[1-9])|([12][0-9])|(3[01]))[-/]((0?[1-9])|(1[012]))[-/]((19|20)\d\d)))?/gi;

fs.readFile(readeble, function (err, data) {
    if (err) {
        console.log('Error!!!');
    }
    // Reading file
    const res = data.toString();
    // Finding matches in the file
    const results = res.match(regex);

    if (results){
        results.map(function (str) {
            let output = str.trim();
            if (output==='Settlement Due Date:'){
                console.log(color.red(output+' Unable to find a fully defined Settlement Due Date'));
            }
            else
                console.log(color.green(output+' Valid Settlement Due Date'));
        });
    }



});
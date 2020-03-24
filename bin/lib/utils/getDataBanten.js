const fetch = require('node-fetch');
const cheerio = require('cheerio');

const getDataBanten = () => new Promise((resolve, reject) => {
    fetch('https://infocorona.bantenprov.go.id/home', { method: 'GET' })
        .then(res => res.text())
        .then(result => {
            const $ = cheerio.load(result)
            resolve(result)
        })
        .catch(err => {
            reject(err)
        })
})

module.exports = {
    getDataBanten
}
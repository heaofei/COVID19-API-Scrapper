const fetch = require('node-fetch');
const cheerio = require('cheerio');

const getDataJabar = () => new Promise((resolve, reject) => {
    fetch('https://covid19-public.digitalservice.id/analytics/aggregation/', { method: 'GET' })
        .then(res => res.json())
        .then(result => {
            resolve(result[result.length-1])
        })
        .catch(err => {
            reject(err)
        })
})

module.exports = {
    getDataJabar
}
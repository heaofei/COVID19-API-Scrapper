const fetch = require('node-fetch');
const cheerio = require('cheerio');
const moment = require('moment');

const getDataJabar = () => new Promise((resolve, reject) => {
    fetch('https://covid19-public.digitalservice.id/analytics/aggregation/', { method: 'GET' })
        .then(res => res.json())
        .then(result => {
            result.map(arr => {
                if (arr.tanggal==moment().subtract(1, 'days').format('DD-MM-YYYY')) {
                    resolve(arr)
                }
            })
        })
        .catch(err => {
            reject(err)
        })
})

module.exports = {
    getDataJabar
}
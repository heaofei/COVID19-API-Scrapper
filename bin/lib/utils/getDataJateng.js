const fetch = require('node-fetch');
const cheerio = require('cheerio');

const getDataJateng = () => new Promise((resolve, reject) => {
    fetch('https://corona.jatengprov.go.id/', { method: 'GET' })
        .then(res => res.text())
        .then(result => {
            const $ = cheerio.load(result)
            resolve({
                odp: $('p.card-text[style="color:green;"]').text(),
                pdp: $('p.card-text[style="color:#0373fc;"]').text(),
                terkonfirmasi: $('p.card-text[style="color:red;"]').html(),
                update: $('div.section-title > b').html().replace('Update Terakhir : ', '').replace(' (Data dapat berubah sewaktu-waktu)', ''),
            })
        })
        .catch(err => {
            reject(err)
        })
})

module.exports = {
    getDataJateng
}
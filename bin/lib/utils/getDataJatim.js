const fetch = require('node-fetch');
const cheerio = require('cheerio');

const getDataJatim = () => new Promise((resolve, reject) => {
    fetch('http://covid19dev.jatimprov.go.id/xweb/draxi', { method: 'GET' })
        .then(res => res.text())
        .then(result => {
            let tempDataAll = []
            const $ = cheerio.load(result)
            $('tbody > tr').each(function(i, e) {
                tempDataAll.push({
                    lokasi: $($(e).find('td')[0]).text(),
                    total_odp: $($(e).find('td')[1]).text(),
                    total_pdp: $($(e).find('td')[2]).text(),
                    terkonfirmasi: $($(e).find('td')[3]).text(),
                    update: $($(e).find('td')[4]).text()
                })
            })
            resolve(tempDataAll)
        })
        .catch(err => {
            reject(err)
        })
})

module.exports = {
    getDataJatim
}
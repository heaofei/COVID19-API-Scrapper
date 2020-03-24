const fetch = require('node-fetch');
const cheerio = require('cheerio');

const getDataJatim = () => new Promise((resolve, reject) => {
    fetch('http://covid19dev.jatimprov.go.id/xweb/draxi', { method: 'GET' })
        .then(res => res.text())
        .then(result => {
            let tempDataKabKota = []
            let tempDataODP= []
            let tempDataPDP= []
            let tempDataConfirm= []
            let tempDataUpdate= []
            let tempDataAll = []

            const $ = cheerio.load(result)
            $('tbody > tr').each(function(i, e) {
                tempDataKabKota.push($($(e).find('td')[0]).text())
                tempDataODP.push($($(e).find('td')[1]).text())
                tempDataPDP.push($($(e).find('td')[2]).text())
                tempDataConfirm.push($($(e).find('td')[3]).text())
                tempDataUpdate.push($($(e).find('td')[4]).text())
            })

            for (var i=0; i<tempDataKabKota.length; i++) {
                tempDataAll.push({
                    lokasi: tempDataKabKota[i],
                    odp: tempDataODP[i],
                    pdp: tempDataPDP[i],
                    terkonfirmasi: tempDataConfirm[i],
                    update: tempDataUpdate[i]
                })
            }

            resolve(tempDataAll)
        })
        .catch(err => {
            reject(err)
        })
})

module.exports = {
    getDataJatim
}
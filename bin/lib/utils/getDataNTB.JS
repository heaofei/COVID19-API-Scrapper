const fetch = require('node-fetch');
const cheerio = require('cheerio');

const getDataNTB = () => new Promise((resolve, reject) => {
    fetch('https://corona.ntbprov.go.id/list-data', { method: 'GET' })
        .then(res => res.text())
        .then(result => {
            let tempDataAll = []
            const $ = cheerio.load(result)
            $('tbody > tr').each(function(i, e) {
                tempDataAll.push({
                    lokasi: $($(e).find('td')[0]).text().replace('/\n/g', '').replace(/\s+/g, ' ').replace(/^ +/, ''),
                    total_odp: $($(e).find('td')[5]).text().replace('/\n/g', '').replace(/\s+/g, ''),
                    selesai_pemantauan: $($(e).find('td')[6]).text().replace('/\n/g', '').replace(/\s+/g, ''),
                    proses_pemantauan: $($(e).find('td')[7]).text().replace('/\n/g', '').replace(/\s+/g, ''),
                    total_pdp: $($(e).find('td')[2]).text().replace('/\n/g', '').replace(/\s+/g, ''),
                    selesai_pengawasan: $($(e).find('td')[3]).text().replace('/\n/g', '').replace(/\s+/g, ''),
                    proses_pengawasan: $($(e).find('td')[4]).text().replace('/\n/g', '').replace(/\s+/g, '')
                })
            })
            resolve(tempDataAll)
        })
        .catch(err => {
            reject(err)
        })
})

module.exports = {
    getDataNTB
}
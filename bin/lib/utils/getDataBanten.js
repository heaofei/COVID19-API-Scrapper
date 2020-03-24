const fetch = require('node-fetch');
const cheerio = require('cheerio');

const getDataBanten = () => new Promise((resolve, reject) => {
    fetch('https://infocorona.bantenprov.go.id/home', { method: 'GET' })
        .then(res => res.text())
        .then(result => {
            let tempDataAll = []
            const $ = cheerio.load(result)
            $('div.col-lg-3 > div.box > div.box-gray').each(function(i, e) {
                tempDataAll.push($(this).text().replace('/\n/g', '').replace(/\s+/g, ' ').replace(/^ +/, ''))
            })
             
            resolve({
                total_odp: tempDataAll[0].replace('ORANG DALAM PEMANTAUAN (ODP) ', '').split(' TOTAL ODP ')[0],
                selesai_pemantauan: tempDataAll[0].replace('ORANG DALAM PEMANTAUAN (ODP) ', '').split(' TOTAL ODP ')[1].split(' MASIH DIPANTAU ')[1].split(' SEMBUH ')[0],
                proses_pemantauan: tempDataAll[0].replace('ORANG DALAM PEMANTAUAN (ODP) ', '').split(' TOTAL ODP ')[1].split(' MASIH DIPANTAU ')[0],
                total_pdp: tempDataAll[1].replace('PASIEN DALAM PENGAWASAN (PDP) ', '').split(' TOTAL PDP ')[0],
                selesai_pengawasan: tempDataAll[1].replace('PASIEN DALAM PENGAWASAN (PDP) ', '').split(' TOTAL PDP ')[1].split(' MASIH DIRAWAT ')[1].split(' SEMBUH ')[0],
                proses_pengawasan: tempDataAll[1].replace('PASIEN DALAM PENGAWASAN (PDP) ', '').split(' TOTAL PDP ')[1].split(' MASIH DIRAWAT ')[0]
            })
        })
        .catch(err => {
            reject(err)
        })
})

module.exports = {
    getDataBanten
}
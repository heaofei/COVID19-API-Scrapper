const fetch = require('node-fetch');
const cheerio = require('cheerio');

const getDataAceh = () => new Promise((resolve, reject) => {
    fetch('https://dashboard.bravo.siat.web.id/api/public/dashboard/b1fcaade-589b-4620-a715-21d2d4cc234e/card/23?parameters=%5B%5D', { method: 'GET' })
        .then(res => res.json())
        .then(result => {
            let tempDataAll = []
            result.data.rows.map(arr => {
                tempDataAll.push({
                    lokasi: arr[0],
                    total_odp: arr[1],
                    total_pdp: arr[2]
                })
            })

            fetch('https://dashboard.bravo.siat.web.id/api/public/dashboard/b1fcaade-589b-4620-a715-21d2d4cc234e/card/31?parameters=%5B%5D', { method: 'GET' })
                .then(res => res.json())
                .then(result => {
                    let tempDataUpdate = result.data.rows[0][0]
                    resolve({
                        data: tempDataAll,
                        date: tempDataUpdate
                    })
            })
        })
        .catch(err => {
            reject(err)
        })
})

module.exports = {
    getDataAceh
}
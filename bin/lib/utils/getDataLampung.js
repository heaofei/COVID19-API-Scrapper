const fetch = require('node-fetch');
const cheerio = require('cheerio');

const getDataLampung = () => new Promise((resolve, reject) => {
    fetch('https://geoportal.lampungprov.go.id/gis/rest/services/Kesehatan/COVID19_KABUPATEN/FeatureServer/0/query?f=json&where=pdp+%3C%3E+0&returnGeometry=true&spatialRel=esriSpatialRelIntersects&geometry=%7B%22xmin%22%3A11271098.442811023%2C%22ymin%22%3A-626172.1357070468%2C%22xmax%22%3A11897270.578523021%2C%22ymax%22%3A0.000004950910806655884%2C%22spatialReference%22%3A%7B%22wkid%22%3A102100%7D%7D&geometryType=esriGeometryEnvelope&inSR=102100&outFields=%2A&orderByFields=pdp+DESC&outSR=102100&resultType=tile', { method: 'GET' })
        .then(res => res.json())
        .then(result => {
            resolve(result.features)
        })
        .catch(err => {
            reject(err)
        })
})

module.exports = {
    getDataLampung
}
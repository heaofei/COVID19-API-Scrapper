const fetch = require('node-fetch');
const cheerio = require('cheerio');

const getDataAllProv = () => new Promise((resolve, reject) => {
    fetch('https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/COVID19_Indonesia_per_Provinsi/FeatureServer/0/query?f=json&where=(Provinsi%20%3C%3E%20%27Indonesia%27)%20AND%20(Kasus_Posi%20%3C%3E%200)&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Kasus_Posi%20desc&outSR=102100&resultOffset=0&resultRecordCount=34&cacheHint=true', { method: 'GET' })
        .then(res => res.json())
        .then(result => {
            resolve(result.features)
        })
        .catch(err => {
            reject(err)
        })
})

module.exports = {
    getDataAllProv
}
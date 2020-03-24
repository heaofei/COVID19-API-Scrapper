const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const controllerGetData = require('../controllers');

function AppServer() {
    this.app = express()
    this.app.use(cors())
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.text())

    this.app.get('/', (req, res) => {
        res.json([
            { 'lokasi': 'SEMUA PROVINSI', 'link': `${req.protocol}://${req.get('host')}/semua` },
            { 'lokasi': 'ACEH', 'link': `${req.protocol}://${req.get('host')}/aceh` },
            { 'lokasi': 'BANTEN', 'link': `${req.protocol}://${req.get('host')}/banten` },
            { 'lokasi': 'JAWA TIMUR', 'link': `${req.protocol}://${req.get('host')}/jatim` },
            { 'lokasi': 'JAWA TENGAH', 'link': `${req.protocol}://${req.get('host')}/jateng` },
            { 'lokasi': 'JAWA BARAT', 'link': `${req.protocol}://${req.get('host')}/jabar` },
            { 'lokasi': 'LAMPUNG', 'link': `${req.protocol}://${req.get('host')}/lampung` },
            { 'lokasi': 'NUSA TENGGARA BARAT', 'link': `${req.protocol}://${req.get('host')}/ntb` }
        ])
    })

    this.app.route('/semua').get(controllerGetData.semua)
    this.app.route('/aceh').get(controllerGetData.aceh)
    this.app.route('/banten').get(controllerGetData.banten)
    this.app.route('/jatim').get(controllerGetData.jatim)
    this.app.route('/jateng').get(controllerGetData.jateng)
    this.app.route('/jabar').get(controllerGetData.jabar)
    this.app.route('/lampung').get(controllerGetData.lampung)
    this.app.route('/ntb').get(controllerGetData.ntb)
}

module.exports = AppServer
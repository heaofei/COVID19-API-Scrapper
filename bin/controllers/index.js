const aceh = async (req, res) => {
    const data = require('../lib/utils/getDataAceh')
    let getData = await data.getDataAceh()
    res.json({
        data: getData.data,
        update: getData.date
    })
}

const jatim = async (req, res) => {
    const data = require('../lib/utils/getDataJatim')
    let getData = await data.getDataJatim()
    res.json({ data: getData })
}

const jateng = async (req, res) => {
    const data = require('../lib/utils/getDataJateng')
    let getData = await data.getDataJateng()
    res.json({ data: getData })
}

const jabar = async (req, res) => {
    const data = require('../lib/utils/getDataJabar')
    let getData = await data.getDataJabar()
    res.json({ data: getData })
}

const ntb = async (req, res) => {
    const data = require('../lib/utils/getDataNTB')
    let getData = await data.getDataNTB()
    res.json({ data: getData })
}

module.exports = {
    aceh,
    jatim,
    jateng,
    jabar,
    ntb
}
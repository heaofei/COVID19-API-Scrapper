const semua = async (req, res) => {
    const data = require('../lib/utils/getDataAllProv')
    let getData = await data.getDataAllProv()
    res.json({ data: getData })
}

const aceh = async (req, res) => {
    const data = require('../lib/utils/getDataAceh')
    let getData = await data.getDataAceh()
    res.json({ data: getData.data, update: getData.date })
}

const banten = async (req, res) => {
    const data = require('../lib/utils/getDataBanten')
    let getData = await data.getDataBanten()
    res.json({ data: getData })
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

const lampung = async (req, res) => {
    const data = require('../lib/utils/getDataLampung')
    let getData = await data.getDataLampung()
    res.json({ data: getData })
}

const ntb = async (req, res) => {
    const data = require('../lib/utils/getDataNTB')
    let getData = await data.getDataNTB()
    res.json({ data: getData })
}

module.exports = {
    semua,
    aceh,
    banten,
    jatim,
    jateng,
    jabar,
    lampung,
    ntb
}
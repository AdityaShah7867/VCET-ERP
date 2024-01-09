const express = require('express')
const router = express.Router()


const { createCertificates, verifyCertificate, deleteCertificates, getAllCertificates, getAllCertificatesAdmin } = require('../Controller/Certificates.controllers')
const { upload } = require('../Middleware/upload')
const { verifyToken } = require('../Middleware/VerifyUser')

router.post('/createCertificates', verifyToken, upload.single('certificate'), createCertificates)
router.patch('/verifyCertificate/:certificateId', verifyToken, verifyCertificate)
router.delete('/deleteCertificates/:certificateId', verifyToken, deleteCertificates)
router.get('/getAllCertificates', verifyToken, getAllCertificates)
router.get('/getAllCertificatesAdmin', verifyToken, getAllCertificatesAdmin)


module.exports = router


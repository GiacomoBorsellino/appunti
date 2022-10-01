const router = require('express').Router();

const { PrismaClient } = require('@prisma/client');

/** Import del Model Document da Schema Prisma */
const prisma = new PrismaClient()


exports.getDocuments = async (req, res, next) => {
    try {
        const documents = await prisma.document.findMany({})
        res.json(documents)
    } catch {
        console.log('non va')
        res.json({ message: "error" })
    }
};

exports.downloadDocument = async (req, res, next) => {
    const { id } = req.params
    try {
        const document = await prisma.document.findUnique({
            where: {
                id: Number(id)
            }
        })
        res.json(document)
    } catch {
        next();
    }
};

exports.getDocument = async (req, res, next) => {
    const { id } = req.params
    try {
        const document = await prisma.document.findUnique({
            where: {
                id: Number(id)
            }
        })
        res.json(document)
    } catch {
        next();
    }
};

exports.postDocument = async (req, res, next) => {
    try {
        const document = await prisma.document.create({
            data: req.body
        })
        res.json(document)
    } catch {
        next();
    }
};

exports.putDocument = async (req, res, next) => {
    const { id } = req.params
    try {
        const document = await prisma.document.update({
            where: {
                id: Number(id)
            },
            data: req.body
        })
        res.json(document)
    } catch {
        next();
    }
};

exports.deleteDocument = async (req, res, next) => {
    const { id } = req.params
    try {
        const document = await prisma.document.delete({
            where: {
                id: Number(id)
            }
        })
        res.json(document)
    } catch {
        next();
    }
};
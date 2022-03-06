const express= require('express');
const mongoose= require('mongoose');

const Record= require('../models/recordModel.js');
const Records = require('../models/recordsModel');

const router= express.Router();


const createRecord =  async (req, res) => {
    console.log(req.body);
    try {
        Record.aggregate(
            [
                {
                    "$match": {
                        "createdAt": {
                            "$gte": new Date(req.body.startDate),
                            "$lte": new Date(req.body.endDate)
                        }
                    }
                },
                {
                    "$project": {
                        "key": "$key",
                        "createdAt": "$createdAt",
                        "totalCount": {
                            "$sum": "$counts"
                        }
                    }
                },
                {
                    "$match": {
                        "totalCount": {
                            "$gte": req.body.minCount,
                            "$lte": req.body.maxCount
                        }
                    }
                }
            ]
        ).then((results, err) => {
            if (err) {
                console.log(err);
                const recordsErrorResponse = new Records({
                    code: 1,
                    msg: "Error while fetching data from DB",
                    records: results
                })
                res.status(200).send(recordsErrorResponse);
            } else {
                console.log(results);
                const recordsSuccessResponse = new Records({
                    code: 0,
                    msg: "Success",
                    records: []
                });
                results.forEach(function (record) {
                    let recordModel = new Record();
                    recordModel.key = record.key;
                    recordModel.createdAt = record.createdAt;
                    recordModel.totalCount = record.totalCount;
                    recordsSuccessResponse["records"].push(recordModel);
                });

                res.status(200).json(recordsSuccessResponse);
            }
        }).catch((error) => {
            res.status(400).json({message: error.message});
        });
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

module.exports.createrecord= createRecord;
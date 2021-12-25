/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      let response = {};
      console.log(req.query.input);
      let input = req.query.input;
      let initNum = convertHandler.getNum(input);
      let initUnit = convertHandler.getUnit(input);
      let returnNum = convertHandler.convert(initNum, initUnit);
      let returnUnit = convertHandler.getReturnUnit(initUnit);
      let toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      response.initNum = initNum;
      response.initUnit = initUnit;
      response.returnNum = returnNum;
      response.returnUnit = returnUnit;
      response.string = toString;
      if (initNum === "invalid number" && initUnit === "invalid unit"){
        
        res.json("invalid number and unit");
        return
      } else if (initUnit === "invalid unit"){
        
        res.json("invalid unit");
        return
      }else if (initNum === "invalid number"){
        
        res.json("invalid number");
        return
      }  else {
      res.json(response);
      }
      
      
      
    });
    
};
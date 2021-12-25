/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {

  this.getNum = function(input) {
    
    if ((/^(gal)$|^(l)$|^(lbs)$|^(kg)$|^(mi)$|^(km)$/i).test(input)) return 1;
    if (!(/[\d\/]/g).test(input)) return 1;
    let result;
    result = input.replace(/\s*/g, "").match(/^\d*[.]{0,1}\d*\/*\d*[.]{0,1}\d*\w*$/)
    if (result) result = input.replace(/\s*/g, "").match(/^\d*[.]{0,1}\d*\/*\d*[.]{0,1}\d*\w*$/)[0].replace(/^[0]*/g, '').replace(/([.]\d*[1-9])[0]+/, '$1').replace(/^(\d*[.]{0,1}\d*\/*\d*[.]{0,1}\d*)\w*$/, '$1').replace(/[.]*$/g, "");
    if ((/[.]{2}/g).test(input)) return 'invalid number';
    if ((/[.]\d*[.]/g).test(input)) return 'invalid number';
    if ((/[\/]{2}/g).test(input)) return 'invalid number';
    if ((/[\/]\d*[\/]/g).test(input)) return 'invalid number';
    
    if (result) {
      if (result.includes("/")) {
        
        let array = result.toString().split("/").filter((item) => item);
        
        if (array.length != 2) {
          return "invalid number";
        }
        return Number(array[0] / array[1]);
      }
    }


    if (result) {
      return Number(result);
    } else {
      return 'invalid number';
    }

  };

  this.getUnit = function(input) {
    if (input === '') return "invalid unit";
    input = input.replace(/\s*/g, "");
    if (!(/[^a-zA-z](gal)$|[^a-zA-z](l)$|[^a-zA-z](lbs)$|[^a-zA-z](kg)$|[^a-zA-z](mi)$|[^a-zA-z](km)$|^(gal)$|^(l)$|^(lbs)$|^(kg)$|^(mi)$|^(km)$/i).test(input)) return "invalid unit"
    let result;
    result = input.match(/(gal)$|(l)$|(lbs)$|(kg)$|(mi)$|(km)$/i);
    if (result) result = input.match(/(gal)$|(l)$|(lbs)$|(kg)$|(mi)$|(km)$/i)[0];
    if (result) {
      if (result === "l" || result === "L") return "L";
      return result.toLowerCase();
    } else if (result === null) {
      return 'invalid unit'
    }
  };

  this.getReturnUnit = function(initUnit) {
    let result;
    switch (initUnit) {
      case "gal":
        return "L";
        break;
      case "L":
        return "gal";
        break;
      case "lbs":
        return "kg";
        break;
      case "kg":
        return "lbs";
        break;
      case "mi":
        return "km";
        break;
      case "km":
        return "mi";
        break;
    }

    if (result !== undefined) return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    switch(unit){
      case "gal":
      return "gallons";
      break;
      case "L":
      case "l":
      return "litres";
      break;
      case "lbs":
      return  "pounds";
      break;
      case "kg":
      return "kilograms";
      break;
      case "mi":
      return "miles";
      break;
      case "km":
      return "kilometers";
      break;
    }
    return result;
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch (initUnit) {
      case "gal":
        result = initNum * galToL;
        break;
      case "L":
        result = initNum / galToL;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "km":
        result = initNum / miToKm;
        break;
    }
    if (result !== undefined) return Number(result.toFixed(5));
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result = "";
    result = initNum + " " + this.spellOutUnit(initUnit) + " converts to " + returnNum + " " + this.spellOutUnit(returnUnit);
    return result;
  };

}

module.exports = ConvertHandler;
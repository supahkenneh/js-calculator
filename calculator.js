/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

var calculatorModule = (function (){
    var memory = 0;
    var total = 0;
    var load = function (num){
        if (typeof num === 'number'){
            total = num;
        }else{
            throw err;
        }
        return total;
        };
    var getTotal = function (){
        return total;
    };
    var add = function(num){
        if (typeof num === 'number'){
            total += num;
        }else{
            throw err;
        }
    };
    var subtract = function(num){
        if (typeof num === 'number'){
             total-=num
        }else{
            throw err;
        }
    };
    var multiply = function(num){
        if (typeof num === 'number'){
            total*=num
        }else{
            throw err;
        }
    };
    var divide = function(num){
        if (typeof num === 'number'){
            total/=num
        }else{
            throw err;
        }
    };
    var recallMemory = function(){
        return memory;
    };
    var saveMemory = function(){
        memory = total;
        return memory;
    };
    var clearMemory = function(){
        memory = 0;
        return memory;
    }
    var boundLoad = function(){
        if (typeof load !== 'number'){
            throw err;
        }
    }
    return {
        load: load,
        getTotal: getTotal,
        add: add,
        subtract: subtract,
        multiply: multiply,
        divide: divide,
        recallMemory: recallMemory,
        saveMemory: saveMemory,
        clearMemory: clearMemory,
        boundLoad: boundLoad,
    }
})

calculatorModule.getTotal;

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */


  /**
   * Return the value of `total`
   * @return { Number }
   */


  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */


  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */


  /**
   * Stores the value of `total` to `memory`
   */


  /**
   * Clear the value stored at `memory`
   */

  /**
   * Validation
   */


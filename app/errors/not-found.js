const {StatusCodes} = require('http-status-codes');
const CostumAPIError = require('./custom-api-error');

class NotFound extends CostumAPIError {
    constructor(message){
        super(message);
        this.statusCodes = StatusCodes.NOT_FOUND;
    }
}


module.exports = NotFound; 
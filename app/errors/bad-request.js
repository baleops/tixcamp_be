const { StatusCodes } = require('http-status-codes');
const CostumAPIError = require('./custom-api-error');


class BadRequest extends CostumAPIError {
    constructor(message){
        super(message);
        this.statusCodes = StatusCodes.BAD_REQUEST;
    }
}

module.exports = BadRequest;
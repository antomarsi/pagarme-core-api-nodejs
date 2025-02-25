/**
 * PagarmeCoreApiLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of UpdateRecipientBankAccountRequest
 */
class UpdateRecipientBankAccountRequest extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.bankAccount = this.constructor.getValue(obj.bankAccount || obj.bank_account);
        this.paymentMode =
          this.constructor.getValue(obj.paymentMode
     || obj.payment_mode, 'bank_transfer');
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'bankAccount', realName: 'bank_account', type: 'CreateBankAccountRequest' },
            { name: 'paymentMode', realName: 'payment_mode' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = UpdateRecipientBankAccountRequest;

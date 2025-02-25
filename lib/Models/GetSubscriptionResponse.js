/**
 * PagarmeCoreApiLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of GetSubscriptionResponse
 */
class GetSubscriptionResponse extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.id = this.constructor.getValue(obj.id);
        this.code = this.constructor.getValue(obj.code);
        this.startAt = this.constructor.getValue(obj.startAt || obj.start_at);
        this.interval = this.constructor.getValue(obj.interval);
        this.intervalCount = this.constructor.getValue(obj.intervalCount || obj.interval_count);
        this.billingType = this.constructor.getValue(obj.billingType || obj.billing_type);
        this.currentCycle = this.constructor.getValue(obj.currentCycle || obj.current_cycle);
        this.paymentMethod = this.constructor.getValue(obj.paymentMethod || obj.payment_method);
        this.currency = this.constructor.getValue(obj.currency);
        this.installments = this.constructor.getValue(obj.installments);
        this.status = this.constructor.getValue(obj.status);
        this.createdAt = this.constructor.getValue(obj.createdAt || obj.created_at);
        this.updatedAt = this.constructor.getValue(obj.updatedAt || obj.updated_at);
        this.customer = this.constructor.getValue(obj.customer);
        this.card = this.constructor.getValue(obj.card);
        this.items = this.constructor.getValue(obj.items);
        this.statementDescriptor =
          this.constructor.getValue(obj.statementDescriptor
     || obj.statement_descriptor);
        this.metadata = this.constructor.getValue(obj.metadata);
        this.setup = this.constructor.getValue(obj.setup);
        this.gatewayAffiliationId =
          this.constructor.getValue(obj.gatewayAffiliationId
     || obj.gateway_affiliation_id);
        this.nextBillingAt = this.constructor.getValue(obj.nextBillingAt || obj.next_billing_at);
        this.billingDay = this.constructor.getValue(obj.billingDay || obj.billing_day);
        this.minimumPrice = this.constructor.getValue(obj.minimumPrice || obj.minimum_price);
        this.canceledAt = this.constructor.getValue(obj.canceledAt || obj.canceled_at);
        this.discounts = this.constructor.getValue(obj.discounts);
        this.increments = this.constructor.getValue(obj.increments);
        this.boletoDueDays = this.constructor.getValue(obj.boletoDueDays || obj.boleto_due_days);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'id', realName: 'id' },
            { name: 'code', realName: 'code' },
            { name: 'startAt', realName: 'start_at', isDateTime: true, dateTimeValue: 'rfc3339' },
            { name: 'interval', realName: 'interval' },
            { name: 'intervalCount', realName: 'interval_count' },
            { name: 'billingType', realName: 'billing_type' },
            { name: 'currentCycle', realName: 'current_cycle', type: 'GetPeriodResponse' },
            { name: 'paymentMethod', realName: 'payment_method' },
            { name: 'currency', realName: 'currency' },
            { name: 'installments', realName: 'installments' },
            { name: 'status', realName: 'status' },
            {
                name: 'createdAt',
                realName: 'created_at',
                isDateTime: true,
                dateTimeValue: 'rfc3339',
            },
            {
                name: 'updatedAt',
                realName: 'updated_at',
                isDateTime: true,
                dateTimeValue: 'rfc3339',
            },
            { name: 'customer', realName: 'customer', type: 'GetCustomerResponse' },
            { name: 'card', realName: 'card', type: 'GetCardResponse' },
            { name: 'items', realName: 'items', array: true, type: 'GetSubscriptionItemResponse' },
            { name: 'statementDescriptor', realName: 'statement_descriptor' },
            { name: 'metadata', realName: 'metadata' },
            { name: 'setup', realName: 'setup', type: 'GetSetupResponse' },
            { name: 'gatewayAffiliationId', realName: 'gateway_affiliation_id' },
            {
                name: 'nextBillingAt',
                realName: 'next_billing_at',
                isDateTime: true,
                dateTimeValue: 'rfc3339',
            },
            { name: 'billingDay', realName: 'billing_day' },
            { name: 'minimumPrice', realName: 'minimum_price' },
            {
                name: 'canceledAt',
                realName: 'canceled_at',
                isDateTime: true,
                dateTimeValue: 'rfc3339',
            },
            { name: 'discounts', realName: 'discounts', array: true, type: 'GetDiscountResponse' },
            {
                name: 'increments',
                realName: 'increments',
                array: true,
                type: 'GetIncrementResponse',
            },
            { name: 'boletoDueDays', realName: 'boleto_due_days' },
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

module.exports = GetSubscriptionResponse;

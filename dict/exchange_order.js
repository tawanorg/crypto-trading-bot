'use strict';

module.exports = class ExchangeOrder {
    constructor(id, symbol, status, price, amount, retry, ourId, side, type, createdAt, updatedAt) {
        this.id = id
        this.symbol = symbol
        this.status = status
        this.price = price
        this.amount = amount
        this.retry = retry
        this.ourId = ourId
        this.side = side
        this.type = type
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
};
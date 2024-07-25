import {Order, submitOrder} from "./index";
import * as emailLib from './lib/email';

jest.mock('./lib/email');

describe('submitOrder', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should submit the order and call sendOrderEmail', () => {
        const order: Order = {id: '123', isSubmitted: false};
        const result = submitOrder(order);

        expect(result.isSubmitted).toBe(true);
        expect(emailLib.sendOrderEmail).toHaveBeenCalledWith(order.id);
        expect(emailLib.sendOrderEmail).toHaveBeenCalledTimes(1);
    });

    it('should throw an error', () => {
        const order: Order = {id: '123', isSubmitted: true};


        expect(emailLib.sendOrderEmail).not.toHaveBeenCalled();
        expect(() => submitOrder(order)).toThrow('This order was already submitted');

    });

    it('should not change the original order object', () => {
        const order: Order = { id: '123', isSubmitted: false };
        const originalOrder = { ...order };

        const result = submitOrder(order);

        expect(result).not.toBe(originalOrder);
        expect(result.id).toBe(originalOrder.id);
        expect(result.isSubmitted).toBe(true);
    });
})


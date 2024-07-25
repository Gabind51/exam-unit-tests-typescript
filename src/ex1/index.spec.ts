import {isRangeAvailable} from "./index";

describe("isRangeAvailable", () => {
    it("should return true when requested range is completely within the available range", () => {
        const requestedRange = {
            startDate: new Date('2024-02-01'),
            endDate: new Date('2024-12-25')
        };
        const availableRange = {
            startDate: new Date('2024-01-01'),
            endDate: new Date('2024-12-31')
        };
        expect(isRangeAvailable(requestedRange, availableRange)).toBe(true);
    });

    it("should return false when requested range is completely out the available range", () => {
        const requestedRange = { startDate: new Date('2024-01-10'), endDate: new Date('2024-02-01')};
        const availableRange = { startDate: new Date('2023-01-01'), endDate: new Date('2023-12-31')};
        expect(isRangeAvailable(requestedRange, availableRange)).toBe(false);
    })

    it("should return false when requested range is partially out the available range", () => {
        const requestedRange = { startDate: new Date('2023-01-10'), endDate: new Date('2024-02-01')};
        const availableRange = { startDate: new Date('2024-01-01'), endDate: new Date('2024-12-31')};
        expect(isRangeAvailable(requestedRange, availableRange)).toBe(false);
    })

    it("should return false when requested range is completely out the available range", () => {
        const requestedRange = { startDate: new Date('2023-01-10'), endDate: new Date('2023-02-01')};
        const availableRange = { startDate: new Date('2024-01-01'), endDate: new Date('2024-12-31')};
        expect(isRangeAvailable(requestedRange, availableRange)).toBe(false);
    })

    it("should return true when requested range is the same as the available range", () => {
        const requestedRange = { startDate: new Date('2024-01-01'), endDate: new Date('2024-12-31')};
        const availableRange = { startDate: new Date('2024-01-01'), endDate: new Date('2024-12-31')};
        expect(isRangeAvailable(requestedRange, availableRange)).toBe(true);
    })
});

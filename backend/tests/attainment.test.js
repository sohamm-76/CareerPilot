const { calculateAttainment, calculatePOAttainment } = require('../utils/attainment');

describe('calculateAttainment', () => {
  test('returns 3 for marks >= 60', () => {
    expect(calculateAttainment(60)).toBe(3);
    expect(calculateAttainment(75)).toBe(3);
    expect(calculateAttainment(100)).toBe(3);
  });

  test('returns 2 for marks 50–59', () => {
    expect(calculateAttainment(50)).toBe(2);
    expect(calculateAttainment(55)).toBe(2);
    expect(calculateAttainment(59)).toBe(2);
  });

  test('returns 1 for marks 40–49', () => {
    expect(calculateAttainment(40)).toBe(1);
    expect(calculateAttainment(45)).toBe(1);
    expect(calculateAttainment(49)).toBe(1);
  });

  test('returns 0 for marks below 40', () => {
    expect(calculateAttainment(39)).toBe(0);
    expect(calculateAttainment(0)).toBe(0);
    expect(calculateAttainment(20)).toBe(0);
  });

  test('boundary: exactly 60 is 3, not 2', () => {
    expect(calculateAttainment(60)).toBe(3);
  });

  test('boundary: exactly 50 is 2, not 1', () => {
    expect(calculateAttainment(50)).toBe(2);
  });

  test('boundary: exactly 40 is 1, not 0', () => {
    expect(calculateAttainment(40)).toBe(1);
  });
});

describe('calculatePOAttainment', () => {
  test('groups CO attainments and maps them to POs', () => {
    const marks = [
      { co: 'CO1', attainment: 3 },
      { co: 'CO1', attainment: 1 },
      { co: 'CO2', attainment: 2 },
    ];
    const result = calculatePOAttainment(marks);
    expect(result.PO1).toBe(2);   // avg of (3+1)/2 = 2
    expect(result.PO2).toBe(2);
  });

  test('returns empty object for empty marks array', () => {
    expect(calculatePOAttainment([])).toEqual({});
  });

  test('ignores COs not in mapping', () => {
    const marks = [{ co: 'CO99', attainment: 3 }];
    const result = calculatePOAttainment(marks);
    expect(Object.keys(result).length).toBe(0);
  });

  test('maps all 6 COs to correct POs', () => {
    const marks = [
      { co: 'CO1', attainment: 3 },
      { co: 'CO2', attainment: 2 },
      { co: 'CO3', attainment: 1 },
      { co: 'CO4', attainment: 3 },
      { co: 'CO5', attainment: 2 },
      { co: 'CO6', attainment: 1 },
    ];
    const result = calculatePOAttainment(marks);
    expect(result.PO1).toBe(3);
    expect(result.PO2).toBe(2);
    expect(result.PO3).toBe(1);
    expect(result.PO4).toBe(3);
    expect(result.PO5).toBe(2);
    expect(result.PO6).toBe(1);
  });

  test('averages multiple marks for same CO correctly', () => {
    const marks = [
      { co: 'CO1', attainment: 3 },
      { co: 'CO1', attainment: 3 },
      { co: 'CO1', attainment: 0 },
    ];
    const result = calculatePOAttainment(marks);
    expect(result.PO1).toBe(2); // (3+3+0)/3 = 2
  });
});
const CO_TO_PO = {
  CO1: 'PO1',
  CO2: 'PO2',
  CO3: 'PO3',
  CO4: 'PO4',
  CO5: 'PO5',
  CO6: 'PO6'
};

const calculateAttainment = (totalMarks) => {
  if (totalMarks >= 60) return 3;
  if (totalMarks >= 50) return 2;
  if (totalMarks >= 40) return 1;
  return 0;
};

const calculatePOAttainment = (marksArray) => {
  const coGroups = {};

  for (const mark of marksArray) {
    const co = mark.co;
    if (!coGroups[co]) {
      coGroups[co] = { total: 0, count: 0 };
    }
    coGroups[co].total += mark.attainment;
    coGroups[co].count += 1;
  }

  const result = {};

  for (const [co, data] of Object.entries(coGroups)) {
    const po = CO_TO_PO[co];
    if (!po) continue;
    const avg = data.total / data.count;
    if (!result[po]) {
      result[po] = { total: 0, count: 0 };
    }
    result[po].total += avg;
    result[po].count += 1;
  }

  const poAttainment = {};
  for (const [po, data] of Object.entries(result)) {
    poAttainment[po] = parseFloat((data.total / data.count).toFixed(2));
  }

  return poAttainment;
};

module.exports = { calculateAttainment, calculatePOAttainment };
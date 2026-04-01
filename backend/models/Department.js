const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  POs: [
    {
      code: String,
      description: String
    }
  ],
  PSOs: [
    {
      code: String,
      description: String
    }
  ],
  PEOs: [String]
});

module.exports = mongoose.model('Department', departmentSchema);

/*
  Default NBA/AICTE Program Outcomes (PO1–PO12):

  PO1  - Engineering Knowledge: Apply knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.
  PO2  - Problem Analysis: Identify, formulate, review research literature, and analyze complex engineering problems using first principles.
  PO3  - Design/Development of Solutions: Design solutions for complex engineering problems and design system components or processes that meet specified needs.
  PO4  - Conduct Investigations of Complex Problems: Use research-based knowledge and methods to conduct investigations of complex problems.
  PO5  - Modern Tool Usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools.
  PO6  - The Engineer and Society: Apply reasoning to assess societal, health, safety, legal, and cultural issues.
  PO7  - Environment and Sustainability: Understand the impact of professional engineering solutions in societal and environmental contexts.
  PO8  - Ethics: Apply ethical principles and commit to professional ethics, responsibilities, and norms of engineering practice.
  PO9  - Individual and Team Work: Function effectively as an individual, and as a member or leader in diverse teams.
  PO10 - Communication: Communicate effectively on complex engineering activities — reports, documentation, presentations.
  PO11 - Project Management and Finance: Apply knowledge and understanding of the engineering management principles.
  PO12 - Life-long Learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning.
*/
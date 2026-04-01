const authorizeRoles = require('../middleware/roleMiddleware');

const mockRes = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe('authorizeRoles middleware', () => {
  test('calls next() when user role is allowed', () => {
    const middleware = authorizeRoles('student', 'admin');
    const req = { user: { role: 'student' } };
    const res = mockRes();
    const next = jest.fn();

    middleware(req, res, next);

    expect(next).toHaveBeenCalledTimes(1);
    expect(res.status).not.toHaveBeenCalled();
  });

  test('returns 403 when role is not in allowed list', () => {
    const middleware = authorizeRoles('admin');
    const req = { user: { role: 'student' } };
    const res = mockRes();
    const next = jest.fn();

    middleware(req, res, next);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      message: 'Forbidden: insufficient role'
    });
    expect(next).not.toHaveBeenCalled();
  });

  test('allows admin when admin is in allowed roles', () => {
    const middleware = authorizeRoles('faculty', 'admin');
    const req = { user: { role: 'admin' } };
    const res = mockRes();
    const next = jest.fn();

    middleware(req, res, next);

    expect(next).toHaveBeenCalledTimes(1);
  });

  test('blocks faculty from student-only route', () => {
    const middleware = authorizeRoles('student');
    const req = { user: { role: 'faculty' } };
    const res = mockRes();
    const next = jest.fn();

    middleware(req, res, next);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(next).not.toHaveBeenCalled();
  });

  test('allows multiple roles in one call', () => {
    const middleware = authorizeRoles('student', 'faculty', 'admin');
    const roles = ['student', 'faculty', 'admin'];
    roles.forEach((role) => {
      const req = { user: { role } };
      const res = mockRes();
      const next = jest.fn();
      middleware(req, res, next);
      expect(next).toHaveBeenCalledTimes(1);
    });
  });
});
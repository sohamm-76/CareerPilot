process.env.JWT_SECRET = 'test_secret_key';

const jwt = require('jsonwebtoken');
const protect = require('../middleware/authMiddleware');

const mockRes = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe('protect middleware', () => {
  test('calls next() with valid Bearer token', () => {
    const token = jwt.sign({ id: 'abc123', role: 'student' }, process.env.JWT_SECRET);
    const req = { headers: { authorization: `Bearer ${token}` } };
    const res = mockRes();
    const next = jest.fn();

    protect(req, res, next);

    expect(next).toHaveBeenCalledTimes(1);
    expect(req.user).toBeDefined();
    expect(req.user.id).toBe('abc123');
    expect(req.user.role).toBe('student');
  });

  test('returns 401 when no Authorization header', () => {
    const req = { headers: {} };
    const res = mockRes();
    const next = jest.fn();

    protect(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ success: false, message: 'Not authorized' });
    expect(next).not.toHaveBeenCalled();
  });

  test('returns 401 when token is malformed', () => {
    const req = { headers: { authorization: 'Bearer notarealtoken' } };
    const res = mockRes();
    const next = jest.fn();

    protect(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(next).not.toHaveBeenCalled();
  });

  test('returns 401 when Authorization is not Bearer', () => {
    const req = { headers: { authorization: 'Basic sometoken' } };
    const res = mockRes();
    const next = jest.fn();

    protect(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(next).not.toHaveBeenCalled();
  });

  test('returns 401 for expired token', () => {
    const token = jwt.sign({ id: 'abc123' }, process.env.JWT_SECRET, { expiresIn: '0s' });
    const req = { headers: { authorization: `Bearer ${token}` } };
    const res = mockRes();
    const next = jest.fn();

    protect(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(next).not.toHaveBeenCalled();
  });
});
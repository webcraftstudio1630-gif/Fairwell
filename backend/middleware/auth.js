import jwt from 'jsonwebtoken';

export const auth = (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ message: 'No auth token, access denied' });
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret');
    req.user = verified;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token verification failed, authorization denied' });
  }
};

export const adminAuth = (req, res, next) => {
  auth(req, res, () => {
    if (req.user.role !== 'Admin') {
      return res.status(403).json({ message: 'Access denied, admin only' });
    }
    next();
  });
};

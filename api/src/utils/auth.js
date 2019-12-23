import jwt from 'jsonwebtoken';

export const newToken = user => {
  return jwt.sign({
    phone: user.regno,
    userType: user.userType,
		userId: user._id }, 
		process.env.KEY, {
    expiresIn: '2W'
  })
}

export const verifyToken = token => {
	new Promise((resolve, reject) => {
    jwt.verify(token, process.env.KEY, (err, payload) => {
			if (err){ 
				return reject(err)}
			else {
				resolve(payload)
			}
    })
 })
}

export const auth = async (req, res, next) => {

	try {		
	const token = req.headers.authorization;
	if(!token) throw err;

		const decoded = await verifyToken(token)
		req.userData = decoded;
	} catch (err) {
		return res.status(401).json({
			message: 'Auth failed',
			mssg: err
		});
	}
  next()
}
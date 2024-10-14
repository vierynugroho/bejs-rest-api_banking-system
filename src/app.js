import express from 'express';
import logger_format from './config/logger.js';
import logger from 'morgan';
import cors from 'cors';
import {} from 'dotenv/config';
import router from './routes/index.js';

const app = express();

const logMiddleware = (req, res, next) => {
	console.log(`Request Method: ${req.method} - URL: ${req.originalUrl} - Timestamp: ${new Date().toLocaleDateString()}`);

	next();
};

app.use(
	cors({
		origin: '*',
		methods: 'GET, POST, PUT, DELETE, PATCH',
		allowedHeaders: 'Content-Type, Authorization, Accept, Accept-Language, Accept-Encoding',
		exposedHeaders: 'Content-Type, Authorization, Accept, Accept-Language, Accept-Encoding',
		maxAge: 3600,
	})
);

app.use(logger('combined', logger_format));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(logMiddleware);

app.use(router);

// error response handler
app.use((err, req, res, next) => {
	res.status(err.status || 500);
	res.json({
		status: false,
		message: err.message,
	});
});

//* 404 Response Handler
app.use((req, res) => {
	const url = req.url;
	const method = req.method;
	res.status(404).json({
		status: false,
		code: 404,
		method,
		url,
		message: 'Not Found!',
	});
});

export default app;

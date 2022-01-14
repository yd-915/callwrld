import 'dotenv/config';
import { Logger } from './core/logger';
import express, { Request, Response, NextFunction } from 'express';
import cookieParser from 'cookie-parser';
import { ExtendedError } from './interfaces';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// INTERNAL ERROR HANDLER
app.use(
	(err: ExtendedError, req: Request, res: Response, next: NextFunction) => {
		const status = err.status || 500;
		const error = { message: err.message };

		if (app.get('env') === 'development')
			Object.assign(error, {
				errors: err.errors,
				stack: err.stack,
				debug: err,
			});

		return res.status(status).json(error);
	}
);

app.listen(process.env.PORT, () => {
	Logger.info('Listening on Port: %d', process.env.PORT || 3000);
});

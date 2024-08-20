import { Logger } from 'tslog';
import { dev } from '$app/environment';

const logger = new Logger({
	name: 'registration-logger',
	type: dev ? 'pretty' : 'json',
	hideLogPositionForProduction: false
});

export default logger;

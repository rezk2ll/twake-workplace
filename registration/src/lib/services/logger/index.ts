import { Logger } from 'tslog';

const logger = new Logger({
	name: 'registration-logger',
	type: 'json',
	hideLogPositionForProduction: false
});

export default logger;

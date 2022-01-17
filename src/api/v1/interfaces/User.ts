import { Snowflake } from './types/Snowflake';

export interface User {
	id: Snowflake;
	email: string;
	username: string;
	password: string;
	flags: UserFlags;
}

export enum UserFlags {
	NONE = 0,
	USER = 1 << 0,
	STAFF = 1 << 1,
}

import { UserType } from './user-type.enum';

export class User {
    userId: number;
    profileId: number;
    username: string;
    email: string;
    fullName: string;
    userType: UserType;
    status: boolean;
}

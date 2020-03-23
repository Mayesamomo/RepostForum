import { UserType } from './user-type.enum';

export class User {
    userId: number;
    profileId: number;
    username: string;
    email: string;
    fullName: string;
    userType: UserType;
    status: boolean;
    authdata?: string;
    public constructor(
        userId: number,
        profileId: number,
        username: string,
        email: string,
        fullName: string,
        userType: UserType,
        status: boolean,
        authdata?: string,
    ) {
        this.userId = userId;
        this.profileId = profileId;
        this.username = username;
        this.email = email;
        this.fullName = fullName;
        this.userType = userType;
        this.authdata = authdata;
    }
}

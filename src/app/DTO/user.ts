import { UserType } from './user-type.enum';

export class User {
    userId: number;
    fullName: string;
    user_name: string;
    email: string;
    password: string;
    userType: UserType;
    status: boolean;
    date: string;
    public constructor(
        userId: number,
        fullName: string,
        user_name: string,
        email: string,
        password: string,
        userType: UserType,
        status: boolean,

    ) {
        this.userId = userId;
        this.user_name = user_name;
        this.email = email;
        this.password= password;
        this.fullName = fullName;
        this.userType = userType;
        this.status = status
    }
}

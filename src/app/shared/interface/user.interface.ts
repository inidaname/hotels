export interface User {
    readonly id?: string;
    fullName: string;
    readonly password?: string;
    email: string;
    phoneNumber: string;
}

export interface UserData extends User {
    readonly message: string;
    readonly token: string;
    readonly timeCreated?: string;
    readonly timeUpdated?: string;
}

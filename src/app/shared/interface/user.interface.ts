export interface User {
    readonly id?: string;
    fullName: string;
    readonly password?: string;
    email: string;
    phoneNumber: string;
    readonly timeCreated?: string;
    readonly timeUpdated?: string;
}
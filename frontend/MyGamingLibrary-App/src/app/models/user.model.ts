

export enum Status {
    ACTIVE = "ACTIVE", 
    FROZEN = "FROZEN"
}

export enum Role {
    ADMIN = "ADMIN",
    USER = "USER"
}

export enum Platform {
    PC = "PC",
    XBOX = "XBOX Series X",
    PS5 = "Playstation 5",
    SWITCH = "Nintendo Switch",
    PS4 = "Playstation 4",
    XBOXONE = "XBOX One",
    PS3 = "Playstation 3",
    XBOX360 = "XBOX 360",
    WIIU = "Wii U",
    WII = "Wii",
    MAC = "Mac",
    NIN3DS = "Nintendo 3DS",
    PSP = "PlayStation Portable",
    PSV = "PlayStation Vita",
    DS = "Nintendo DS",
    OTHER = "Other"
}

export class User {
    
    constructor (
        private _id: number,
        private _name: string,
        private _username: string,
        private _password: string,
        private _status: Status,
        private _favouritePlatform: Platform,
        private _role: Role
    ) {}

    

    public get role(): Role {
        return this._role;
    }
    public set role(value: Role) {
        this._role = value;
    }
    public get favouritePlatform(): Platform {
        return this._favouritePlatform;
    }
    public set favouritePlatform(value: Platform) {
        this._favouritePlatform = value;
    }
    public get status(): Status {
        return this._status;
    }
    public set status(value: Status) {
        this._status = value;
    }
    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }
    public get username(): string {
        return this._username;
    }
    public set username(value: string) {
        this._username = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

}

export interface UserDTO {
    favouritePlatform: Platform,
    name: string,
    password: string,
    role: Role,
    status: Status,
    username: string
}
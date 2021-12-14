
export class GameComment {
    
    constructor (
        private _id: number,
        private _gameId: number,
        private _username: string,
        private _date: Date,
        private _comment: string
    ) {}

    public get comment(): string {
        return this._comment;
    }
    public set comment(value: string) {
        this._comment = value;
    }
    public get date(): Date {
        return this._date;
    }
    public set date(value: Date) {
        this._date = value;
    }
    public get username(): string {
        return this._username;
    }
    public set username(value: string) {
        this._username = value;
    }
    public get gameId(): number {
        return this._gameId;
    }
    public set gameId(value: number) {
        this._gameId = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

}

export interface GameCommentDTO {
    gameId: number,
    username: string,
    date: Date,
    comment: string
}
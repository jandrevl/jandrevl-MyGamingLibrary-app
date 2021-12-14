

export class FavouriteGame {

    constructor(
    private _id: number,
    private _gameId: number,
    private _username: string
    ) {}

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

export interface FavouriteGameDTO {
    gameId: number,
    username: string
}
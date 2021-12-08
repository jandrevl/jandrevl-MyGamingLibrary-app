export class Game {
    
    public set detail(value: string) {
        this._detail = value;
    }

    constructor(
        
        private _id: number,
        private _name: string,
        private _htmlDescription: string,
        private _releaseDate: string,
        private _backgroundImageUrl: string,
        private _screenshots: string[],
        private _detail?: string
    ) {}

    public get screenshots(): string[] {
        return this._screenshots;
    }
    public set screenshots(value: string[]) {
        this._screenshots = value;
    }
    public get backgroundImageUrl(): string {
        return this._backgroundImageUrl;
    }
    public set backgroundImageUrl(value: string) {
        this._backgroundImageUrl = value;
    }
    public get releaseDate(): string {
        return this._releaseDate;
    }
    public set releaseDate(value: string) {
        this._releaseDate = value;
    }
    public get htmlDescription(): string {
        return this._htmlDescription;
    }
    public set htmlDescription(value: string) {
        this._htmlDescription = value;
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
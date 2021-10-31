export class AnimalResponse {
    constructor(private _results: Animal[]) {}

    public get results(): Animal[] {
        return this._results;
    }
    public set results(value: Animal[]) {
        this._results = value;
    }
}

interface Animal {
    name: string,
    age: number,
    type: string,
    id: number,
    available: boolean
}

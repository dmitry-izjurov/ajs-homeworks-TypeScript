export default class Movie {
    constructor(
        readonly год: number,
        readonly страна: string,
        readonly слоган: string,
        readonly жанр: Array<any>,
        readonly время: string
        ) {
    }
}
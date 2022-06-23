export default interface IArticle {
    readonly id?: number;
    readonly title: string;
    readonly description: string;
    readonly readTime: number;
    readonly imageUrl: string;
}
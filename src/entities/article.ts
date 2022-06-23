import type IArticle from './entityTypes/article.types';

export class Article implements IArticle {
   readonly id?: number | undefined;
    readonly title: string;
    readonly description: string;
    readonly readTime: number;
    readonly imageUrl: string;


    constructor (data: IArticle) {
        if (data.id) {
            this.id = data.id
        }

        this.id = data.id;
        this.title = data.title;
        this.description = data.description;
        this.readTime = data.readTime;
        this.imageUrl = data.imageUrl;
    }
}
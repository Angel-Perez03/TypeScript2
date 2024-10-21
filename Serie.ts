export class Serie {
    public id: number;
    public name: string;
    public channel: string;
    public seasons: number;
    public description: string;
    public website: string;
    public imageUrl: string;

    constructor(id: number, name: string, channel: string, seasons: number, description: string, website: string, imageUrl: string) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.website = website;
        this.imageUrl = imageUrl;
    }
}

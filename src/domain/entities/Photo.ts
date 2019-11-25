export class Photo {
  constructor(
    public id: string,
    public albumId: string,
    public title: string,
    public url: string,
    public thumbnailUrl: string,
  ) {
    this.id = id;
    this.albumId = albumId;
    this.title = title;
    this.url = url;
    this.thumbnailUrl = thumbnailUrl;
  }
}

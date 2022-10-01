export class Document {
  id: number;
  title: String;
  content: String;
  thumbnail: String
  published: Boolean;
  createdAt: String;

  constructor() {
    this.id = 0;
    this.title = '';
    this.content = '';
    this.thumbnail = ''
    this.published = true;
    this.createdAt = '';
  }
}

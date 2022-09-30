export class Document {
  id: number;
  title: String;
  content: String;
  published: Boolean;
  createdAt: String;

  constructor() {
    this.id = 0;
    this.title = '';
    this.content = '';
    this.published = true;
    this.createdAt = '';
  }
}

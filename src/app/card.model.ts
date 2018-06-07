export class CardModel {
  public name: string;
  public suite: string;
  public value: number;
  public imagePath: string;


  constructor(name: string, suite: string, value: number, imagePath: string) {
    this.name = name;
    this.suite = suite;
    this.value = value;
    this.imagePath = imagePath;
  }
}

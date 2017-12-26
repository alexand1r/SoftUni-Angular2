export interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  engine: number;
  owner: string;
  image: string;
  createdOn: Date;
  comments: Array<string>;
}

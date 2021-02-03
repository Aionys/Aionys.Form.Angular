import { generateId } from 'src/app/shared/utils/generate-id.util';

export abstract class AbstractModel {
  public id: number;
  public name: string;

  constructor(name: string, id = generateId()) {
    this.name = name;
    this.id = id;
  }
}

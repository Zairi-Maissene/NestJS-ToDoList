import {TodoStatusEnum} from '../src/to-do/todo.model';

export class ModifDTO {
  nom: string;
  description: string;
  dateCreation: Date;
  statut: TodoStatusEnum;
}
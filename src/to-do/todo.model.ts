export enum TodoStatusEnum {
  'actif' = "En cours",
  'waiting' = "En attente",
  'done' = "Finalisé"
}
export class TodoModel {
  id: string;
  nom: string;
  description: string;
  dateCreation: Date;
  statut: string;
}
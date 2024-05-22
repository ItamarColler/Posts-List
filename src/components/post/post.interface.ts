import Entity from "../../entity.interface";

export default interface Post extends Entity {
  comments: number;
  id: number;
  title: string;
  totalComments: number; // TODO: total comments
}

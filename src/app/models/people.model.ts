import { PeopleDetailInterface } from "./people.detail.model";

export interface PeopleInterface {
    page: number;
    results: PeopleDetailInterface[];
  }
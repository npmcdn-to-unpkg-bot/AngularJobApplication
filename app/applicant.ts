import {Employer} from './employer'

export class Applicant {

  constructor(
    public id: number,
    public firstname: string,
    public lastname: string,
    public email: string,
    public telephone: string,
    public address: string,
    public city: string,
    public zipcode: string,
    public citizen: boolean,
    public felon: boolean,
    public feloncomment: string,
    public desiredposition: string,
    public employers: Employer
  ) {  }

}

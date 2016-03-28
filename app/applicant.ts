export class Applicant {

  constructor(
    public id: number,
    public firstname: string,
    public lastname: string,
    public email: string,
    public password: string,
    public telephone: string,
    public address: string,
    public city: string,
    public zipcode: string
  ) {  }

}

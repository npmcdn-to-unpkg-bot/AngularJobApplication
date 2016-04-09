export class Employer {

  constructor(
    public id: number,
    public name: string,
    public position: string,
    public wage: number,
    public permissiontocontact: boolean
  ) { }
}
import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {Applicant}           from './applicant';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ApplicantService {
  constructor (private _http: Http) {}

  /*
  private _applicantsUrl = 'app/applicants.json'; // URL to JSON file
  */

  private _applicantsUrl = 'submit.php';  // URL to web api

  /*getApplicantss () {
    return this.http.get(this._applicantsUrl)
                    .map(res => <Applicant[]> res.json().data)
                    .do(data => console.log(data)) // eyeball results in the console
                    .catch(this.handleError);
  }*/
  
  addApplicant (applicant: Applicant) : Observable<string>  {

    let body = `firstname=${applicant.firstname}
    &lastname=${applicant.lastname}
    &email=${applicant.email}
    &telephone=${applicant.telephone}
    &address=${applicant.address}
    &city=${applicant.city}
    &zipcode=${applicant.zipcode}
    &citizen=${applicant.citizen}
    &felon=${applicant.felon}
    &feloncomment=${applicant.feloncomment}
    &desiredposition=${applicant.desiredposition}
    &desiredwage=${applicant.desiredwage}
    &employername1=${applicant.employers[0].name}
    &employerposition1=${applicant.employers[0].position}
    &employerwage1=${applicant.employers[0].wage}
    &employerpermission1=${applicant.employers[0].permissiontocontact}
    &employername2=${applicant.employers[1].name}
    &employerposition2=${applicant.employers[1].position}
    &employerwage2=${applicant.employers[1].wage}
    &employerpermission2=${applicant.employers[1].permissiontocontact}
    &employername3=${applicant.employers[2].name}
    &employerposition3=${applicant.employers[2].position}
    &employerwage3=${applicant.employers[2].wage}
    &employerpermission3=${applicant.employers[2].permissiontocontact}
    `;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    
    console.log(body);

    return this._http.post(this._applicantsUrl, body, options)
                    .map(res =>  <string> res.json())
                    .catch(this.handleError)
  }

  private handleError (error: Response) {
    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
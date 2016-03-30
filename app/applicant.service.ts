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

    let body = `firstname=${applicant.firstname}&lastname=${applicant.lastname}&email=${applicant.email}&password=${applicant.password}&telephone=${applicant.telephone}&address=${applicant.address}&city=${applicant.city}&zipcode=${applicant.zipcode}`;
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
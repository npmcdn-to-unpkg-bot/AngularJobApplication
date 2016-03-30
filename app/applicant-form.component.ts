import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {NgForm}    from 'angular2/common';
import { Applicant }    from './applicant';
import { ApplicantService } from './applicant.service'

@Component({
  selector: 'applicant-form',
  templateUrl: 'app/applicant-form.component.html',
  providers: [HTTP_PROVIDERS,
      ApplicantService]
})
export class ApplicantFormComponent implements OnInit {
  constructor (private _applicantService: ApplicantService) {}

  applicant = new Applicant(1, "", "", "", "", "", "", "", "");

  errorMessage: string;

  submitted = false;

  onSubmit() { this.submitted = true;
               this._applicantService.addApplicant(this.applicant)
               .subscribe(
                  response  => this.handleResponse(response),
                       error =>  this.errorMessage = <any>error 
               );
               console.log(this.errorMessage);
             }

  ngOnInit() {}

  // Reset the form with a new applicant AND restore 'pristine' class state
  // by toggling 'active' flag which causes the form
  // to be removed/re-added in a tick via NgIf
  // TODO: Workaround until NgForm has a reset method (#6822)
  active = true;

  newApplicant() {
    this.applicant = new Applicant(1, "", "", "", "", "", "", "", "");
    this.active = false;
    setTimeout(()=> this.active=true, 0);
  }
  
  
    handleResponse(response){
      // console.log(`msg is: {response.status}`);
 
      if(response.status =='success'){
        this.newApplicant();
        alert('Thank you for your submission.');
      }
 
      if(response.status =='error'){
        alert('There was a problems with sending your message. Please try to send this email directly until this is fixed. Thanks.');
      }
    }

}
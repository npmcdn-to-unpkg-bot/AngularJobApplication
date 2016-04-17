import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {NgForm}    from 'angular2/common';
import { Applicant }    from './applicant';
import { ApplicantService } from './applicant.service';
import { Employer } from './employer';
import {ReCaptcha, CaptchaService} from './recaptcha'

@Component({
  selector: 'applicant-form',
  templateUrl: 'app/applicant-form.component.html',
  providers: [HTTP_PROVIDERS,
      ApplicantService,
      CaptchaService],
  directives: [ReCaptcha]
})
export class ApplicantFormComponent implements OnInit {
  private siteKey: string;
  constructor (private _applicantService: ApplicantService) {
    this.siteKey = '6LelRR0TAAAAAGwoJdr-e9ylT3p8Us-UxfolvJbd';
  }


  errorMessage: string;

  submitted = false;
  
  positions = ['Line Worker', 'Other'];
  
  employers = [new Employer(1, "", "", "", false),
    new Employer(2, "", "", "", false),
    new Employer(3, "", "", "", false)];
  
  applicant = new Applicant(1, "", "", "", "", "", "", "", false, false, "", this.positions[0], "", this.employers);


  onSubmit() { this.submitted = true;
               this._applicantService.addApplicant(this.applicant)
               .subscribe(
                  response  => this.handleResponse(response),
                  error => this.handleResponse(error)
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
    this.applicant = new Applicant(1, "", "", "", "", "", "", "", false, false, "", this.positions[0], "", this.employers);
    this.active = false;
    setTimeout(()=> this.active=true, 0);
  }
  
  
    handleResponse(response){
      // console.log(`msg is: {response.status}`);
 
      if(response.status =='success'){
        alert('Thank you for your submission.');
      } else if(response.status =='error'){
        alert('Please complete the recapcha by checking the box.');
      } else {
        alert('There was a problems with sending your message. Please try to send this email directly until this is fixed. Thanks.');
      }
    }

}
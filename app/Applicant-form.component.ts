import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import { Applicant }    from './applicant';

@Component({
  selector: 'applicant-form',
  templateUrl: 'app/applicant-form.component.html'
})
export class ApplicantFormComponent {

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Applicant(1, "", "", "", "", "", "", "", "");

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  // Reset the form with a new applicant AND restore 'pristine' class state
  // by toggling 'active' flag which causes the form
  // to be removed/re-added in a tick via NgIf
  // TODO: Workaround until NgForm has a reset method (#6822)
  active = true;

  newApplicant() {
    this.model = new Applicant(1, "", "", "", "", "", "", "", "");
    this.active = false;
    setTimeout(()=> this.active=true, 0);
  }

}
import {Component}         from 'angular2/core';
import {ApplicantFormComponent} from './applicant-form.component'

@Component({
  selector: 'my-app',
  template: '<applicant-form></applicant-form>',
  directives: [ApplicantFormComponent]
})
export class AppComponent { }
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ValidatorPatterns } from '../shared/utils/validator-patterns.util';
import { requiredNoWhitespace } from '../shared/utils/validators.utils';
import { FormService } from './form.service';
import { Branch } from './models/branch.model';
import { Community } from './models/community.model';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public form: FormGroup;

  public readonly BRANCH_FORM_KEY = 'branchId';
  public readonly COMMUNITY_FORM_KEY = 'communityId';
  public readonly FIRST_NAME_FORM_KEY = 'firstName';
  public readonly LAST_NAME_FORM_KEY = 'lastName';
  public readonly DATE_OF_BIRTH_FORM_KEY = 'dateOfBirth';
  public readonly GENDER_FORM_KEY = 'gender';
  public readonly LANGUAGE_FORM_KEY = 'language';
  public readonly EMAIL_FORM_KEY = 'email';
  public readonly PHONE_FORM_KEY = 'phone';

  private _branches: Branch[];
  private _communities: Community[];
  private _gender: string[];
  private _languages: string[];

  get branches(): Branch[] {
    return this._branches;
  }
  get communities(): Community[] {
    return this._communities;
  }
  get gender(): string[] {
    return this._gender;
  }
  get languages(): string[] {
    return this._languages;
  }

  get firstNameControl(): AbstractControl {
    return this.form.get(this.FIRST_NAME_FORM_KEY);
  }
  get communityControl(): AbstractControl {
    return this.form.get(this.COMMUNITY_FORM_KEY);
  }
  get branchControl(): AbstractControl {
    return this.form.get(this.BRANCH_FORM_KEY);
  }
  get lastNameControl(): AbstractControl {
    return this.form.get(this.LAST_NAME_FORM_KEY);
  }
  get genderControl(): AbstractControl {
    return this.form.get(this.GENDER_FORM_KEY);
  }
  get languagesControl(): AbstractControl {
    return this.form.get(this.LANGUAGE_FORM_KEY);
  }
  get phoneControl(): AbstractControl {
    return this.form.get(this.PHONE_FORM_KEY);
  }
  get emailControl(): AbstractControl {
    return this.form.get(this.EMAIL_FORM_KEY);
  }
  get dateOfBirthControl(): AbstractControl {
    return this.form.get(this.DATE_OF_BIRTH_FORM_KEY);
  }

  constructor(
    private readonly fb: FormBuilder,
    private readonly formService: FormService
  ) {}

  ngOnInit(): void {
    this.createForm();

    this.setFormData();
  }

  private createForm(): void {
    this.form = this.fb.group({
      [this.BRANCH_FORM_KEY]: this.fb.control('', Validators.required),
      [this.COMMUNITY_FORM_KEY]: this.fb.control('', Validators.required),
      [this.FIRST_NAME_FORM_KEY]: this.fb.control('', requiredNoWhitespace()),
      [this.LAST_NAME_FORM_KEY]: this.fb.control('', requiredNoWhitespace()),
      [this.DATE_OF_BIRTH_FORM_KEY]: this.fb.control('', Validators.required),
      [this.GENDER_FORM_KEY]: this.fb.control('', Validators.required),
      [this.LANGUAGE_FORM_KEY]: this.fb.control('', Validators.required),
      [this.EMAIL_FORM_KEY]: this.fb.control(
        '',
        Validators.compose([Validators.required, Validators.email])
      ),
      [this.PHONE_FORM_KEY]: this.fb.control(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(ValidatorPatterns.phone),
        ])
      ),
    });
  }

  private getBranches(): void {
    this._branches = this.formService.getBranches();
  }

  private getCommunities(): void {
    this._communities = this.formService.getCommunities();
  }

  private genGender(): void {
    this._gender = this.formService.getGender();
  }

  private getLanguages(): void {
    this._languages = this.formService.getLanguages();
  }

  private setFormData(): void {
    this.getBranches();
    this.getCommunities();
    this.genGender();
    this.getLanguages();
  }

  public resetForm(): void {
    this.form.reset();
  }

  public submitForm(): void {
    if (this.form.invalid) {
      return;
    }

    const formValue = this.form.getRawValue();

    console.log('Form', formValue);
  }
}

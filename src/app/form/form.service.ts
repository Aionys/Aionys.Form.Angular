import { Injectable } from '@angular/core';
import { Branch } from './models/branch.model';
import { Community } from './models/community.model';

@Injectable()
export class FormService {
  private branches: Branch[] = [
    new Branch('Branch 1'),
    new Branch('Branch 2'),
    new Branch('Branch 3'),
  ];

  private communities: Community[] = [
    new Community('Livonia'),
    new Community('Loretta Office'),
    new Community('PgFGM'),
  ];

  private gender = ['Male', 'Female'];
  private languages = ['English', 'Spanish', 'French', 'Russian'];

  getBranches(): Branch[] {
    return [...this.branches];
  }

  getCommunities(): Community[] {
    return [...this.communities];
  }

  getGender(): string[] {
    return [...this.gender];
  }

  getLanguages(): string[] {
    return [...this.languages];
  }
}

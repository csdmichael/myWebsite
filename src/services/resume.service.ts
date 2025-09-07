import { Injectable } from '@angular/core';
import { Resume } from '../models/resume.model';
import { RESUME_DATA } from '../data/resume-data';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private data: Resume = RESUME_DATA;
  constructor() {}
  getResume(): Resume { return this.data; }
}

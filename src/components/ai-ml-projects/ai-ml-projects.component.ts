import { Component, Input, OnInit } from '@angular/core';
import { AIMLProject } from 'src/models/resume.model';

@Component({
  selector: 'app-ai-ml-projects',
  templateUrl: './ai-ml-projects.component.html',
  styleUrls: ['./ai-ml-projects.component.scss'],
  standalone: false
})
export class AiMlProjectsComponent implements OnInit {
  @Input() aiMlProjects: AIMLProject[];
  

  ngOnInit() {
    console.log('AI/ML Projects Component Initialized');
    console.log('AI/ML Projects:', this.aiMlProjects);
  }
}
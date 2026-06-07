import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 px-4 bg-white">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-slate-900 mb-2">Professional Experience</h2>
          <div class="w-20 h-1 bg-teal-500 mx-auto"></div>
        </div>

        <div class="relative">
          <div class="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-teal-200"></div>

          <div *ngFor="let job of data.experience; let i = index" class="mb-12 relative">
            <div class="md:w-1/2" [ngClass]="{'ml-auto md:pl-8': i % 2 === 0, 'md:pr-8': i % 2 === 1}">
              <div class="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-x-1/2 w-4 h-4 bg-teal-500 rounded-full border-4 border-white"></div>

              <div class="bg-slate-50 p-8 rounded-lg border-l-4 border-teal-500">
                <h3 class="text-2xl font-bold text-slate-900 mb-1">{{ job.position }}</h3>
                <p class="text-teal-600 font-semibold mb-2">{{ job.company }}</p>
                <p class="text-slate-500 text-sm mb-4">{{ job.duration }}</p>
                <p class="text-slate-700 leading-relaxed">{{ job.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ExperienceComponent implements OnInit {
  data: any;

  constructor(private portfolioDataService: PortfolioDataService) {
    this.data = this.portfolioDataService.portfolioData;
  }

  ngOnInit(): void {}
}

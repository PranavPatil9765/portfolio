import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 px-4 bg-white">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-slate-900 mb-2">Education</h2>
          <div class="w-20 h-1 bg-teal-500 mx-auto"></div>
        </div>

        <div class="space-y-8">
          <div *ngFor="let edu of data.education" class="p-8 bg-gradient-to-r from-slate-50 to-teal-50 rounded-lg border-l-4 border-teal-500 hover:shadow-lg transition-shadow">
            <div class="flex justify-between items-start mb-2">
              <div>
                <h3 class="text-2xl font-bold text-slate-900">{{ edu.degree }}</h3>
                <p class="text-teal-600 font-semibold text-lg">{{ edu.institution }}</p>
              </div>
              <p class="text-slate-500 font-medium">{{ edu.duration }}</p>
            </div>
            <p class="text-slate-600">{{ edu.location }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class EducationComponent implements OnInit {
  data: any;

  constructor(private portfolioDataService: PortfolioDataService) {
    this.data = this.portfolioDataService.portfolioData;
  }

  ngOnInit(): void {}
}

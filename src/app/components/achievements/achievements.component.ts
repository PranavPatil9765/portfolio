import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 px-4 bg-gradient-to-r from-slate-50 to-teal-50">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-slate-900 mb-2">Achievements & Recognition</h2>
          <div class="w-20 h-1 bg-teal-500 mx-auto"></div>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div *ngFor="let achievement of data.achievements" class="p-6 bg-white rounded-lg shadow-md hover:shadow-lg hover:border-l-4 border-l-4 border-teal-500 transition-all">
            <div class="flex items-start">
              <div class="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
              </div>
              <p class="text-slate-700 font-semibold text-lg">{{ achievement }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class AchievementsComponent implements OnInit {
  data: any;

  constructor(private portfolioDataService: PortfolioDataService) {
    this.data = this.portfolioDataService.portfolioData;
  }

  ngOnInit(): void {}
}

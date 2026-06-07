import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 px-4 bg-white">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-slate-900 mb-2">About Me</h2>
          <div class="w-20 h-1 bg-teal-500 mx-auto"></div>
        </div>

        <div class="grid md:grid-cols-3 gap-8 mb-12">
          <p class="md:col-span-3 text-lg text-slate-700 leading-relaxed text-center">
            {{ data.about.bio }}
          </p>
        </div>

      </div>
    </section>
  `,
  styles: []
})
export class AboutComponent implements OnInit {
  data: any;

  constructor(private portfolioDataService: PortfolioDataService) {
    this.data = this.portfolioDataService.portfolioData;
  }

  ngOnInit(): void {}
}

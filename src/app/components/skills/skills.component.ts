import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
      <div class="max-w-6xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-20">
          <h2 class="text-5xl md:text-6xl font-black mb-4 text-white" style="font-family: 'Plus Jakarta Sans';">
            Skills & <span class="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p class="text-slate-400 text-lg max-w-2xl mx-auto">
            Mastering a diverse tech stack to build scalable, high-performance applications
          </p>
          <div class="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mt-6"></div>
        </div>

        <!-- Skills Grid -->
        <div class="grid md:grid-cols-2 gap-8">
          <div
            *ngFor="let skillGroup of data.skills.technical; let i = index"
            class="p-10 rounded-2xl shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] border bg-gradient-to-br from-slate-800 to-slate-900 border-teal-500/30 hover:shadow-teal-500/20"
          >
            <!-- Header with icon -->
            <div class="flex items-center gap-4 mb-8">
              <div class="p-4 rounded-xl bg-teal-500/20">
                <svg
                  *ngIf="skillGroup.category === 'Frontend'"
                  class="w-8 h-8 text-teal-400"
                  fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"/>
                </svg>
                <svg
                  *ngIf="skillGroup.category === 'Backend'"
                  class="w-8 h-8 text-teal-400"
                  fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"/>
                </svg>
                <svg
                  *ngIf="skillGroup.category === 'Databases'"
                  class="w-8 h-8 text-teal-400"
                  fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"/>
                </svg>
                <svg
                  *ngIf="skillGroup.category === 'Core'"
                  class="w-8 h-8 text-teal-400"
                  fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"/>
                </svg>
              </div>
              <h3 class="text-3xl font-bold text-white" style="font-family: 'Plus Jakarta Sans';">
                {{ skillGroup.category }}
              </h3>
            </div>

            <!-- Skills list -->
            <ul class="space-y-4">
              <li
                *ngFor="let skill of skillGroup.items; let j = index"
                class="flex items-center gap-3 group transition-all duration-300 hover:translate-x-2"
                [style.animation-delay]="(j * 0.1) + 's'"
                style="animation: fadeInUp 0.5s ease-out both"
              >
                <span class="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                <span class="text-lg font-medium text-slate-200 group-hover:text-white transition-colors">
                  {{ skill }}
                </span>
              </li>
            </ul>

            <!-- Footer badge -->
            <div class="mt-8 pt-6 border-t border-teal-500/20">
              <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 text-teal-400 text-sm font-semibold tracking-wide">
                <ng-container [ngSwitch]="skillGroup.category">
                  <ng-container *ngSwitchCase="'Frontend'">🎨 UI/UX Focus</ng-container>
                  <ng-container *ngSwitchCase="'Backend'">⚙️ Server-Side</ng-container>
                  <ng-container *ngSwitchCase="'Databases'">🗄️ Data Storage</ng-container>
                  <ng-container *ngSwitchDefault>🧠 Problem Solving</ng-container>
                </ng-container>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class SkillsComponent implements OnInit {
  data: any;

  constructor(private portfolioDataService: PortfolioDataService) {
    this.data = this.portfolioDataService.portfolioData;
  }

  ngOnInit(): void {}
}

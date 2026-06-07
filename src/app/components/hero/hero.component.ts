import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <!-- Animated background elements -->
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-20 right-20 w-72 h-72 bg-teal-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div class="absolute bottom-20 left-20 w-72 h-72 bg-teal-400 rounded-full blur-3xl opacity-20 animate-pulse" style="animation-delay: 1s;"></div>
      </div>

      <!-- Main content -->
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <!-- Left: Text Content -->
        <div class="text-left">
          <!-- Animated greeting with typewriter -->
          <div class="mb-6 flex items-center gap-3">
            <div class="h-1 w-12 bg-gradient-to-r from-teal-500 to-teal-400"></div>
            <p class="text-teal-400 font-semibold tracking-widest text-sm typewriter">WELCOME TO MY PORTFOLIO</p>
          </div>

          <!-- Name with gradient -->
          <h1 class="text-7xl md:text-8xl font-black mb-4 leading-tight" style="font-family: 'Plus Jakarta Sans';">
            <span class="text-white">Hey, I'm </span>
            <span class="bg-gradient-to-r from-teal-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent">{{ data.hero.name.split(' ')[0] }}</span>
          </h1>

          <!-- Title -->
          <h2 class="text-3xl md:text-4xl font-bold text-teal-400 mb-6" style="font-family: 'Plus Jakarta Sans';">
            {{ data.hero.title }}
          </h2>

          <!-- Tagline (without typewriter) -->
          <p class="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed" style="font-family: 'Plus Jakarta Sans'; font-weight: 500;">
            {{ data.hero.tagline }}
          </p>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-4 mb-10 py-8 border-y border-slate-700">
            <div class="text-center md:text-left">
              <p class="text-3xl font-bold text-teal-400">500+</p>
              <p class="text-slate-400 text-sm">DSA Problems</p>
            </div>
            <div class="text-center md:text-left">
              <p class="text-3xl font-bold text-teal-400">3</p>
              <p class="text-slate-400 text-sm">Major Projects</p>
            </div>
            <div class="text-center md:text-left">
              <p class="text-3xl font-bold text-teal-400">100%</p>
              <p class="text-slate-400 text-sm">Dedication</p>
            </div>
          </div>

          <!-- Social links -->
          <div class="flex gap-4 mt-8 flex-wrap">
            <a href="https://github.com/PranavPatil9765" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-teal-400 transition-colors text-lg font-semibold flex items-center gap-2 hover:scale-110">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/pranav-patil-87397028b" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-teal-400 transition-colors text-lg font-semibold flex items-center gap-2 hover:scale-110">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
              LinkedIn
            </a>
            <a href="https://leetcode.com/u/Pranav_9765/" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-teal-400 transition-colors text-lg font-semibold flex items-center gap-2 hover:scale-110">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M13.483 0a1.374 1.374 0 00-.461.053.976.976 0 00-.681.634l-.04.133.009.2a.976.976 0 00.18.643l.04.133.674 1.144.04.133a.974.974 0 001.154.292l.066-.035a.316.316 0 00.1-.035l.031-.016a.974.974 0 00.707-1.264L13.483 0zm10.89 3.9l-1.251 1.991a.365.365 0 01-.102.11l-.026.02a.276.276 0 01-.57-.165l.244-3.075c0-.036 0-.089.013-.152a.868.868 0 011.234-.724l.04.011a.276.276 0 01.121.445z"/></svg>
              LeetCode
            </a>
            <a href="https://www.codechef.com/users/pranavpatil221" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-teal-400 transition-colors text-lg font-semibold flex items-center gap-2 hover:scale-110">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1C6.477 1 2 5.477 2 11s4.477 10 10 10 10-4.477 10-10S17.523 1 12 1zm0 2c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zm0 2a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3z"/></svg>
              CodeChef
            </a>
          </div>
        </div>

        <!-- Right: Profile Picture Section -->
        <div class="flex justify-center items-center relative">
          <!-- Glowing border -->
          <div class="absolute inset-0 bg-gradient-to-r from-teal-500 via-teal-400 to-cyan-500 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>

          <!-- Picture container -->
          <div class="relative w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden border-4 border-teal-500/50 shadow-2xl backdrop-blur-sm">
            <!-- Placeholder with gradient -->
            <div class="w-full h-full bg-gradient-to-br from-slate-800 via-teal-900 to-slate-800 flex items-center justify-center relative group">
              <!-- Image -->
              <img
                src="profile.jpg"
                alt="Pranav Patil - Profile Picture"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <!-- Overlay on hover -->
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                <p class="text-white font-bold text-center text-lg">Full Stack Developer</p>
              </div>
            </div>

            <!-- Decorative elements -->
            <div class="absolute -top-2 -right-2 w-20 h-20 border-t-2 border-r-2 border-teal-400 rounded-tr-3xl"></div>
            <div class="absolute -bottom-2 -left-2 w-20 h-20 border-b-2 border-l-2 border-teal-400 rounded-bl-3xl"></div>
          </div>

          <!-- Floating badges -->
          <div class="absolute -bottom-8 left-8 bg-slate-900 border-2 border-teal-500 px-6 py-3 rounded-full shadow-lg backdrop-blur-sm">
            <p class="text-white font-bold text-sm">🏆 SIH 2024 Winner</p>
          </div>
          <div class="absolute -top-8 right-8 bg-slate-900 border-2 border-teal-500 px-6 py-3 rounded-full shadow-lg backdrop-blur-sm">
            <p class="text-white font-bold text-sm">⭐ 4-Star CodeChef</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class HeroComponent implements OnInit {
  data: any;

  constructor(private portfolioDataService: PortfolioDataService) {
    this.data = this.portfolioDataService.portfolioData;
  }

  ngOnInit(): void {}
}


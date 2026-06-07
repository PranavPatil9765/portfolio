import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="fixed top-0 left-0 right-0 bg-slate-900 bg-opacity-95 backdrop-blur-sm z-50 shadow-lg">
      <nav class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" class="text-2xl font-bold text-teal-400">Portfolio</a>

        <ul class="hidden md:flex gap-8">
          <li><a href="#home" class="text-slate-300 hover:text-teal-400 transition-colors font-medium">Home</a></li>
          <li><a href="#about" class="text-slate-300 hover:text-teal-400 transition-colors font-medium">About</a></li>
          <li><a href="#skills" class="text-slate-300 hover:text-teal-400 transition-colors font-medium">Skills</a></li>
          <li><a href="#experience" class="text-slate-300 hover:text-teal-400 transition-colors font-medium">Experience</a></li>
          <li><a href="#projects" class="text-slate-300 hover:text-teal-400 transition-colors font-medium">Projects</a></li>
          <li><a href="#education" class="text-slate-300 hover:text-teal-400 transition-colors font-medium">Education</a></li>
          <li><a href="#achievements" class="text-slate-300 hover:text-teal-400 transition-colors font-medium">Achievements</a></li>
          <li><a href="#contact" class="text-slate-300 hover:text-teal-400 transition-colors font-medium">Contact</a></li>
        </ul>

        <button class="md:hidden text-slate-300 hover:text-teal-400">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </nav>
    </header>
  `,
  styles: []
})
export class HeaderComponent {}

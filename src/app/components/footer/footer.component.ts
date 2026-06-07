import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-slate-900 text-slate-400 py-8">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <p class="text-sm">Designed and developed with care.</p>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {}

import { Component, OnInit, HostListener, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EducationComponent } from './components/education/education.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    EducationComponent,
    AchievementsComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <app-header></app-header>
    <main class="pt-16" #mainContent>
      <section id="home">
        <app-hero></app-hero>
      </section>
      <section id="about">
        <app-about></app-about>
      </section>
      <section id="skills">
        <app-skills></app-skills>
      </section>
      <section id="experience">
        <app-experience></app-experience>
      </section>
      <section id="projects">
        <app-projects></app-projects>
      </section>
      <section id="education">
        <app-education></app-education>
      </section>
      <section id="achievements">
        <app-achievements></app-achievements>
      </section>
      <section id="contact">
        <app-contact></app-contact>
      </section>
    </main>
    <app-footer></app-footer>
  `,
  styles: []
})
export class App implements OnInit {
  @ViewChildren('mainContent') mainContent!: QueryList<ElementRef>;

  ngOnInit(): void {
    this.handleScroll();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.handleScroll();
  }

  private handleScroll(): void {
    const sections = document.querySelectorAll('main section');
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + scrollY;
      const sectionHeight = rect.height;

      // Calculate scroll progress - how much the section is being scrolled
      const scrollDist = scrollY - (sectionTop - windowHeight);
      const progress = Math.min(Math.max(scrollDist / (windowHeight * 0.5), 0), 1);

      // Apply subtle scroll animation without narrowing
      // Only opacity change - no transforms that would narrow sections
      const opacityValue = 0.95 + progress * 0.05;

      if (rect.top < windowHeight && rect.bottom > 0) {
        // Section is visible
        const element = section as HTMLElement;
        element.style.transform = `none`;
        element.style.opacity = String(opacityValue);
      }
    });
  }
}

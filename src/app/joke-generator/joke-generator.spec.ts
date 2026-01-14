import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeGenerator } from './joke-generator';

describe('JokeGenerator', () => {
  let component: JokeGenerator;
  let fixture: ComponentFixture<JokeGenerator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JokeGenerator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JokeGenerator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

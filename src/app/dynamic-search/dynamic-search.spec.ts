import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSearch } from './dynamic-search';

describe('DynamicSearch', () => {
  let component: DynamicSearch;
  let fixture: ComponentFixture<DynamicSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicSearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

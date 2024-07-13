import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchmetroComponent } from './searchmetro.component';

describe('SearchmetroComponent', () => {
  let component: SearchmetroComponent;
  let fixture: ComponentFixture<SearchmetroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchmetroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchmetroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

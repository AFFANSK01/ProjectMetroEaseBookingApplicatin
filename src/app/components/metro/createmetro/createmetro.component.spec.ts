import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatemetroComponent } from './createmetro.component';

describe('CreatemetroComponent', () => {
  let component: CreatemetroComponent;
  let fixture: ComponentFixture<CreatemetroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatemetroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatemetroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

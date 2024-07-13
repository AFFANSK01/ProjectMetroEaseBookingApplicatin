import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemetroComponent } from './updatemetro.component';

describe('UpdatemetroComponent', () => {
  let component: UpdatemetroComponent;
  let fixture: ComponentFixture<UpdatemetroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatemetroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatemetroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

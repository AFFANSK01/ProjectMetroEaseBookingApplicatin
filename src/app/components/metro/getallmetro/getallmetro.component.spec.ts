import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallmetroComponent } from './getallmetro.component';

describe('GetallmetroComponent', () => {
  let component: GetallmetroComponent;
  let fixture: ComponentFixture<GetallmetroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetallmetroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetallmetroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

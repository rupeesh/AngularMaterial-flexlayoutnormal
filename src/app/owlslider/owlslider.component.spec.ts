import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwlsliderComponent } from './owlslider.component';

describe('OwlsliderComponent', () => {
  let component: OwlsliderComponent;
  let fixture: ComponentFixture<OwlsliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwlsliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwlsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

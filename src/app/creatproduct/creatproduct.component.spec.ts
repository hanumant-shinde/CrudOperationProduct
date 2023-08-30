import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatproductComponent } from './creatproduct.component';

describe('CreatproductComponent', () => {
  let component: CreatproductComponent;
  let fixture: ComponentFixture<CreatproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatproductComponent]
    });
    fixture = TestBed.createComponent(CreatproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

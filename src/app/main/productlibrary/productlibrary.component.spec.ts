import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlibraryComponent } from './productlibrary.component';

describe('ProductlibraryComponent', () => {
  let component: ProductlibraryComponent;
  let fixture: ComponentFixture<ProductlibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductlibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductlibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

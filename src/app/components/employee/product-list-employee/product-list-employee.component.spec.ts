import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListEmployeeComponent } from './product-list-employee.component';




describe('ProductListEmployeeComponent', () => {
  let component: ProductListEmployeeComponent;
  let fixture: ComponentFixture<ProductListEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

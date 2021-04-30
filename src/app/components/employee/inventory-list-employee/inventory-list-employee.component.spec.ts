import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InventoryListEmployeeComponent } from './inventory-list-employee.component';




describe('InventoryListEmployeeComponent', () => {
  let component: InventoryListEmployeeComponent;
  let fixture: ComponentFixture<InventoryListEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryListEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryListEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

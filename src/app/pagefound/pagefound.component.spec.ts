import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagefoundComponent } from './pagefound.component';

describe('PagefoundComponent', () => {
  let component: PagefoundComponent;
  let fixture: ComponentFixture<PagefoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagefoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagefoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

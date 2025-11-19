import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOrderButton } from './details-order-button';

describe('DetailsOrderButton', () => {
  let component: DetailsOrderButton;
  let fixture: ComponentFixture<DetailsOrderButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsOrderButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsOrderButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

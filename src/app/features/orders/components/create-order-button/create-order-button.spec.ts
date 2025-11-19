import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { CreateOrderButton } from './create-order-button';

describe('CreateOrderButton', () => {
  let component: CreateOrderButton;
  let fixture: ComponentFixture<CreateOrderButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateOrderButton],
      providers: [provideZonelessChangeDetection(), provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateOrderButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

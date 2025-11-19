import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { DetailsOrderButton } from './details-order-button';
import { signal } from '@angular/core';

describe('DetailsOrderButton', () => {
  let component: DetailsOrderButton;
  let fixture: ComponentFixture<DetailsOrderButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsOrderButton],
      providers: [provideZonelessChangeDetection(), provideHttpClient()]
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

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ConfirmPopupModule, ToastModule],
  providers: [ConfirmationService, MessageService],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'jama-pay-front';
}

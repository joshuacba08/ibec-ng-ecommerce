import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  // declaro variables o propiedades de la clase
  @Input() title: string = 'Title';
  @Input() disabled: boolean = false;
  @Input() type: string = 'primary';
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() name: string = '';
  @Input() logo: string = '';
  @Input() label: string = '';
  @Input() showButton: boolean = true;
  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClickButton(): void {
    this.onClick.emit();
  }

}

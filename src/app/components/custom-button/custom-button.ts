import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger';
export type ButtonSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'p-button-2',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
})
export class CustomButtonComponent {
  /** Текст на кнопке */
  @Input() label: string = 'Button';

  /** Вариант отображения кнопки (цвет) */
  @Input() variant: ButtonVariant = 'primary';

  /** Размер кнопки */
  @Input() size: ButtonSize = 'medium';

  /** Заблокирована ли кнопка */
  @Input() disabled: boolean = false;

  /** Состояние загрузки (показывает спиннер) */
  @Input() loading: boolean = false;

  /** Показывать иконку (автоматически слева) */
  @Input() showIcon: boolean = false;

  /** Событие клика */
  @Output() click = new EventEmitter<Event>();

  /** Outline вариант */
  @Input() outlined: boolean = false;

  onClick(event: Event): void {
    if (!this.disabled && !this.loading) {
      this.click.emit(event);
    }
  }

  getSeverity() {
    return this.variant as any;
  }

  // Логика: если loading, иконка не показывается
  get displayIcon(): string | undefined {
    if (this.loading) return undefined;
    return this.showIcon ? 'pi pi-check' : undefined;
  }

  // Логика: loading иконка
  get loadingIcon(): string | undefined {
    return this.loading ? 'pi pi-spin pi-spinner' : undefined;
  }
}

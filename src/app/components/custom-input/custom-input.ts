import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

export type InputSize = 'small' | 'medium' | 'large';
export type InputVariant = 'outlined' | 'filled';
export type FloatLabelVariant = 'in' | 'over' | 'on';

@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    FloatLabelModule,
    InputIconModule,
    IconFieldModule
  ],
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
})
export class CustomInputComponent {
  // ========== СВОЙСТВА ==========

  @Input() value: string = '';
  @Input() variantLabel: FloatLabelVariant = 'over';
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() size: InputSize = 'medium';
  @Input() variant: InputVariant = 'outlined';
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() required: boolean = false;
  @Input() invalid: boolean = false;
  @Input() errorMessage: string = '';
  @Input() type: string = 'text';
  @Input() showClearButton: boolean = false;

  /** Максимальная длина (null = без ограничений) */
  @Input() maxLength: number | null = null;

  @Input() showCharacterCount: boolean = false;
  @Input() iconLeft: string = '';
  @Input() iconRight: string = '';

  // ========== СОБЫТИЯ ==========

  @Output() valueChange = new EventEmitter<string>();
  @Output() onBlur = new EventEmitter<Event>();
  @Output() onFocus = new EventEmitter<Event>();
  @Output() onClear = new EventEmitter<void>();

  // ========== СОСТОЯНИЯ ==========

  isFocused: boolean = false;
  @ViewChild('inputElement') inputElement?: ElementRef<HTMLInputElement>;

  // ========== МЕТОДЫ ==========

  onValueChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.valueChange.emit(this.value);
  }

  handleBlur(event: Event) {
    this.isFocused = false;
    this.onBlur.emit(event);
  }

  handleFocus(event: Event) {
    this.isFocused = true;
    this.onFocus.emit(event);
  }

  clearValue() {
    this.value = '';
    this.valueChange.emit(this.value);
    this.onClear.emit();
    this.inputElement?.nativeElement.focus();
  }

  // ========== ГЕТТЕРЫ (ИСПРАВЛЕННЫЕ) ==========

  get shouldShowClearButton(): boolean {
    return (
      this.showClearButton &&
      this.value.length > 0 &&
      !this.disabled &&
      !this.readonly
    );
  }

  get currentLength(): number {
    return this.value.length;
  }

  /**
   * Текст счётчика символов
   */
  get characterCountText(): string {
    // ✅ ИСПРАВЛЕНИЕ: Используем != для проверки и null, и undefined
    if (this.maxLength != null) {
      //               ^^
      //  Проверяет: !== null && !== undefined
      return `${this.currentLength} / ${this.maxLength}`;
    }
    return `${this.currentLength}`;
  }

  /**
   * Достигнут ли лимит символов
   */
  get isAtMaxLength(): boolean {
    // ✅ ИСПРАВЛЕНИЕ: Используем != для проверки и null, и undefined
    return (
      this.maxLength != null &&
      //             ^^
      //  После этой проверки TypeScript знает: this.maxLength это number!
      this.currentLength >= this.maxLength
    );
  }
}

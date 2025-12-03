import type { Meta, StoryObj } from '@storybook/angular';
import { CustomInputComponent } from '../app/components/custom-input/custom-input';

// ========== МЕТАДАННЫЕ ==========

const meta: Meta<CustomInputComponent> = {
  title: 'Components/CustomInput',
  component: CustomInputComponent,
  tags: ['autodocs'],

  // Настройка контролов в панели Storybook
  argTypes: {
    // === ОСНОВНЫЕ СВОЙСТВА ===
    value: {
      control: 'text',
      description: 'Текущее значение инпута',
      table: {
        category: 'Данные',
        defaultValue: { summary: '' },
      },
    },
    label: {
      control: 'text',
      description: 'Текст label (если пусто — FloatLabel не показывается)',
      table: {
        category: 'Контент',
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder текст',
      table: {
        category: 'Контент',
      },
    },

    // === ВНЕШНИЙ ВИД ===
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Размер инпута',
      table: {
        category: 'Внешний вид',
        defaultValue: { summary: 'medium' },
      },
    },
    variant: {
      control: 'select',
      options: ['outlined', 'filled'],
      description: 'Вариант отображения (контур или заливка)',
      table: {
        category: 'Внешний вид',
        defaultValue: { summary: 'outlined' },
      },
    },
    variantLabel: {
      control: 'select',
      options: ['in', 'over', 'on'],
      description: 'Вариант FloatLabel: in (внутри), over (сверху), on (на границе)',
      table: {
        category: 'Внешний вид',
        defaultValue: { summary: 'over' },
      },
    },

    // === СОСТОЯНИЯ ===
    disabled: {
      control: 'boolean',
      description: 'Заблокирован ли инпут',
      table: {
        category: 'Состояния',
        defaultValue: { summary: 'false' },
      },
    },
    readonly: {
      control: 'boolean',
      description: 'Только для чтения',
      table: {
        category: 'Состояния',
        defaultValue: { summary: 'false' },
      },
    },
    required: {
      control: 'boolean',
      description: 'Обязательное поле',
      table: {
        category: 'Состояния',
        defaultValue: { summary: 'false' },
      },
    },
    invalid: {
      control: 'boolean',
      description: 'Состояние ошибки',
      table: {
        category: 'Состояния',
        defaultValue: { summary: 'false' },
      },
    },

    // === ДОПОЛНИТЕЛЬНЫЕ ФИЧИ ===
    showClearButton: {
      control: 'boolean',
      description: 'Показать кнопку очистки (✕)',
      table: {
        category: 'Фичи',
        defaultValue: { summary: 'false' },
      },
    },
    showCharacterCount: {
      control: 'boolean',
      description: 'Показать счётчик символов',
      table: {
        category: 'Фичи',
        defaultValue: { summary: 'false' },
      },
    },
    maxLength: {
      control: 'number',
      description: 'Максимальная длина (null = без ограничений)',
      table: {
        category: 'Фичи',
        defaultValue: { summary: 'null' },
      },
    },

    // === ИКОНКИ ===
    iconLeft: {
      control: 'text',
      description: 'Иконка слева (например: pi-search, pi-user)',
      table: {
        category: 'Иконки',
      },
    },
    iconRight: {
      control: 'text',
      description: 'Иконка справа (например: pi-envelope, pi-check)',
      table: {
        category: 'Иконки',
      },
    },

    // === СООБЩЕНИЯ ===
    errorMessage: {
      control: 'text',
      description: 'Текст ошибки (показывается если invalid = true)',
      table: {
        category: 'Сообщения',
      },
    },

    // === ТИП ===
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'tel', 'url', 'search'],
      description: 'HTML тип инпута',
      table: {
        category: 'Технические',
        defaultValue: { summary: 'text' },
      },
    },

    // === СОБЫТИЯ ===
    valueChange: {
      action: 'valueChanged',
      description: 'Событие изменения значения',
      table: {
        category: 'События',
      },
    },
    onBlur: {
      action: 'blurred',
      description: 'Событие потери фокуса',
      table: {
        category: 'События',
      },
    },
    onFocus: {
      action: 'focused',
      description: 'Событие получения фокуса',
      table: {
        category: 'События',
      },
    },
    onClear: {
      action: 'cleared',
      description: 'Событие очистки (кнопка ✕)',
      table: {
        category: 'События',
      },
    },
  },
};

export default meta;
type Story = StoryObj<CustomInputComponent>;

// ========== БАЗОВЫЕ ПРИМЕРЫ ==========

/**
 * Базовый пример с label и placeholder
 */
export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'Введите email',
    value: '',
  },
};

/**
 * Инпут с заполненным значением
 */
export const WithValue: Story = {
  args: {
    label: 'Username',
    placeholder: 'Введите имя пользователя',
    value: 'JohnDoe',
  },
};

/**
 * Инпут без label (только placeholder)
 */
export const WithoutLabel: Story = {
  args: {
    placeholder: 'Поиск...',
    value: '',
  },
};

// ========== РАЗМЕРЫ ==========

/**
 * Маленький размер
 */
export const Small: Story = {
  args: {
    label: 'Small Input',
    placeholder: 'Маленький инпут',
    size: 'small',
  },
};

/**
 * Средний размер (по умолчанию)
 */
export const Medium: Story = {
  args: {
    label: 'Medium Input',
    placeholder: 'Средний инпут',
    size: 'medium',
  },
};

/**
 * Большой размер
 */
export const Large: Story = {
  args: {
    label: 'Large Input',
    placeholder: 'Большой инпут',
    size: 'large',
  },
};

// ========== ВАРИАНТЫ FLOATLABEL ==========

/**
 * Label всегда сверху
 */
export const FloatLabelOver: Story = {
  args: {
    label: 'Float Label Over',
    placeholder: 'Label сверху',
    variantLabel: 'over',
  },
};

/**
 * Label внутри поля (исчезает при фокусе)
 */
export const FloatLabelIn: Story = {
  args: {
    label: 'Float Label In',
    placeholder: 'Label внутри',
    variantLabel: 'in',
  },
};

/**
 * Label на границе поля (Material Design стиль)
 */
export const FloatLabelOn: Story = {
  args: {
    label: 'Float Label On',
    placeholder: 'Label на границе',
    variantLabel: 'on',
  },
};

// ========== ВАРИАНТЫ ОТОБРАЖЕНИЯ ==========

/**
 * Outlined вариант (контур)
 */
export const Outlined: Story = {
  args: {
    label: 'Outlined',
    placeholder: 'С контуром',
    variant: 'outlined',
  },
};

// ========== СОСТОЯНИЯ ==========

/**
 * Заблокированный инпут
 */
export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'Заблокировано',
    value: 'Нельзя редактировать',
    disabled: true,
  },
};

/**
 * Только для чтения
 */
export const ReadOnly: Story = {
  args: {
    label: 'Read Only',
    value: 'Только для чтения',
    readonly: true,
  },
};

/**
 * Обязательное поле
 */
export const Required: Story = {
  args: {
    label: 'Обязательное поле *',
    placeholder: 'Введите значение',
    required: true,
  },
};

/**
 * Ошибка с пустым полем
 */
export const InvalidEmpty: Story = {
  args: {
    label: 'Обязательное поле',
    value: '',
    invalid: true,
    errorMessage: 'Поле обязательно для заполнения',
  },
};

// ========== КНОПКА ОЧИСТКИ ==========

/**
 * Инпут с кнопкой очистки
 */
export const WithClearButton: Story = {
  args: {
    label: 'Search',
    placeholder: 'Начните вводить...',
    value: 'Текст для очистки',
    showClearButton: true,
  },
};

/**
 * Кнопка очистки без label
 */
export const ClearButtonNoLabel: Story = {
  args: {
    placeholder: 'Поиск...',
    value: 'Запрос',
    showClearButton: true,
  },
};

// ========== СЧЁТЧИК СИМВОЛОВ ==========

/**
 * Счётчик символов (без лимита)
 */
export const WithCharacterCount: Story = {
  args: {
    label: 'Описание',
    placeholder: 'Введите описание',
    value: 'Пример текста',
    showCharacterCount: true,
  },
};

/**
 * Счётчик с максимальной длиной
 */
export const WithMaxLength: Story = {
  args: {
    label: 'Твит',
    placeholder: 'Что нового?',
    value: 'Изучаю Angular и Storybook',
    maxLength: 280,
    showCharacterCount: true,
  },
};

/**
 * Достигнут лимит символов
 */
export const MaxLengthReached: Story = {
  args: {
    label: 'Короткий текст',
    value: '12345',
    maxLength: 5,
    showCharacterCount: true,
  },
};

/**
 * Превышен лимит (счётчик краснеет)
 */
export const MaxLengthExceeded: Story = {
  args: {
    label: 'Ограничение 10 символов',
    value: 'Это очень длинный текст',
    maxLength: 10,
    showCharacterCount: true,
    invalid: true,
    errorMessage: 'Превышен лимит символов',
  },
};

// ========== ИКОНКИ ==========

/**
 * Иконка слева (поиск)
 */
export const WithIconLeft: Story = {
  args: {
    label: 'Поиск',
    placeholder: 'Искать...',
    iconLeft: 'pi-search',
  },
};

/**
 * Иконка справа (email)
 */
export const WithIconRight: Story = {
  args: {
    label: 'Email',
    placeholder: 'example@mail.com',
    iconRight: 'pi-envelope',
  },
};

/**
 * Иконки с обеих сторон
 */
export const WithBothIcons: Story = {
  args: {
    label: 'Username',
    placeholder: 'Введите имя',
    value: 'JohnDoe',
    iconLeft: 'pi-user',
    iconRight: 'pi-check',
  },
};

/**
 * Иконка слева + кнопка очистки
 */
export const IconAndClear: Story = {
  args: {
    label: 'Поиск',
    placeholder: 'Поиск товаров...',
    value: 'Ноутбук',
    iconLeft: 'pi-search',
    showClearButton: true,
  },
};

// ========== ТИПЫ ИНПУТОВ ==========

/**
 * Тип: password
 */
export const TypePassword: Story = {
  args: {
    label: 'Пароль',
    type: 'password',
    value: 'secret123',
    iconLeft: 'pi-lock',
  },
};

/**
 * Тип: email
 */
export const TypeEmail: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'example@mail.com',
    iconLeft: 'pi-at',
  },
};

/**
 * Тип: number
 */
export const TypeNumber: Story = {
  args: {
    label: 'Возраст',
    type: 'number',
    placeholder: '18',
  },
};

/**
 * Тип: tel
 */
export const TypeTel: Story = {
  args: {
    label: 'Телефон',
    type: 'tel',
    placeholder: '+7 (999) 123-45-67',
    iconLeft: 'pi-phone',
  },
};

/**
 * Тип: search
 */
export const TypeSearch: Story = {
  args: {
    type: 'search',
    placeholder: 'Поиск...',
    iconLeft: 'pi-search',
    showClearButton: true,
  },
};

// ========== КОМПЛЕКСНЫЕ ПРИМЕРЫ ==========

/**
 * Поиск с иконкой и очисткой
 */
export const SearchComplete: Story = {
  args: {
    label: 'Поиск товаров',
    placeholder: 'Введите название товара',
    value: 'Ноутбук Lenovo',
    iconLeft: 'pi-search',
    showClearButton: true,
    size: 'large',
  },
};

/**
 * Твит (Twitter-подобный инпут)
 */
export const TweetInput: Story = {
  args: {
    label: 'Новый твит',
    placeholder: 'Что происходит?',
    value: 'Изучаю Angular и Storybook! 🚀 #webdev',
    maxLength: 280,
    showCharacterCount: true,
    showClearButton: true,
  },
};

/**
 * Email с валидацией
 */
export const EmailWithValidation: Story = {
  args: {
    label: 'Email',
    type: 'email',
    value: 'invalid-email',
    placeholder: 'example@mail.com',
    iconLeft: 'pi-envelope',
    invalid: true,
    errorMessage: 'Введите корректный email адрес',
    showClearButton: true,
  },
};

// ========== ВАЛИДАЦИЯ ========== ⭐

export const Invalid: Story = {
  name: 'С ошибкой',
  args: {
    label: 'Email',
    value: 'invalid-email',
    invalid: true,
    errorMessage: 'Введите корректный email адрес',
  },
  parameters: {
    docs: {
      description: {
        story: 'Инпут с ошибкой валидации. Показывается красная обводка и сообщение об ошибке.',
      },
    },
  },
};

export const InvalidRequired: Story = {
  name: 'Ошибка: пустое обязательное поле',
  args: {
    label: 'Имя *',
    value: '',
    required: true,
    invalid: true,
    errorMessage: 'Это поле обязательно для заполнения',
  },
  parameters: {
    docs: {
      description: {
        story: 'Пример валидации обязательного поля, которое не заполнено.',
      },
    },
  },
};

export const InvalidEmail: Story = {
  name: 'Ошибка: некорректный email',
  args: {
    label: 'Email',
    type: 'email',
    value: 'not-an-email',
    invalid: true,
    errorMessage: 'Пожалуйста, введите корректный email адрес',
  },
  parameters: {
    docs: {
      description: {
        story: 'Валидация email адреса. Показывается, когда формат email некорректный.',
      },
    },
  },
};

export const InvalidPassword: Story = {
  name: 'Ошибка: слабый пароль',
  args: {
    label: 'Пароль',
    type: 'password',
    value: '123',
    invalid: true,
    errorMessage: 'Пароль должен содержать минимум 8 символов',
  },
  parameters: {
    docs: {
      description: {
        story: 'Валидация пароля. Показывается, когда пароль не соответствует требованиям.',
      },
    },
  },
};

export const InvalidMinLength: Story = {
  name: 'Ошибка: слишком короткий текст',
  args: {
    label: 'Описание',
    value: 'abc',
    invalid: true,
    errorMessage: 'Минимальная длина — 10 символов (введено: 3)',
  },
  parameters: {
    docs: {
      description: {
        story: 'Валидация минимальной длины текста.',
      },
    },
  },
};

export const InvalidMaxLength: Story = {
  name: 'Ошибка: слишком длинный текст',
  args: {
    label: 'Имя пользователя',
    value: 'VeryLongUsernameExampleThatExceedsLimit',
    invalid: true,
    errorMessage: 'Максимальная длина — 20 символов',
  },
  parameters: {
    docs: {
      description: {
        story: 'Валидация максимальной длины текста.',
      },
    },
  },
};

// ========== ВАРИАНТЫ ==========

export const Filled: Story = {
  args: {
    label: 'Заполненный стиль',
    variant: 'filled',
    placeholder: 'Filled variant',
  },
};

export const FilledWithError: Story = {
  name: 'Filled с ошибкой',
  args: {
    label: 'Email',
    variant: 'filled',
    value: 'wrong@',
    invalid: true,
    errorMessage: 'Некорректный формат email',
  },
  parameters: {
    docs: {
      description: {
        story: 'Filled вариант инпута с ошибкой валидации.',
      },
    },
  },
};

// ========== КОМБИНАЦИИ ========== ⭐

export const SuccessState: Story = {
  name: 'Успешная валидация',
  args: {
    label: 'Email',
    type: 'email',
    value: 'user@example.com',
    invalid: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Инпут с корректным значением после валидации.',
      },
    },
  },
};

export const ValidationExample: Story = {
  name: 'Пример: форма регистрации',
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
        <app-custom-input
          label="Имя *"
          [value]="''"
          [required]="true"
          [invalid]="true"
          errorMessage="Имя обязательно для заполнения">
        </app-custom-input>

        <app-custom-input
          label="Email *"
          type="email"
          [value]="'invalid-email'"
          [required]="true"
          [invalid]="true"
          errorMessage="Введите корректный email адрес">
        </app-custom-input>

        <app-custom-input
          label="Пароль *"
          type="password"
          [value]="'123'"
          [required]="true"
          [invalid]="true"
          errorMessage="Пароль должен содержать минимум 8 символов">
        </app-custom-input>

        <app-custom-input
          label="Телефон"
          type="tel"
          [value]="'+7 (999) 123-45-67'"
          [invalid]="false">
        </app-custom-input>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Пример формы регистрации с различными состояниями валидации.',
      },
    },
  },
};

/**
 * Пароль с требованиями
 */
export const PasswordWithValidation: Story = {
  args: {
    label: 'Пароль',
    type: 'password',
    value: '123',
    placeholder: 'Минимум 8 символов',
    iconLeft: 'pi-lock',
    maxLength: 32,
    showCharacterCount: true,
    invalid: true,
    errorMessage: 'Пароль должен содержать минимум 8 символов',
  },
};

/**
 * Комментарий с лимитом
 */
export const CommentInput: Story = {
  args: {
    label: 'Комментарий',
    placeholder: 'Оставьте ваш отзыв',
    value: 'Отличный продукт!',
    maxLength: 500,
    showCharacterCount: true,
    showClearButton: true,
    size: 'large',
  },
};

/**
 * Все фичи вместе
 */
export const KitchenSink: Story = {
  args: {
    label: 'Полный пример',
    placeholder: 'Все возможности',
    value: 'Демонстрация всех фичей',
    iconLeft: 'pi-star',
    showClearButton: true,
    maxLength: 100,
    showCharacterCount: true,
    size: 'large',
    variantLabel: 'over',
  },
};

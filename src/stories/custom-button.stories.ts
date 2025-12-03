import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { fn } from 'storybook/test';
import { CustomButtonComponent } from '../app/components/custom-button/custom-button';

const meta: Meta<CustomButtonComponent> = {
  title: 'Components/Button',
  component: CustomButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [CustomButtonComponent],
    }),
  ],
  tags: ['autodocs'],

  parameters: {
    docs: {
      description: {
        component:
          '**Компонент кнопки на основе PrimeNG Button.** Поддерживает разные варианты (primary, secondary, success, danger), размеры, состояния и иконки.',
      },
    },
  },

  argTypes: {
    // 1. ОСНОВНЫЕ СВОЙСТВА
    label: {
      control: 'text',
      description: 'Текст на кнопке',
      table: {
        category: 'Основные',
        defaultValue: { summary: 'Button' },
      },
    },

    size: {
      control: 'select',
      options: ['medium', 'large'],
      description: 'Размер кнопки',
      table: {
        category: 'Основные',
        defaultValue: { summary: 'medium' },
      },
    },

    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger'],
      description: 'Вариант отображения (цветовая схема)',
      table: {
        category: 'Основные',
        defaultValue: { summary: 'primary' },
      },
    },

    outlined: {
      control: 'boolean',
      description: 'Вариант отображения (Outline)',
      table: {
        category: 'Основные',
        defaultValue: { summary: 'primary' },
      },
    },

    // 2. СОСТОЯНИЯ
    disabled: {
      control: 'boolean',
      description: 'Заблокирована ли кнопка',
      table: {
        category: 'Состояния',
        defaultValue: { summary: 'false' },
      },
    },

    loading: {
      control: 'boolean',
      description: 'Состояние загрузки (показывает спиннер, перекрывает иконку)',
      table: {
        category: 'Состояния',
        defaultValue: { summary: 'false' },
      },
    },

    // 3. ИКОНКА
    showIcon: {
      control: 'boolean',
      description: 'Показывать иконку (автоматически слева)',
      table: {
        category: 'Иконка',
        defaultValue: { summary: 'false' },
      },
    },

    // 4. СОБЫТИЯ
    click: {
      description: 'Событие клика по кнопке',
      table: {
        category: 'События',
      },
    },
  },

  args: {
    click: fn(),
  },
};

export default meta;
type Story = StoryObj<CustomButtonComponent>;

// ========== ОСНОВНЫЕ ВАРИАНТЫ ==========

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
    size: 'medium',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
    size: 'medium',
  },
};

export const Success: Story = {
  args: {
    label: 'Success Button',
    variant: 'success',
    size: 'medium',
  },
};

export const Danger: Story = {
  args: {
    label: 'Danger Button',
    variant: 'danger',
    size: 'medium',
  },
};

// ========== РАЗМЕРЫ ==========

export const Small: Story = {
  args: {
    label: 'Small Button',
    variant: 'primary',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    label: 'Large Button',
    variant: 'primary',
    size: 'large',
  },
};

// ========== СОСТОЯНИЯ ==========

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    variant: 'primary',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    label: 'Loading...',
    variant: 'primary',
    loading: true,
  },
};

export const LoadingWithIcon: Story = {
  name: 'Loading (иконка скрыта)',
  args: {
    label: 'Saving...',
    variant: 'success',
    loading: true,
    showIcon: true, // иконка будет скрыта из-за loading
  },
};

// ========== С ИКОНКОЙ ==========

export const WithIcon: Story = {
  name: 'С иконкой',
  args: {
    label: 'Save',
    variant: 'success',
    showIcon: true,
  },
};

export const IconOnly: Story = {
  name: 'Только иконка',
  args: {
    label: '',
    variant: 'primary',
    showIcon: true,
  },
};

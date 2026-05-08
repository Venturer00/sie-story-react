import type { Preview } from '@storybook/react-vite';
import '../src/styles/tokens.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          'Components',
          [
            'Badge',
            'Button',
            'Card',
            'KVCard',
          ],
          'SYSTEM',
          [
            'ControllerValueSet',
            'PropsModalChild',
            'PropsModalParent',
          ],
        ],
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
    backgrounds: {
      values: [
        { name: 'controller-dark-canvas', value: '#333333' },
        { name: 'controller-light-canvas', value: '#E6E6E6' },
      ],
    },
  },
};

export default preview;
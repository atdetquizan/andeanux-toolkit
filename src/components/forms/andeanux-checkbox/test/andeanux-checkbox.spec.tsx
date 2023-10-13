import { newSpecPage } from '@stencil/core/testing';
import { AndeanuxCheckbox } from '../andeanux-checkbox';

describe('andeanux-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AndeanuxCheckbox],
      html: `<andeanux-checkbox></andeanux-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <andeanux-checkbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </andeanux-checkbox>
    `);
  });
});

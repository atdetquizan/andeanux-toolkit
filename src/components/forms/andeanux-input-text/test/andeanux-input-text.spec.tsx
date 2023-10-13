import { newSpecPage } from '@stencil/core/testing';
import { AndeanuxInputText } from '../andeanux-input-text';

describe('andeanux-input-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AndeanuxInputText],
      html: `<andeanux-input-text></andeanux-input-text>`,
    });
    expect(page.root).toEqualHtml(`
      <andeanux-input-text>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </andeanux-input-text>
    `);
  });
});

import { newSpecPage } from '@stencil/core/testing';
import { AndeanuxRadio } from '../andeanux-radio';

describe('andeanux-radio', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AndeanuxRadio],
      html: `<andeanux-radio></andeanux-radio>`,
    });
    expect(page.root).toEqualHtml(`
      <andeanux-radio>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </andeanux-radio>
    `);
  });
});

import { newSpecPage } from '@stencil/core/testing';
import { AndeanuxInputDate } from '../andeanux-input-date';

describe('andeanux-input-date', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AndeanuxInputDate],
      html: `<andeanux-input-date></andeanux-input-date>`,
    });
    expect(page.root).toEqualHtml(`
      <andeanux-input-date>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </andeanux-input-date>
    `);
  });
});

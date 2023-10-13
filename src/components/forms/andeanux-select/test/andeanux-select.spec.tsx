import { newSpecPage } from '@stencil/core/testing';
import { AndeanuxSelect } from '../andeanux-select';

describe('andeanux-input-select', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AndeanuxSelect],
      html: `<andeanux-input-select></andeanux-input-select>`,
    });
    expect(page.root).toEqualHtml(`
      <andeanux-input-select>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </andeanux-input-select>
    `);
  });
});

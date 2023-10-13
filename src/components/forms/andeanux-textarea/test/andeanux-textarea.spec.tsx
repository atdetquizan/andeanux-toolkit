import { newSpecPage } from '@stencil/core/testing';
import { AndeanuxTextarea } from '../andeanux-textarea';

describe('andeanux-textarea', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AndeanuxTextarea],
      html: `<andeanux-textarea></andeanux-textarea>`,
    });
    expect(page.root).toEqualHtml(`
      <andeanux-textarea>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </andeanux-textarea>
    `);
  });
});

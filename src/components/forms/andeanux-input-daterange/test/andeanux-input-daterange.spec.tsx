import { newSpecPage } from '@stencil/core/testing';
import { AndeanuxInputDaterange } from '../andeanux-input-daterange';

describe('andeanux-input-daterange', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AndeanuxInputDaterange],
      html: `<andeanux-input-daterange></andeanux-input-daterange>`,
    });
    expect(page.root).toEqualHtml(`
      <andeanux-input-daterange>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </andeanux-input-daterange>
    `);
  });
});

import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'andeanux-textarea',
  styleUrl: 'andeanux-textarea.scss',
  shadow: true,
})
export class AndeanuxTextarea {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}

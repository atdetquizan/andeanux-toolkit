import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'andeanux-select',
  styleUrl: 'andeanux-select.scss',
  shadow: true,
})
export class AndeanuxSelect {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}

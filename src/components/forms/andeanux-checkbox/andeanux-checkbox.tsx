import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'andeanux-checkbox',
  styleUrl: 'andeanux-checkbox.scss',
  shadow: true,
})
export class AndeanuxCheckbox {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}

import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'andeanux-radio',
  styleUrl: 'andeanux-radio.scss',
  shadow: true,
})
export class AndeanuxRadio {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}

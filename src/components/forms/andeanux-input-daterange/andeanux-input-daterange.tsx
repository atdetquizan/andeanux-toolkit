import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'andeanux-input-daterange',
  styleUrl: 'andeanux-input-daterange.scss',
  shadow: true,
})
export class AndeanuxInputDaterange {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}

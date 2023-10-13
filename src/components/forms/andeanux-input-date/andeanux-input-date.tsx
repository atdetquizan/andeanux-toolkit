import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'andeanux-input-date',
  styleUrl: 'andeanux-input-date.scss',
  shadow: true,
})
export class AndeanuxInputDate {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}

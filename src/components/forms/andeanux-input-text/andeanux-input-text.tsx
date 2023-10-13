import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'andeanux-input-text',
  styleUrl: 'andeanux-input-text.scss',
})
export class AndeanuxInputText {

  @Prop({ mutable: true }) label: string;
  @Prop({ mutable: true }) placeholder: string;

  render() {
    return <div class="andeanux-input-text">
      {this.label && <label class="andeanux-input-text__label">{this.label}</label>}
      <input type='text' class="andeanux-input-text__input" placeholder={this.placeholder} />
    </div>;
  }

}

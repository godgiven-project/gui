import { html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { TemplateResult } from 'lit';
import type { itemFormBuilder, formItem, htmlFormBuilder } from '../gui-form-type';

export const Image: itemFormBuilder =
{
  template(item: formItem, formBuilder: htmlFormBuilder): TemplateResult | typeof nothing
  {
    if (formBuilder == null) { return nothing; }
    return html`
    <img
      id="${item.key}"
      src="${ifDefined(item.value)}"
      alt="${ifDefined(item.label)}" 
    />`;
  },
  byPass(): boolean { return true; }
};

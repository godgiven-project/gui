import { html, nothing } from 'lit';
import type { TemplateResult } from 'lit';
import type { itemFormBuilder, formItem, htmlFormBuilder } from '../gui-form-type';

export const Submit: itemFormBuilder =
{
  template(item: formItem, formBuilder: htmlFormBuilder): TemplateResult | typeof nothing
  {
    if (formBuilder == null) { return nothing; }
    return html`
      <button
        type="button"
        name="${item.key}"
        @click=${formBuilder.sendData}
      >
        ${item.label}
      </button>
    `;
  },
  byPass(): boolean { return true; }
};

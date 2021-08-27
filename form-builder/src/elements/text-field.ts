import { html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { TemplateResult } from 'lit';
import type { htmlFormBuilder, itemFormBuilder, formItem } from '../gui-form-type';

export const TextField: itemFormBuilder =
{
  template(item: formItem, formBuilder: htmlFormBuilder): TemplateResult | typeof nothing
  {
    if (formBuilder == null) { return nothing; }
    return html`
      <label for="${item.key}">
        ${item.label}
      </label>
      <input 
        type="text" 
        name="${item.key}" 
        placeholder=${ifDefined(item.placeholder)}
      />
    `;
  },
  value(item: formItem, formBuilder: htmlFormBuilder): string
  {
    const element: HTMLInputElement | null = formBuilder.renderRoot.querySelector(`input[name="${item.key}"]`);
    const value: string | undefined = element?.value;
    if (value == null) { return ''; }

    return value;
  },
  validate(item: formItem, formBuilder: htmlFormBuilder): boolean
  {
    // Get value from html
    const value = this.value!(item, formBuilder);

    // Check required
    if (item.validate?.required === true && value === undefined)
    {
      formBuilder.Error = new Error(`IsRequired_${item.key}`); return false;
    }
    if (item.validate?.required === true && value.length <= 0)
    {
      formBuilder.Error = new Error(`IsRequired_${item.key}`); return false;
    }

    // Check pattern
    if (item.validate?.pattern != null)
    {
      if (value == null)
      {
        formBuilder.Error = new Error(`IsRequired_${item.key}`);
        return false;
      }
      const regex = new RegExp(item.validate.pattern);
      if (!regex.test(value))
      {
        formBuilder.Error = new Error(`IsNotValid_${item.key}`);
        return false;
      }
    }

    return true;
  }
};

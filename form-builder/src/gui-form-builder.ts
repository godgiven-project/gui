import { LitElement, html, css, nothing } from 'lit';
import { property, customElement, eventOptions } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { TemplateResult } from 'lit';
import type { formItem, formBuilder } from './gui-form-type';

declare global
{
  interface Element
  {
    index: number;
  }
}

@customElement('gui-form-builder')
export class GuiFormBuilderElementClass extends LitElement
{
  constructor()
  {
    super();
    this._sendData = this._sendData.bind(this);
  }

  static styles = [
    css`
      :host{
        display: grid;
        --gui-builder-height-element: 32px;
        --gui-builder-primary:        #40a9ff;
        --gui-builder-main-color:     #fff;
        --gui-builder-input-font:     1.5em;
        --gui-builder-input-padding:  0.3em;
        --gui-builder-input-margin:   0.3em;
        --gui-builder-input-border:   0.03em solid #d9d9d9;
        --gui-builder-input-text-color: rgba(0,0,0,.85);
        --gui-builder-input-radius: 0.06em;
        --gui-builder-input-outline: none;
      }

      input, 
      textarea, 
      button {
        font-family: inherit;
      }

      button,
      input[type="text"],
      input[type="password"]{
        transition: all .3s cubic-bezier(.645,.045,.355,1);
        transition-property: all;
        transition-duration: 0.3s;
        transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
        transition-delay: 0s;
      }
      input[type="text"],
      input[type="password"] {
        font: var( --gui-builder-input-font );
        padding: var( --gui-builder-input-padding );
        margin: var( --gui-builder-input-margin );
        border: var( --gui-builder-input-border );
        background: var( --gui-builder-main-color ) !important;
        color: var( --gui-builder-input-text-color ) ;
        border-radius: var(--gui-builder-input-radius);
        outline: var(--gui-builder-input-outline);
        box-sizing: border-box;
        width: calc( 100% - 1em );
        margin:0em;
      }
      input[type="text"]:hover,
      input[type="password"]:hover {
        border-color: var(--gui-builder-primary);
      }
      input[type="text"]:focus,
      input[type="password"]:focus{
        border-color: var(--gui-builder-primary);
        box-shadow: 0 0 0 0.06em rgb(24 144 255 / 20%);
        outline: 0;
      }
      .gui-form-builder{
        padding-inline-end: 1em;
        padding-bottom: 1em;
      }
      button{
        outline: 0;
        height: var(--gui-builder-height-element);
        font-size: 14px;
        font-weight: 400;
        padding: 4px 15px;
        border-radius: 2px;
        background: #fff;
        line-height: 1.5715;
        display: inline-block;
        border: var(--gui-builder-input-border);
      }
      button:hover{
        border-color: var(--gui-builder-primary);
        color: var(--gui-builder-primary);
      }
    `
  ];

  @property({ type: Object, attribute: false })
  Data?: formBuilder;

  @property({ type: Boolean, reflect: true })
  GridArea?: boolean = false;

  @property({ type: Boolean, reflect: true })
  Send?: boolean = false;

  @property({ type: Object, attribute: false })
  Resolve? = {};

  @property({ type: Object, attribute: false })
  Error? = {};

  private headerList: Record<string, string> = {
    'Content-Type': 'application/json'
  };

  private _sendData(): void
  {
    if (this.Data?.componentList == null) { return; }

    // define data object and give list
    const data: Record<string, string> = {};
    const componentList = this.Data?.componentList;

    // give all data value
    for (let index = 0; index < componentList.length; index++)
    {
      if (componentList[index].type === 'textfield')
      {
        const element: HTMLInputElement | null = this.renderRoot.querySelector(`input[name="${componentList[index].key}"]`);
        data[componentList[index].key] = element?.value ?? '';
      }
      else if (componentList[index].type === 'password')
      {
        const element: HTMLInputElement | null = this.renderRoot.querySelector(`input[name="${componentList[index].key}"]`);
        data[componentList[index].key] = element?.value ?? '';
      }
    }

    this.Resolve = data;
    if (this.Send === false) { this.formAction(data); return; }

    if (this.Data.setting.headers != null)
    {
      this.headerList = this.Data.setting.headers;
    }

    fetch(this.Data.setting.action, {
      method: this.Data.setting.method ?? 'POST', // or 'PUT'
      headers: this.headerList,
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data =>
      {
        this.Resolve = data;
        this.formAction(data);
      })
      .catch((error) =>
      {
        this.Error = error;
        this.formError(error);
      });
  }

  formAction(data: unknown): void
  {
    // dispatch event
    const action = this.getAttribute('form-action');
    this.dispatchEvent(new CustomEvent('form-action', {
      detail: data
    }));
    if (action != null)
    {
      // console.log(data);
      (data, eval)(action);
    }
  }

  formError(data: unknown): void
  {
    const action = this.getAttribute('form-error');
    this.dispatchEvent(new CustomEvent('form-error', {
      detail: data
    }));
    if (action != null)
    {
      (data, eval)(action);
    }
  }

  render(): TemplateResult | typeof nothing
  {
    if (this.Data?.componentList == null) { return nothing; }
    return html` 
      ${this.contentTemplate()}
    `;
  }

  private contentTemplate(): TemplateResult | typeof nothing
  {
    if (this.textfield == null) { return nothing; }
    if (this.password == null) { return nothing; }
    if (this.submit == null) { return nothing; }
    if (this.image == null) { return nothing; }
    return html`${this.Data!.componentList.map((item) =>
      {
        if (item.type in this)
        {
          if (this.GridArea === true)
          {
            return html`<div style="grid-area:${item.key};" class=${item.key + ' gui-form-builder'}>${(this as any)[item.type](item)}</div>`;
          }
          else
          {
            return html`<div class=${item.key + ' gui-form-builder'}>${(this as any)[item.type](item)}</div>`;
          }
        }
        else
        {
          return html``;
        }
      }
    )}`;
  }

  private textfield(item: formItem): TemplateResult | typeof nothing
  {
    if (this.textfield == null) { return nothing; }
    return html`
    <input 
      type="text" 
      name="${item.key}" 
      placeholder=${ifDefined(item.placeholder)}
    />`;
  }

  private image(item: formItem): TemplateResult | typeof nothing
  {
    if (this.image == null) { return nothing; }
    return html`
    <img
      id="${item.key}"
      src="${ifDefined(item.value)}"
      alt="${ifDefined(item.label)}" 
    />`;
  }

  private password(item: formItem): TemplateResult | typeof nothing
  {
    return html`
    <input
      type="password"
      name="${item.key}"
      placeholder=${ifDefined(item.placeholder)}
    />`;
  }

  @eventOptions({ passive: true })
  private submit(item: formItem): TemplateResult
  {
    return html`
      <button
        type="button"
        name="${item.key}"
        @click=${this._sendData}
      >
        ${item.label}
      </button>
    `;
  }
}

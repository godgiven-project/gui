import { nothing } from 'lit-html';
import { LitElement, html, css, property, customElement } from 'lit-element';
import type { TemplateResult } from 'lit-element';

declare global
{
  interface Element
  {
    index: number;
  }
}
interface FormElement extends HTMLElement
{
  action?: string;
  method?: string;
}
// ******************************************************************************
// ***************** form_element ****************** //
export interface form_element
{
  label?: string;
  labelPosition?: string;
  placeholder?: string;
  tableView?: true;
  validate?: validate_element[];
  key: string;
  type: string;
  input: boolean;
  protected?: boolean;
  disableOnInvalid?: boolean;
}
export interface validate_element
{
  required: boolean;
  src: string;
}
// ***************** form_element ****************** //

export interface form_setting
{
  id: string;
}
export interface form_builder
{
  display: string;
  settings: form_setting;
  components: form_element[];
}
export interface input
{
  title: string;
  disabled?: boolean;
}
// ******************************************************************************

@customElement('gui-form-builder')
export class GuiFormBuilderElementClass extends LitElement
{
  constructor()
  {
    super();
    this.addEventListener('click', this._sendData);
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

  @property({ type: Boolean, reflect: true })
  GridArea?: boolean = false;

  @property({ type: Object, attribute: false })
  List?: form_builder;

  _sendData(): void
  {
    const node = this.shadowRoot?.host.parentElement;
    if (node == null) { return; }
    const mainForm = node as FormElement;
    // const action = node.action;
    console.log(mainForm.action);
    console.log(mainForm.method);
  }

  render(): TemplateResult | typeof nothing
  {
    if (this.List === undefined) { return nothing; }
    console.log(this.List.components);
    return html` 
      ${this.contentTemplate()}
    `;
  }

  private contentTemplate(): TemplateResult | typeof nothing
  {
    const functions: { [K: string]: (item: form_element) => TemplateResult; } = {
      textfield: this.textField,
      password: this.passWord,
      button: this.button
    };
    return html`${this.List!.components.map((item) =>
      {
        if (item.type in functions)
        {
          if (this.GridArea === true)
          {
            return html`<div style="grid-area:${item.key};" class=${item.key + ' gui-form-builder'}>${functions[item.type](item)}</div>`;
          }
          else
          {
            return html`<div class=${item.key + ' gui-form-builder'}>${functions[item.type](item)}</div>`;
          }
        }
        else
        {
          return html``;
        }
      }
    )}`;
  }

  private textField(item: form_element): TemplateResult
  {
    return html`
    <input 
      type="text" 
      name="${item.key}" 
      placeholder=${item.placeholder !== undefined ? item.placeholder : ''} 
    />`;
  }

  private passWord(item: form_element): TemplateResult
  {
    return html`
    <input
      type="password"
      name="${item.key}"
      placeholder=${item.placeholder !== undefined ? item.placeholder : ''}
    />`;
  }

  private button(item: form_element): TemplateResult
  {
    return html`
    <button
      type="button"
      name="${item.key}"
      @click="${this._sendData}"
    >
      ${item.label}
    </button>`;
  }
}

import { LitElement, html, css, nothing } from 'lit';
import { property, customElement, eventOptions } from 'lit/decorators.js';
import { TextField, Password, Image, Submit } from './elements/index';
import type { TemplateResult } from 'lit';
import type { formBuilder, itemFormBuilder } from './gui-form-type';

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
    this.sendData = this.sendData.bind(this);
  }

  static styles = [
    css`
      :host{
        display: grid;
        --gui-builder-height-element: 32px;
        --gui-builder-primary:        #40a9ff;
        --gui-builder-main-color:     #fff;
        --gui-builder-loading-color:  #dedede;
        --gui-builder-input-font:     1.5em;
        --gui-builder-input-padding:  0.3em;
        --gui-builder-input-margin:   0.3em;
        --gui-builder-input-border:   0.03em solid #d9d9d9;
        --gui-builder-input-text-color: rgba(0,0,0,.85);
        --gui-builder-input-text-loading-color: rgba(0,0,0,.3);
        --gui-builder-input-radius: 0.06em;
        --gui-builder-input-outline: none;
        --gui-builder-end-padding:  1em;
      }

      :host([loading]){
        pointer-events: none;
      }

      input, 
      textarea, 
      button {
        font-family: inherit;
      }

      :host([loading]) input,
      :host([loading]) input:hover{ 
        color: var(--gui-builder-input-text-loading-color);
        background: var(--gui-builder-loading-color) !important;
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
        width: calc( 100% - var(--gui-builder-end-padding) );
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
        padding-inline-end: var(--gui-builder-end-padding);
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

      .gui-center{
        text-align: center;
      }

      .gui-left{
        text-align: left;
      }

      .gui-right{
        text-align: right;
      }
    `
  ];

  @property({ type: Object, attribute: false })
  Data?: formBuilder;

  @property({ type: Object, attribute: false })
  ElementList: Record<string, itemFormBuilder> = {
    TextField,
    Password,
    Image,
    Submit
  };

  @property({ type: Boolean, reflect: true })
  GridArea?: boolean = false;

  @property({ type: Boolean, reflect: true })
  Send?: boolean = false;

  @property({ type: Object, attribute: false })
  Resolve? = {};

  @property({ type: Object, attribute: false })
  Error? = {};

  @property({ type: Boolean, reflect: true })
  Loading: boolean = false;

  private headerList: Record<string, string> = {
    'Content-Type': 'application/json'
  };

  @eventOptions({ passive: true })
  public sendData(): void
  {
    if (this.Data?.elementList == null) { return; }
    if (this.Loading) { return; }

    // define data object and give list
    const data: Record<string, string> = {};
    const elementList = this.Data?.elementList;

    // give all data value
    for (let index = 0; index < elementList.length; index++)
    {
      const element = elementList[index];
      if ('byPass' in this.ElementList[element.type])
      {
        if (this.ElementList[element.type].byPass!(element) === true) { continue; }
      }

      const value = this.ElementList[element.type].value!(element, this);
      const validate = this.ElementList[element.type].validate!(element, this);
      if (validate !== true) { return; }
      data[element.key] = value ?? '';
    }

    this.Resolve = data;
    if (this.Send === false) { this.formAction(data); return; }

    if (this.Data.headers != null)
    {
      this.headerList = this.Data.headers;
    }

    let action = this.Data.action;
    const method = this.Data.method ?? 'POST';
    if (method === 'GET')
    {
      const query = Object.keys(data).map(function(k)
      {
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]);
      }).join('&');
      action = `${action}?${query}`;
    }

    this.Loading = true;
    fetch(action, {
      method: method,
      headers: this.headerList,
      body: method === 'GET' ? null : JSON.stringify(data),
    })
      .then(async response =>
      {
        if (response.status !== 200 && response.status !== 201)
        {
          this.Loading = false;
          this.Error = new Error(`ApiNotWork_${response.status ?? ''}`);
        }
        else
        {
          const data = await response.json();
          this.Loading = false;
          this.Resolve = data;
          this.formAction(data);
        }
      })
      .catch((error) =>
      {
        this.Loading = false;
        this.Error = new Error(`NetworkError_${error as string ?? ''}`);
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
    if (this.Data?.elementList == null) { return nothing; }
    return html` 
      ${this.contentTemplate()}
    `;
  }

  private contentTemplate(): TemplateResult | typeof nothing
  {
    return html`${this.Data!.elementList.map((item) =>
      {
        if (item.type in this.ElementList)
        {
          const align = item.align != null ? 'gui-' + item.align : '';
          if (this.GridArea === true)
          {
            return html`
              <div 
                style="grid-area:${item.key};" 
                class=${item.key + ' gui-form-builder ' + align}
              >
                ${this.ElementList[item.type].template(item, this)}
              </div>
            `;
          }
          else
          {
            return html`
              <div
                class=${item.key + ' gui-form-builder ' + align}
              >
                ${this.ElementList[item.type].template(item, this)}
              </div>
            `;
          }
        }
        else
        {
          return html``;
        }
      }
    )}`;
  }
}

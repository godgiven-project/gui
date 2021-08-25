import type { TemplateResult, nothing, LitElement } from 'lit';
// ******************************************************************************
// ***************** formItem ****************** //
export interface formItem
{
  label?: string;
  placeholder?: string;
  validate?: validateElement;
  value?: string;
  align?: 'center' | 'right' | 'left';
  key: string;
  type: string;
}

export interface validateElement
{
  required: boolean;
  pattern: string;
}
// ***************** form_element ****************** //

export interface formBuilder
{
  display: string;
  id: string;
  method?: 'POST' | 'GET';
  action: string;
  headers?: Record<string, string>;
  elementList: formItem[];
}

export interface input
{
  title: string;
  disabled?: boolean;
}

export interface htmlFormBuilder extends LitElement
{
  Error?: any;
  Resolve?: any;
  sendData?: () => void;
}

export interface itemFormBuilder
{
  template: (item: formItem, formBuilder: htmlFormBuilder) => TemplateResult | typeof nothing;
  validate?: (item: formItem, formBuilder: htmlFormBuilder) => boolean;
  value?: (item: formItem, formBuilder: htmlFormBuilder) => string;
  byPass?: (item: formItem) => boolean;
}

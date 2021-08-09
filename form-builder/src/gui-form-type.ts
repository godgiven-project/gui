// ******************************************************************************
// ***************** formItem ****************** //
export interface formItem
{
  label?: string;
  labelPosition?: string;
  placeholder?: string;
  tableView?: true;
  validate?: validateElement;
  value?: string;
  key: string;
  type: string;
  input: boolean;
  protected?: boolean;
  disableOnInvalid?: boolean;
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
  componentList: formItem[];
}

export interface input
{
  title: string;
  disabled?: boolean;
}

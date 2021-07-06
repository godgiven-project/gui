export interface FormElement extends HTMLElement
{
  action?: string;
  method?: string;
}
// ******************************************************************************
// ***************** formItem ****************** //
export interface formItem
{
  label?: string;
  labelPosition?: string;
  placeholder?: string;
  tableView?: true;
  validate?: validateElement[];
  key: string;
  type: string;
  input: boolean;
  protected?: boolean;
  disableOnInvalid?: boolean;
}

export interface validateElement
{
  required: boolean;
  src: string;
}
// ***************** form_element ****************** //

export interface formSetting
{
  id: string;
}

export interface formBuilder
{
  display: string;
  settings: formSetting;
  components: formItem[];
}

export interface input
{
  title: string;
  disabled?: boolean;
}

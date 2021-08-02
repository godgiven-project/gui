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
  method: 'POST' | 'GET';
  action: string;
}

export interface formBuilder
{
  display: string;
  setting: formSetting;
  components: formItem[];
}

export interface input
{
  title: string;
  disabled?: boolean;
}

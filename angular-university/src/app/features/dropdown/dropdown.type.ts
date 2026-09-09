export interface DropdownItem {
  label: string;
  value: string;
  origin?: any;
  disabled?: boolean;
}

export interface DropdownItemContext {
  $implicit: DropdownItem;
  disabled: boolean;
  selected: boolean;
}

export interface DropdownChangeEvent {
  value: string;
  option: DropdownItem;
}

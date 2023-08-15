export type Option = {
  label: string;
  value: string;
};

export type FieldDefinition = {
  type: 'string' | 'number' | 'multi-line' | 'enum' | 'date' | 'boolean';
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  options?: Option[];
};

export type ButtonDefinition = {
  label: string;
  type: 'submit' | 'reset' | 'button';
};

export type FormDefinition = {
  title: string;
  subtitle: string;
  fields: FieldDefinition[];
  buttons: ButtonDefinition[];
};

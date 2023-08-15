# JSON Form Generator

This project implements simple form generator tool that takes a JSON input and renders complete form.

## Other projects like this

- [react-jsonschema-form](https://rjsf-team.github.io/react-jsonschema-form/docs/)
- [jsonforms](https://www.npmjs.com/package/@jsonforms/core)

# Getting Started

Make sure you are using node version > `18`, and yarn `3.4.1`.
If you still have yarn classic (v1.22), run command:

```
yarn set version berry
```

Then, run this commands:

```bash
# Install dependencies
yarn

# Run development server
yarn dev
```

Open [http://localhost:5173/](http://localhost:5173/) with your browser to see the result.

# General notes about the project

This project is an PoC implementing all basic requirements for JSON Form Generator and nothing more. Further development is possible, with some things to improve mentioned in next chapter below.

# Other things to improve in current solution

- Extract each field to separate file, having own wrapper on top of MUI to not be dependent
- Split FormGenerator to multiple components to ensure better reusability
- Add validations to form structure, so we can have individual fields validated
- Add virtualization so bigger JSON structures do not have notable lag in render (or try million.js)
- Add configuration so we can pass functions to generated forms buttons
- Improve styling - so far it uses native HTML elements and base from MUI. Ideally it should be consistent, so used everything from MUI

## Nice to have for collaboration:

- Precommit hook running prettier on staged files on commit (husky, lint-staged, prettier)

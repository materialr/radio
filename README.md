# MaterialR Radio

**@materialr/radio**

[![Build Status](https://travis-ci.org/materialr/radio.svg?branch=master)](https://travis-ci.org/materialr/radio)
[![Coverage Status](https://coveralls.io/repos/github/materialr/radio/badge.svg?branch=master)](https://coveralls.io/github/materialr/radio?branch=master)
[![NSP Status](https://nodesecurity.io/orgs/materialr/projects/a631da44-fb63-49fb-bd7e-7ee09949c242/badge)](https://nodesecurity.io/orgs/materialr/projects/a631da44-fb63-49fb-bd7e-7ee09949c242)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

React Material radio implementation

## Installation

```sh
$ npm install --save @materialr/radio
```

## Demo

A full demo is available on the [MaterialR website](https://materialr.github.io/components/radio)
showcasing all variants.

## Components

### Default export

```js
import Radio from '@materialr/radio';
```

**Props**

| Prop          | Type   | Required | Default    | Description                          |
| ------------- | ------ | -------- | ---------- | ------------------------------------ |
| `checked`     | bool   | Yes      | N/A        | Whether the radio button is checked  |
| `className`   | string | No       | undefined  | Additional classNames to add         |
| `disabled`    | bool   | No       | false      | Whether the radio button is disabled |
| `id`          | string | No       | `uuidv1()` | The id attribute for the element     |
| `label`       | string | Yes      | N/A        | The label for the radio button       |
| `name`        | string | Yes      | N/A        | The name attribute of the element    |
| `onBlur`      | func   | No       | undefined  | The `blur` event handler             |
| `onChange`    | func   | Yes      | N/A        | The `change` event handler           |
| `onDragStart` | func   | No       | undefined  | The `dragstart` event handler        |
| `onDrop`      | func   | No       | undefined  | The `drop` event handler             |
| `onFocus`     | func   | No       | undefined  | The `focus` event handler            |
| `value`       | string | Yes      | N/A        | The element's value                  |

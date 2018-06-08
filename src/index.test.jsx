import * as formField from '@material/form-field';
import * as radio from '@material/radio';
import { mount, shallow } from 'enzyme';
import React from 'react';

import Radio from './index';

const CHECKED = false;
const LABEL = 'LABEL';
const NAME = 'NAME';
const ON_CHANGE = () => 'ON_CHANGE';
const VALUE = 'VALUE';

test('Renders a form field to wrap the radio in', () => {
  const wrapper = shallow(
    <Radio checked={CHECKED} label={LABEL} name={NAME} onChange={ON_CHANGE} value={VALUE} />,
    { disableLifecycleMethods: true },
  );
  const expected = 'mdc-form-field';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Renders the default classNames', () => {
  const wrapper = shallow(
    <Radio checked={CHECKED} label={LABEL} name={NAME} onChange={ON_CHANGE} value={VALUE} />,
    { disableLifecycleMethods: true },
  );
  const expected = 'mdc-radio';

  const actual = wrapper.find('div').at(1).props().className;

  expect(actual).toBe(expected);
});

test('Renders additional classNames', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <Radio
      checked={CHECKED}
      className={CLASS_NAME}
      label={LABEL}
      name={NAME}
      onChange={ON_CHANGE}
      value={VALUE}
    />,
    { disableLifecycleMethods: true },
  );
  const expected = `mdc-radio ${CLASS_NAME}`;

  const actual = wrapper.find('div').at(1).props().className;

  expect(actual).toBe(expected);
});

test('Renders the input form control', () => {
  const wrapper = shallow(
    <Radio checked={CHECKED} label={LABEL} name={NAME} onChange={ON_CHANGE} value={VALUE} />,
    { disableLifecycleMethods: true },
  );
  const expectedClassName = 'mdc-radio__native-control';
  const expectedType = 'radio';

  const inputProps = wrapper.find('input').props();
  const actualClassName = inputProps.className;
  const actualType = inputProps.type;

  expect(actualClassName).toBe(expectedClassName);
  expect(actualType).toBe(expectedType);
});

test('Renders the radio background', () => {
  const wrapper = shallow(
    <Radio checked={CHECKED} label={LABEL} name={NAME} onChange={ON_CHANGE} value={VALUE} />,
    { disableLifecycleMethods: true },
  );
  const expectedBackground = true;
  const expectedInnerCircle = true;
  const expectedOuterCircle = true;

  const actualBackground = wrapper.find('.mdc-radio__background').exists();
  const actualInnerCircle = wrapper.find('.mdc-radio__inner-circle').exists();
  const actualOuterCircle = wrapper.find('.mdc-radio__outer-circle').exists();

  expect(actualBackground).toBe(expectedBackground);
  expect(actualInnerCircle).toBe(expectedInnerCircle);
  expect(actualOuterCircle).toBe(expectedOuterCircle);
});

test('Renders a disabled radio button', () => {
  const wrapper = shallow(
    <Radio
      checked={CHECKED}
      disabled
      label={LABEL}
      name={NAME}
      onChange={ON_CHANGE}
      value={VALUE}
    />,
    { disableLifecycleMethods: true },
  );
  const expectedClassName = 'mdc-radio mdc-radio--disabled';
  const expectedDisabled = true;

  const actualClassName = wrapper.find('div').at(1).props().className;
  const actualDisabled = wrapper.find('input').props().disabled;

  expect(actualClassName).toBe(expectedClassName);
  expect(actualDisabled).toBe(expectedDisabled);
});

test('Passes the id to the input and the label', () => {
  const ID = 'ID';
  const wrapper = shallow(
    <Radio
      checked={CHECKED}
      id={ID}
      label={LABEL}
      name={NAME}
      onChange={ON_CHANGE}
      value={VALUE}
    />,
    { disableLifecycleMethods: true },
  );
  const expectedInput = ID;
  const expectedLabel = ID;

  const actualInput = wrapper.find('input').props().id;
  const actualLabel = wrapper.find('label').props().htmlFor;

  expect(actualInput).toBe(expectedInput);
  expect(actualLabel).toBe(expectedLabel);
});

test('Generates a unique id per instance if none is given', () => {
  const wrapperOne = shallow(
    <Radio checked={CHECKED} label={LABEL} name={NAME} onChange={ON_CHANGE} value={VALUE} />,
    { disableLifecycleMethods: true },
  );
  const wrapperTwo = shallow(
    <Radio checked={CHECKED} label={LABEL} name={NAME} onChange={ON_CHANGE} value={VALUE} />,
    { disableLifecycleMethods: true },
  );

  const actualOne = wrapperOne.find('input').props().id;
  const actualTwo = wrapperTwo.find('input').props().id;

  expect(actualOne).not.toBe(actualTwo);
});

test('Passes through the correct props', () => {
  const ON_BLUR = () => 'ON_BLUR';
  const ON_DRAG_START = () => 'ON_DRAG_START';
  const ON_DROP = () => 'ON_DROP';
  const ON_FOCUS = () => 'ON_FOCUS';
  const wrapper = shallow(
    <Radio
      checked={CHECKED}
      label={LABEL}
      name={NAME}
      onBlur={ON_BLUR}
      onChange={ON_CHANGE}
      onDragStart={ON_DRAG_START}
      onDrop={ON_DROP}
      onFocus={ON_FOCUS}
      value={VALUE}
    />,
    { disableLifecycleMethods: true },
  );
  const expectedChecked = CHECKED;
  const expectedLabel = LABEL;
  const expectedName = NAME;
  const expectedOnBlur = ON_BLUR;
  const expectedOnChange = ON_CHANGE;
  const expectedOnDragStart = ON_DRAG_START;
  const expectedOnDrop = ON_DROP;
  const expectedOnFocus = ON_FOCUS;
  const expectedValue = VALUE;

  const inputProps = wrapper.find('input').props();
  const actualChecked = inputProps.checked;
  const actualLabel = wrapper.find('label').props().children;
  const actualName = inputProps.name;
  const actualOnBlur = inputProps.onBlur;
  const actualOnChange = inputProps.onChange;
  const actualOnDragStart = inputProps.onDragStart;
  const actualOnDrop = inputProps.onDrop;
  const actualOnFocus = inputProps.onFocus;
  const actualValue = inputProps.value;

  expect(actualChecked).toBe(expectedChecked);
  expect(actualLabel).toBe(expectedLabel);
  expect(actualName).toBe(expectedName);
  expect(actualOnBlur).toBe(expectedOnBlur);
  expect(actualOnChange).toBe(expectedOnChange);
  expect(actualOnDragStart).toBe(expectedOnDragStart);
  expect(actualOnDrop).toBe(expectedOnDrop);
  expect(actualOnFocus).toBe(expectedOnFocus);
  expect(actualValue).toBe(expectedValue);
});


test('Creates the MDCFormField and MDCRadio component on mount', () => {
  const MDCFormField = jest.fn();
  const MDCRadio = jest.fn();
  formField.MDCFormField = MDCFormField;
  radio.MDCRadio = MDCRadio;
  const wrapper = mount(
    <Radio
      checked={CHECKED}
      label={LABEL}
      name={NAME}
      onChange={ON_CHANGE}
      value={VALUE}
    />,
  );
  const instance = wrapper.instance();
  const expectedFormField = instance.elementFormField;
  const expectedRadio = instance.elementRadio;

  const actualFormField = MDCFormField.mock.calls[0][0];
  const actualRadio = MDCRadio.mock.calls[0][0];

  expect(actualFormField).toBe(expectedFormField);
  expect(actualRadio).toBe(expectedRadio);
});

test('Destroys the MDCFormField component on unmount', () => {
  const destroyFormField = jest.fn();
  const destroyRadio = jest.fn();
  const wrapper = mount(
    <Radio
      checked={CHECKED}
      label={LABEL}
      name={NAME}
      onChange={ON_CHANGE}
      value={VALUE}
    />,
  );
  const instance = wrapper.instance();
  const expectedFormField = 1;
  const expectedRadio = 1;
  instance.formField.destroy = destroyFormField;
  instance.radio.destroy = destroyRadio;

  wrapper.unmount();
  const actualFormField = destroyFormField.mock.calls.length;
  const actualRadio = destroyRadio.mock.calls.length;

  expect(actualFormField).toBe(expectedFormField);
  expect(actualRadio).toBe(expectedRadio);
});

test('Renders additional props', () => {
  const DATA_QA = 'DATA_QA';
  const wrapper = shallow(
    <Radio
      checked={CHECKED}
      data-qa={DATA_QA}
      label={LABEL}
      name={NAME}
      onChange={ON_CHANGE}
      value={VALUE}
    />,
    { disableLifecycleMethods: true },
  );
  const expected = DATA_QA;

  const actual = wrapper.props()['data-qa'];

  expect(actual).toBe(expected);
});

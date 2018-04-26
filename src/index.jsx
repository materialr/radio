import { MDCFormField } from '@material/form-field';
import { MDCRadio } from '@material/radio';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import uuidv1 from 'uuid/v1';

import '@material/form-field/mdc-form-field.scss';
import '@material/radio/mdc-radio.scss';

class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.elementFormField = undefined;
    this.elementRadio = undefined;
    this.formField = undefined;
    this.radio = undefined;
    this.state = { id: uuidv1() };
    this.getClassNames = this.getClassNames.bind(this);
    this.getId = this.getId.bind(this);
  }
  componentDidMount() {
    this.formField = new MDCFormField(this.elementFormField);
    this.radio = new MDCRadio(this.elementRadio);
  }
  componentWillUnmount() {
    this.formField.destroy();
    this.radio.destroy();
  }
  getClassNames() {
    const { className, disabled } = this.props;
    return classnames({
      'mdc-radio': true,
      'mdc-radio--disabled': disabled,
      [className]: !!className,
    });
  }
  getId() {
    return this.props.id || this.state.id;
  }
  render() {
    const {
      getClassNames,
      getId,
      props: {
        checked,
        disabled,
        label,
        name,
        onBlur,
        onChange,
        onDragStart,
        onDrop,
        onFocus,
        value,
      },
    } = this;
    return (
      <div
        className="mdc-form-field"
        ref={(elementFormField) => { this.elementFormField = elementFormField; }}
      >
        <div
          className={getClassNames()}
          ref={(elementRadio) => { this.elementRadio = elementRadio; }}
        >
          <input
            className="mdc-radio__native-control"
            checked={checked}
            disabled={disabled}
            id={getId()}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            onDragStart={onDragStart}
            onDrop={onDrop}
            onFocus={onFocus}
            type="radio"
            value={value}
          />
          <div className="mdc-radio__background">
            <div className="mdc-radio__outer-circle" />
            <div className="mdc-radio__inner-circle" />
          </div>
        </div>
        <label htmlFor={getId()}>{label}</label>
      </div>
    );
  }
}

Radio.propTypes = {
  checked: PropTypes.bool.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onDragStart: PropTypes.func,
  onDrop: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.string.isRequired,
};

Radio.defaultProps = {
  className: undefined,
  disabled: false,
  id: undefined,
  onBlur: undefined,
  onDragStart: undefined,
  onDrop: undefined,
  onFocus: undefined,
};

export default Radio;

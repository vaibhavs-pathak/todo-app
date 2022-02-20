import React from "react";
import { inject, observer } from "mobx-react";
import { Input } from "semantic-ui-react";

const FormHOC = (WrappedComponent, metaInfo) => {
  return inject(metaInfo.store)(
    observer(
      class extends React.Component {
        constructor(props) {
          super(props);
          this.fieldData = props[metaInfo.store][metaInfo.form].fields;
        }

        Input = (name, props) => {
          const fieldInfo = (props && props.fieldData) || this.fieldData[name];
          const currentForm = (props && props.form) || metaInfo.form;
          const { label, placeholder, value, error } = fieldInfo;
          return (
            <>
              <Input
                name={name}
                key={name}
                label={label || ""}
                placeholder={placeholder || ""}
                value={value}
                onChange={(e, result) => this.props[metaInfo.store].formChange(e, result, currentForm)}
              />
              {error && error}
            </>
          );
        };

        render() {
          const smartElement = {
            Input: this.Input,
          };
          return (
            <WrappedComponent smartElement={smartElement}  {...this.props} />
          );
        }
      }
    )
  );
};

export default FormHOC;

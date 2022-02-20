import { makeObservable, action, observable } from "mobx";

export class DataModelStore {
  constructor() {
    makeObservable(this, {
      currentTime: observable,
      formChange: action,
    });
  }

  currentTime = null;

  resetForm = (form) => {
    const formFields = this[form].fields;
    const fieldArr = Object.keys(formFields);
    fieldArr.forEach((key) => {
      this[form].fields[key].value = "";
    });
    this.currentTime = +new Date();
  };

  formChange = (e, result, form) => {
    const { name, value } = result;
    const currentForm = this[form];
    currentForm.fields[name].value = value;
    this.currentTime = +new Date();
  };
}

import { makeObservable, observable, action } from "mobx";
import { DataModelStore } from "../data-model-store";
import { LOGIN_META } from "../constant/user";
import { prepareFormObject, evaluateFormData } from "../../helper/form-helper";

class UserStore extends DataModelStore {
  constructor() {
    super();
    makeObservable(this, {
      LOGIN_FORM: observable.ref,
      saveUser: action,
    });
  }

  LOGIN_FORM = prepareFormObject(LOGIN_META);

  saveUser = () =>
    new Promise((resolve, reject) => {
      try {
        const formFields = this.LOGIN_FORM.fields;
        const formData = evaluateFormData(formFields);
        setTimeout(() => {
          console.log(formData);
          resolve(true);
        }, 2000);
      } catch (error) {
        reject(error);
      }
    });
}

export default new UserStore();

import { createStore } from "solid-js/store";
import { mongo_url } from "./mongoSettings";

const submit = (form) => {
  // here we can:
  // filter out unneeded data, e.g. the checkbox sameAsAddress
  // map fields, if needed, e.g. shipping_address
  const dataToSubmit = {
    name: form.name,
    shortname: form.shortname,
  };
  // should be submitting your form to some backend service
  console.log(`submitting ${JSON.stringify(dataToSubmit)}`);
  fetch(`${mongo_url}/insert`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: dataToSubmit,
  });
};

const useForm = () => {
  const [form, setForm] = createStore({
    name: "",
    shortname: "",
  });

  const clearField = (fieldName) => {
    setForm({
      [fieldName]: "",
    });
  };

  const updateFormField = (fieldName) => (event) => {
    const inputElement = event.currentTarget;
    if (inputElement.type === "checkbox") {
      setForm({
        [fieldName]: !!inputElement.checked,
      });
    } else {
      setForm({
        [fieldName]: inputElement.value,
      });
    }
  };

  return { form, submit, updateFormField, clearField };
};

export { useForm };

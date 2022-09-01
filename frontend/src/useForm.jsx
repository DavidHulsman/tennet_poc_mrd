import { createStore } from "solid-js/store";

// type FormFields = {
//   name?: string;
//   surname?: string;
//   address?: string;
//   shippingAddress?: string;
//   sameAsAddress: boolean;
// };

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

  // mongoClient.connect(url, (err, db) => {
  //   if (err) throw err;
  //   const dbo = db.db("MRD_DB");
  //   dbo.collection("entity").insertOne(dataToSubmit, (err, res) => {
  //     if (err) throw err;
  //     console.log("1 document inserted");
  //     db.close();
  //   });
  // });
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

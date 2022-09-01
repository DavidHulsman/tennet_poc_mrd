import { useForm } from "./useForm";
import { createEffect } from "solid-js";
import styles from "./InsertEntity.module.css";


function InsertEntity() {
  const { form, updateFormField, submit, clearField } = useForm();
  const handleSubmit = (event) => {
    event.preventDefault();
    submit(form);
  };

  createEffect(() => {
    if (form.sameAsAddress) {
      clearField("shippingAddress");
    }
  });

  return (
    <div class="InsertEntity">
      <h1>Submitting a form using SolidJS stores</h1>
      <form onSubmit={handleSubmit}>
        <div class="form-control">
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            value={form.name}
            onChange={updateFormField("name")}
          />
        </div>
        <div class="form-control">
          <label for="shortname">Shortname:</label>
          <input
            type="text"
            id="shortname"
            value={form.shortname}
            onChange={updateFormField("shortname")}
          />
        </div>
        <input class="form-submit" type="submit" value="Insert entity" />
      </form>
      <pre>{JSON.stringify(form, null, 2)}</pre>
    </div>
  );
}

export default InsertEntity;

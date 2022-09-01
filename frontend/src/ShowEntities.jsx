import styles from "./ShowEntities.module.css";
import { createEffect, createSignal } from "solid-js";
import { mongo_url } from "./mongoSettings";
import EntityCard from "./components/EntityCard"

const [entities, setEntities] = createSignal([]);

createEffect(async () => {
  const res = await fetch(`${mongo_url}/entities`);
  const json = await res.json();
  setEntities(json.entities);
  console.log(json.entities);
});

function ShowEntities() {
  return (
    <div class="ShowEntities">
      <h1>Available entities</h1>
      <For each={entities()}>
        {(entity => <EntityCard pet={entity} />)}
      </For>
    </div>
  );
}

export default ShowEntities;

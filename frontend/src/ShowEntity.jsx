import styles from "./ShowEntities.module.css";
import { createEffect, createSignal } from "solid-js";
import { mongo_url } from "./mongoSettings";
import EntityCard from "./components/EntityCard";

function ShowEntity(entity) {
  return (
    <>
      <h1>Entity with ID: {entity.id}</h1>
      <p>name: {entity.name}</p>
      <p>shortname: {entity.shortname}</p>
    </>
  );
}

export default ShowEntity;

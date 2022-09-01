import { Routes, Route, Link } from "@solidjs/router";

const EntityCard = ({ entity }) => {
  return (
    <div class="card mb-3">
      <Link class={styles.link} href={`/entity/${entity.id}`}>
        <div class="card-header">
          {entity.name}, {entity.animal}
        </div>
      </Link>
    </div>
  );
};

export default EntityCard;

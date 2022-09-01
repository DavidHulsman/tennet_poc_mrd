const EntityCard = ({ entity }) => {
  return (
    <div class="card mb-3">
      <div class="card-header">
        {entity.name}, {entity.animal}
      </div>
    </div>
  );
};

export default EntityCard;

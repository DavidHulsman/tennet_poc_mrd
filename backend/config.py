from decouple import config

ENTITY_COLLECTION_NAME: str = config("ENTITY_COLLECTION_NAME", "entity")
MONGO_USERNAME: str = config("MONGO_USERNAME", "root")
MONGO_PASSWORD: str = config("MONGO_PASSWORD", "tennet")

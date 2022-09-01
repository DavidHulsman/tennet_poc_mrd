from multiprocessing.sharedctypes import Value
from typing import Any
from pymongo import MongoClient
from pymongo.collection import Collection
from config import ENTITY_COLLECTION_NAME

def getClient() -> MongoClient:
    return MongoClient('localhost', 27017)

def createEntityCollectionIfNecessary(client:MongoClient) -> bool:
    hasCollection = ENTITY_COLLECTION_NAME not in client.mrd.list_collection_names()
    if not hasCollection
        client.mrd.create_collection(ENTITY_COLLECTION_NAME)
    return not hasCollection

def getEntityCollection(client:MongoClient) -> Collection:
    createEntityCollectionIfNecessary(client)
    return client.mrd.get_collection(name=ENTITY_COLLECTION_NAME)

def createEntity(entity:dict[str,Any]) -> Any:
    client = getClient()
    collection = getEntityCollection(client=client)
    insert_result = collection.insert_one(entity)
    return insert_result.inserted_id

def updateEntity(entity:dict[str,Any]) -> Any:
    if "_id" not in entity:
        raise ValueError("Cant update if it hasnt _id")
    
    client = getClient()
    collection = getEntityCollection(client=client)
    return collection.find_one_and_update({"_id":entity["_id"]},entity)

def deleteEntity(entity:dict[str,Any]) -> Any:
    client = getClient()
    collection = getEntityCollection(client=client)
    return collection.delete_one({"_id":entity["_id"]})

def getAllEntities() -> list[dict[str,Any]]:
    client = getClient()
    collection = getEntityCollection(client=client)
    return list(collection.find({}))

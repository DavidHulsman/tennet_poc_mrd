from typing import Any, Iterable
import bson

def convert_object_id_to_str(object_id) -> str:
    return str(object_id)

def convert_str_to_object_id(str:str) -> bson.ObjectId:
    return bson.ObjectId(str)

def serialize_object(object: Any) -> Any:
    object["_id"] = convert_object_id_to_str(object["_id"])
    return object

def deserialize_object(object:Any) -> Any:
    object["_id"] = convert_str_to_object_id(object["_id"])
    return object

def serialize_objects(objects:Iterable[Any])-> list[Any]:
    return [serialize_object(object) for object in objects]

    
def deserialize_objects(objects:Iterable[Any])-> list[Any]:
    return [deserialize_object(object) for object in objects]
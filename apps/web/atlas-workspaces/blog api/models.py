from pydantic import BaseModel
from typing import List

class Blog(BaseModel):
    id: int
    title: str
    content: str

class BlogCreate(BaseModel):
    title: str
    content: str
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List

app = FastAPI()

class Blog(BaseModel):
    id: int
    title: str
    content: str

class BlogCreate(BaseModel):
    title: str
    content: str

blogs = [
    Blog(id=1, title="Blog 1", content="This is blog 1"),
    Blog(id=2, title="Blog 2", content="This is blog 2")
]

@app.get("/blogs/")
def get_blogs():
    return blogs

@app.get("/blogs/{blog_id}")
def get_blog(blog_id: int):
    for blog in blogs:
        if blog.id == blog_id:
            return blog
    raise HTTPException(status_code=404, detail="Blog not found")

@app.post("/blogs/")
def create_blog(blog: BlogCreate):
    new_blog = Blog(id=len(blogs) + 1, title=blog.title, content=blog.content)
    blogs.append(new_blog)
    return new_blog

@app.put("/blogs/{blog_id}")
def update_blog(blog_id: int, blog: BlogCreate):
    for existing_blog in blogs:
        if existing_blog.id == blog_id:
            existing_blog.title = blog.title
            existing_blog.content = blog.content
            return existing_blog
    raise HTTPException(status_code=404, detail="Blog not found")

@app.delete("/blogs/{blog_id}")
def delete_blog(blog_id: int):
    for blog in blogs:
        if blog.id == blog_id:
            blogs.remove(blog)
            return {"message": "Blog deleted"}
    raise HTTPException(status_code=404, detail="Blog not found")
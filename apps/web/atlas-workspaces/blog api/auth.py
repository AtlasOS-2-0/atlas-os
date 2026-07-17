from fastapi import Depends, FastAPI, HTTPException
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jose import jwt
from passlib.context import CryptContext
from pydantic import BaseModel

class AuthDetails(BaseModel):
    username: str
    password: str

class AuthHandler:
    def __init__(self, secret_key, algorithm):
        self.secret_key = secret_key
        self.algorithm = algorithm
        self.pwd_context = CryptContext(schemes=["bcrypt"], default="bcrypt")
        self.oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

    def get_password_hash(self, password):
        return self.pwd_context.hash(password)

    def verify_password(self, plain_password, hashed_password):
        return self.pwd_context.verify(plain_password, hashed_password)

    def authenticate_user(self, username, password):
        # Replace with a database query
        users = {
            "user1": self.get_password_hash("password1"),
            "user2": self.get_password_hash("password2"),
        }
        if username in users:
            if self.verify_password(password, users[username]):
                return username
        return None

    def create_token(self, data: dict):
        return jwt.encode(data, self.secret_key, algorithm=self.algorithm)

    def get_current_user(self, token: str = Depends(oauth2_scheme)):
        try:
            payload = jwt.decode(token, self.secret_key, algorithms=[self.algorithm])
            username: str = payload.get("sub")
            if username is None:
                raise credentials_exception
            token_data = TokenData(username=username)
        except JWTError:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Could not validate credentials",
                headers={"WWW-Authenticate": "Bearer"},
            )
        user = self.get_user(username=token_data.username)
        if user is None:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="User not found",
                headers={"WWW-Authenticate": "Bearer"},
            )
        return user

class TokenData(BaseModel):
    username: str | None = None

class User(BaseModel):
    username: str
    full_name: str
    disabled: bool

def get_user(username: str):
    # Replace with a database query
    users = {
        "user1": User(username="user1", full_name="User 1", disabled=False),
        "user2": User(username="user2", full_name="User 2", disabled=False),
    }
    if username in users:
        return users[username]
    return None

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

credentials_exception = HTTPException(
    status_code=status.HTTP_401_UNAUTHORIZED,
    detail="Could not validate credentials",
    headers={"WWW-Authenticate": "Bearer"},
)
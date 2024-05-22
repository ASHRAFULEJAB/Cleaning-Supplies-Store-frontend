## LiveLink:
   
   * [Cleaning Store Next.js Backend](https://cleaning-supplies-store-frontend.vercel.app/)

## Installation:
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Rename `.env.example` to `.env`.
4. Run the server using `npm run dev`.

### Before Pushing Code:
1. Before pushing your code to the remote repository, ensure that you have run the following command in your terminal (Git Bash):
    ```bash
    rm -rf .git
    ```

## Configuration:
- Environment Variables for backend:
  - `PORT`: Port number the server listens on. Default: 3000
  - `MONGODB_URI`: URI for MongoDB database.
  - `JWT_SECRET`: Secret key for JWT token generation.
  - `EXPIRES_IN`: Token expiration time.

## Usage:
- API Endpoints:
  - POST `/api/auth/login`
    - Description: Authenticates user and returns a JWT token.
    - Request: 
        ```json
        { 
            "email": "example@email.com", 
            "password": "password" 
        }
        ```
    - Response: 
        ```json
        {
            "success": true, 
            "message": "User registered successfully"
        }
        ```

  - POST `/api/auth/register`
    - Description: Registers a new user.
    - Request:
        ```json
        { 
            "name": "John", 
            "email": "example@email.com", 
            "password": "password" 
        }
        ```
    - Response: 
        ```json
        {
            "success": true,
            "message": "Login successful",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBoMkBleGFtcGxlLmNvbSIsImlhdCI6MTcwNzg1MDYyMSwiZXhwIjoxNzA3OTM3MDIxfQ.7EahSgmPLPNuZ_T9ok-B6TayWCJVdxPzi_Nx4UfrhvY"
        }
        ```

- GET `/products/dishwashing-items`
  - Description: Retrieve all dishwashing items.
  - Request: http://localhost:5000/products/dishwashing-items

- GET `/products/dishwashing-items/{id}`
  - Description: Retrieve a specific dishwashing item by ID.
  - Request: http://localhost:5000/products/dishwashing-items/664891c17cf8783d13c43916-1

- GET `/flash-sale`
  - Description: Retrieve flash sale items.
  - Request: http://localhost:5000/flash-sale

- GET `/products/dishwashing-items`
  - Description: Retrieve dishwashing items filtered by category.
  - Request: http://localhost:5000/products/dishwashing-items?category=Dish%20Soap

- GET `/products/dishwashing-items/{id}`
  - Description: Retrieve a specific dishwashing item by ID.
  - Request: http://localhost:5000/products/dishwashing-items/664891c17cf8783d13c43916-1

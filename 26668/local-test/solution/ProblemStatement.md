Title: Implementing CRUD operations for Digital Art Collection

Introduction: You are tasked with developing the backend for a cutting-edge Digital Art Platform. This platform empowers users to perform various operations on digital art pieces, including creating new entries, reading existing entries, updating entry details, and deleting entries from the collection.

You've been given an ArtPiece class (model) with the ability to construct objects containing properties such as id, title, artist, year, and imageUrl. The endpoints are already specified in the routes file.

Objectives:

Implement the ArtPiece model function for the '/api/artPieces' endpoint to retrieve all art pieces in the collection. This endpoint should support query parameters 'year' and 'artist' to filter the results.

Implement the ArtPiece model function for the '/api/artPieces/:id' endpoint to retrieve a specific art piece by its id.

Implement the ArtPiece model function for the '/api/artPieces/:id' endpoint to update the details of a specific art piece. After updating the details, return the updated information as a response.

Implement the ArtPiece model function for the '/api/artPieces/:id' endpoint to delete a specific art piece from the collection.

Expected Output: A server capable of handling all CRUD operations for managing digital art pieces via the respective endpoints.

Note: The 'id' of the art pieces should be unique and auto-incremented for every new art piece. It should not be provided in the request for creating a new art piece.

Notes and Hints:

Auto-incrementing IDs: Ensure that the 'id' property of the ArtPiece class is auto-incremented for every new entry. You may use a counter variable or a unique ID generation library to achieve this.

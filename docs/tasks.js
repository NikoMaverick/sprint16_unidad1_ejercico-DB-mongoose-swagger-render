// documentación de los diferentes endpoints

const Task = require("../models/Task")

module.exports = {
    paths: {
      "/create": {
        post: {
          tags: {
            Task: "Create a task",
          },
          description: "Create Task",
          operationId: "createTask",
          parameters: [],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Task"
                },
              },
            },
          },
          responses: {
            201: {
              description: "Task created successfully"
            },
            500: {
              description: "Server error"
            },
          },
        }
      },
    },

    "/id/{_id}": {
        put: {
          tags: {
            Tasks: "Update a task",
          },
          description: "Update Task",
          operationId: "updateUser",
          parameters: [
            {
              name: "_id",
              in: "path",
              schema: {
                $ref: "#/components/schemas/_id",
              },
              description: "Id of Task to be updated",
            },
          ],
          requestBody: {
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Task" },
              },
            },
          },
          responses: {
            200: { description: "User updated successfully" },
            500: { description: "Server error" },
          },
        },
      },

  };

  


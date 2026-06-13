import { api, USE_MOCK, delay } from "./api-client";
import { mockMedia, mockComments, mockUsers } from "./mock-data";

export const mediaService = {
  list() {
    if (USE_MOCK) return delay(mockMedia);
    return api.get("/media");
  },
};

export const commentsService = {
  list() {
    if (USE_MOCK) return delay(mockComments);
    return api.get("/comments");
  },
};

export const usersService = {
  list() {
    if (USE_MOCK) return delay(mockUsers);
    return api.get("/users");
  },
};

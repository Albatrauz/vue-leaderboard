import { defineStore } from "pinia";

export const useUsers = defineStore({
  // id is required so that Pinia can connect the store to the devtools
  id: "Users",
  state: () => ({}),
  getters: {},
  actions: {},
});

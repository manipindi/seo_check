import { defineConfig } from "tinacms";
import page from "./collections/page";
import post from "./collections/post";

export const config = defineConfig({
  clientId: "0ad2b629-c4a9-42c8-9e42-b8816dbbecd0",
  token: "4052aa4257da67860d00709c2de0482efc981d55",
  media: {
    // If you wanted cloudinary do this
    // loadCustomStore: async () => {
    //   const pack = await import("next-tinacms-cloudinary");
    //   return pack.TinaCloudCloudinaryMediaStore;
    // },
    // this is the config for the tina cloud media store
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },
  build: {
    publicFolder: "public", // The public asset folder for your framework
    outputFolder: "admin", // within the public folder
  },
  schema: {
    collections: [page, post],
  },
});

export default config;

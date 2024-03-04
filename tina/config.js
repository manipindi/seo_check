import { defineConfig } from "tinacms";
import page from "./collections/page";
import post from "./collections/post";

const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export const config = defineConfig({
  branch,
  clientId: "f1ff8a6e-a407-44e8-9d31-526fa5240c80",
  token: "00c97d350da76857840e4c3757e3723f4fd97c16",
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

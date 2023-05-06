import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "xe8alnbl",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-03-30"
})

export default client;
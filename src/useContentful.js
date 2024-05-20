import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "pkaakjur9k42",
    accessToken: "9Qukq37zHQMy6RCvhjKbPPQnZndOyc3Cfif7LPSheFk   ",
    host: "preview.contentful.com"
  });

  const getCases = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "cases",
        select: "fields"
      });
      
      return entries
    } catch (error) {
      console.log(`Error fetching authors ${error}`);
    }
  };

  return { getCases };
};

export default useContentful;

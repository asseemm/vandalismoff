import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "pkaakjur9k42",
    accessToken: "9Qukq37zHQMy6RCvhjKbPPQnZndOyc3Cfif7LPSheFk",
    host: "preview.contentful.com"
  });

  const getCases = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "cases",
        select: "fields.caseTitle,fields.caseVideo,fields.caseSubtitle,fields.caseText"
      });

      const cases = entries.items.map((item) => {
        return {
          id: item.sys.id,  
          title: item.fields.caseTitle || "No title",
          video: item.fields.caseVideo || "No video",
          subtitle: item.fields.caseSubtitle || "No subtitle",
          text: item.fields.caseText?.content?.[0]?.content?.[0]?.value || "No content",
        };
      });

      return cases;
    } catch (error) {
      console.error(`Error fetching cases: ${error}`);
      return [];
    }
  };

  return { getCases };
};

export default useContentful;

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
        select: "fields.caseTitle,fields.caseSubtitle,fields.caseText"
      });

      const cases = entries.items.map((item) => {
        return {
          title: item.fields.caseTitle,
          subtitle: item.fields.caseSubtitle,
          text: item.fields.caseText.content[0].content[0].value
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

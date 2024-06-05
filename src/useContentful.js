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
        select: "fields.caseTitle, fields.caseVideo, fields.caseSubtitle, fields.caseShortText, fields.caseText"
      });

      const cases = entries.items.map((item) => {
        return {
          id: item.sys.id,  
          title: item.fields.caseTitle || "No title",
          video: item.fields.caseVideo || "No video",
          subtitle: item.fields.caseSubtitle || "No subtitle",
          shortText: item.fields.caseShortText?.content?.[0]?.content?.[0]?.value || "No content",
          text: item.fields.caseText?.content?.[0]?.content?.[0]?.value || "No content",
        };
      });

      return cases;
    } catch (error) {
      console.error(`Error fetching cases: ${error}`);
      return [];
    }
  };

  const getNews = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "news", // Укажите здесь свой content_type для новостей
        select: "fields.newsTitle, fields.newsText, fields.newDate, fields.newsImg, fields.newsLink, fields.newsImgLink"
      });
  
      const news = entries.items.map((item) => {
        return {
          id: item.sys.id,
          title: item.fields.newsTitle || "No title",
          text: item.fields.newsText || "No text",
          date: item.fields.newDate || "No date",
          image: item.fields.newsImg || "No image",
          link: item.fields.newsLink || "No link",
          imageLink: item.fields.newsImgLink || "No image",
        };
      });
  
      return news;
    } catch (error) {
      console.error(`Error fetching news: ${error}`);
      return [];
    }
  };

  const getTeam = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "team", // Make sure this matches your Contentful content type ID for the team
        order: "fields.teamPos"
      });
  
      return entries.items.map(item => ({
        id: item.sys.id,
        name: item.fields.teamName,
        position: item.fields.teamPos,
        image: item.fields.teamImg.fields.file.url,
        instagram: item.fields.instLink,
        telegram: item.fields.telLink,
        email: item.fields.gmailLink
      }));
    } catch (error) {
      console.error("Error fetching team data:", error);
      return [];
    }
  };
  

  return { getCases, getNews, getTeam };
};

export default useContentful;

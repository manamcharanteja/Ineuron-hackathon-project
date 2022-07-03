import { API_KEY, END_POINT, COUNTRY } from "../Config/Config";

export async function Services(category = "general") {
  let articles = await fetch(
    `${END_POINT}?country=${COUNTRY}&category=${category}`,
    {
      headers: {
        "X-API-KEY": API_KEY,
      },
    }
  );
  let result = await articles.json();
  articles = null;

  return result.articles;
}

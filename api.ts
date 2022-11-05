import axios from "axios";

const instance = axios.create({
  baseURL: "https://yesu.io",
});

interface IGetBibleVariables {
  lang: string;
  doc: string;
  start: string;
  end: string;
}

export const getBible = ({ lang, doc, start, end }: IGetBibleVariables) =>
  instance
    .get(`/bible?lang=${lang}&doc=${doc}&start=${start}&end=${end}`)
    .then((response) => response.data);

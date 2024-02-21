import axios from "axios";

export type CategoryModel = {
  mainShortcutId: number;
  title: string;
  imageUrl: string;
};

export const fetchCategories = async () => {
  const response = await axios.get(
    "https://api.testvalley.kr/main-shortcut/all"
  );
  return response.data;
};

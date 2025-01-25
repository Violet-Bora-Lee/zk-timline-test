export interface Category {
  [key: string]: string[];
}

export interface YearMap {
  title: string;
  categories?: Category;
  description?: string;
}

export interface YearMaps {
  [key: string]: YearMap;
}
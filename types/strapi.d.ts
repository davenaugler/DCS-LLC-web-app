export interface StrapiResponse<T> {
  data: {
    id: number;
    attributes: T;
  }[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiImage {
  data: {
    id: number;
    attributes: {
      url: string;
      alternativeText: string;
      caption: string;
      width: number;
      height: number;
    };
  };
}

export interface Project {
  title: string;
  description: string;
  year: string;
  category: string;
  image: StrapiImage;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Service {
  title: string;
  description: string;
  features: string[];
  image: StrapiImage;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: StrapiImage;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
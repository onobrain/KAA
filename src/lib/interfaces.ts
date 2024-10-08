export interface ProjectCellTypes {
  mainImage: any;
  title: string;
  category: string; // category is a string since you're fetching category->title
  currentSlug: string;
}
export interface SingleProjectType {
  title: string;
  mainImage: any;
  description: any;
  gallery: any;
}

export interface CategoryTypes {
  title: string;
}

export interface ProjectsGridProps {
  isComponent?: boolean;
  AllProjects: ProjectCellTypes[]; // Ensure AllProjects matches the ProjectCellTypes interface
  AllCategories: CategoryTypes[]; // Change to CategoryTypes[]
}

export interface ProjectDetailProps {
  params: {
    slug: string;
  };
}

export interface DynamicGalleryProps {
  project: {
    gallery: Array<{
      asset: {
        _id: string;
        url: string;
      };
    }>;
  };
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface InputProps {
  label: string;
  ico?: any;
  textarea?: boolean;
  type?: string;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => any;
  value: any;
  name : string
}

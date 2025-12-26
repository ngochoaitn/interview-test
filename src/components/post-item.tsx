import { ArrowRight } from "lucide-react";

export interface Post {
  id: string;
  websiteId: string;
  status: string;
  sortOrder: number;
  publishedAt: string;
  viewCount: number;
  createdAt: string;
  createdBy: null;
  updatedAt: string;
  updatedBy: null;
  postContent: {
    id: string;
    langId: string;
    title: string;
    slug: string;
    description: string;
    featuredImage: string;
    language: {
      langCode: string;
      langText: string;
    };
  }[];
  website: {
    id: string;
    displayName: string;
    fullUrl: string;
  };
  postCategories: {
    category: {
      id: string;
      categoryContent: {
        name: string;
        slug: string;
      }[];
    };
  }[];
  _count: {
    postCategories: number;
    postTags: number;
  };
}

export const PostItem = ({ post }: { post: Post }) => {
  return <div className="">
    <div className="p-4 border rounded-md flex flex-col gap-6">
      {post.postContent.map(content=> <div key={content.id} className="space-y-6">
        <img className="object-cover rounded-md" src={`https://api-blog.gpmsoftwares.com/${content.featuredImage}`} alt={content.title} />
        <div className="flex justify-between">
          <div className="truncate w-[70%] font-bold text-xl">{content.title}</div>
          <ArrowRight className="size-6"/>
        </div>
        <div className="truncate">{content.description}</div>
      </div>)}
    </div>
  </div>
}
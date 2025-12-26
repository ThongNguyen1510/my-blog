import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Post } from "@/data/posts";
import { Badge } from "@/components/ui/badge";

interface PostCardProps {
  post: Post;
  index: number;
}

const PostCard = ({ post, index }: PostCardProps) => {
  return (
    <Link
      to={`/blog/${post.id}`}
      className="group block opacity-0 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <article className="h-full p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover-glow card-shadow">
        <div className="flex items-center gap-3 mb-4">
          <Badge
            variant="outline"
            className={
              post.category === "java"
                ? "border-java text-java bg-java/10"
                : "border-javascript text-javascript bg-javascript/10"
            }
          >
            {post.category === "java" ? "Java" : "JavaScript"}
          </Badge>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <h3 className="font-mono font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="h-3 w-3" />
            <span>{new Date(post.date).toLocaleDateString("vi-VN")}</span>
          </div>
          <span className="flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            Đọc thêm
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </article>
    </Link>
  );
};

export default PostCard;

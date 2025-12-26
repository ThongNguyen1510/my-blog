import { useState } from "react";
import { Filter } from "lucide-react";
import Layout from "@/components/Layout";
import PostCard from "@/components/PostCard";
import { posts } from "@/data/posts";
import { Button } from "@/components/ui/button";

type FilterType = "all" | "java" | "javascript";

const Blog = () => {
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredPosts =
    filter === "all"
      ? posts
      : posts.filter((post) => post.category === filter);

  return (
    <Layout>
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-mono text-4xl md:text-5xl font-bold mb-4">
              Blog <span className="text-gradient">Posts</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tổng hợp các bài viết về lập trình Java và JavaScript từ những khóa 
              học tôi đã tham gia.
            </p>
          </div>

          {/* Filter */}
          <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
            <Filter className="h-4 w-4 text-muted-foreground mr-2" />
            <Button
              variant={filter === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("all")}
              className={filter === "all" ? "" : "border-border"}
            >
              Tất cả ({posts.length})
            </Button>
            <Button
              variant={filter === "java" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("java")}
              className={
                filter === "java"
                  ? "bg-java text-java-foreground hover:bg-java/90"
                  : "border-java/50 text-java hover:bg-java/10"
              }
            >
              Java ({posts.filter((p) => p.category === "java").length})
            </Button>
            <Button
              variant={filter === "javascript" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("javascript")}
              className={
                filter === "javascript"
                  ? "bg-javascript text-javascript-foreground hover:bg-javascript/90"
                  : "border-javascript/50 text-javascript hover:bg-javascript/10"
              }
            >
              JavaScript ({posts.filter((p) => p.category === "javascript").length})
            </Button>
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <PostCard key={post.id} post={post} index={index} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              Không có bài viết nào.
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;

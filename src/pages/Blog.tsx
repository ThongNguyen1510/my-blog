import { useState, useMemo } from "react";
import { Filter, Search, X } from "lucide-react";
import Layout from "@/components/Layout";
import PostCard from "@/components/PostCard";
import { posts } from "@/data/posts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type FilterType = "all" | "java" | "javascript";

const Blog = () => {
  const [filter, setFilter] = useState<FilterType>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    let result = posts;

    // Filter by category
    if (filter !== "all") {
      result = result.filter((post) => post.category === filter);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.content.toLowerCase().includes(query)
      );
    }

    return result;
  }, [filter, searchQuery]);

  const clearSearch = () => {
    setSearchQuery("");
  };

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

          {/* Search */}
          <div className="max-w-xl mx-auto mb-8 opacity-0 animate-fade-in">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Tìm kiếm bài viết..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-12 h-12 bg-card border-border focus:border-primary text-base"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="text-sm text-muted-foreground mt-2 text-center">
                Tìm thấy <span className="text-primary font-medium">{filteredPosts.length}</span> kết quả cho "{searchQuery}"
              </p>
            )}
          </div>

          {/* Filter */}
          <div className="flex items-center justify-center gap-2 mb-8 flex-wrap opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
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
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground mb-4">
                Không tìm thấy bài viết nào phù hợp.
              </p>
              <Button variant="outline" onClick={() => { setSearchQuery(""); setFilter("all"); }}>
                Xem tất cả bài viết
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;

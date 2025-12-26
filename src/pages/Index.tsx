import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, User } from "lucide-react";
import Layout from "@/components/Layout";
import ProfileSection from "@/components/ProfileSection";
import PostCard from "@/components/PostCard";
import { posts } from "@/data/posts";
import { Button } from "@/components/ui/button";

const Index = () => {
  const recentPosts = posts.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <ProfileSection />
      </section>

      {/* Recent Posts */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-primary" />
              <h2 className="font-mono text-2xl font-bold">Bài viết mới nhất</h2>
            </div>
            <Link to="/blog">
              <Button variant="ghost" className="group">
                Xem tất cả
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post, index) => (
              <PostCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card rounded-xl p-8 border border-border opacity-0 animate-fade-in">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/30 flex items-center justify-center">
                  <User className="h-10 w-10 text-primary" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-mono text-xl font-semibold mb-2">Tìm hiểu thêm về tôi</h3>
                <p className="text-muted-foreground mb-4">
                  Khám phá hành trình học tập, kỹ năng và những dự án mà tôi đã thực hiện.
                </p>
                <Link to="/about">
                  <Button variant="outline" className="group">
                    Xem trang About
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "9+", label: "Bài viết" },
              { value: "2", label: "Ngôn ngữ" },
              { value: "∞", label: "Đam mê" },
              { value: "24/7", label: "Học tập" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-xl bg-card border border-border opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="font-mono text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

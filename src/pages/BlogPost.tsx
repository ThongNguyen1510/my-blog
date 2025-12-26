import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import { getPostById } from "@/data/posts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? getPostById(id) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    const elements: JSX.Element[] = [];
    let inCodeBlock = false;
    let codeContent = "";
    let codeLanguage = "";

    lines.forEach((line, index) => {
      if (line.startsWith("```")) {
        if (!inCodeBlock) {
          inCodeBlock = true;
          codeLanguage = line.slice(3);
          codeContent = "";
        } else {
          elements.push(
            <pre
              key={index}
              className="bg-muted rounded-lg p-4 overflow-x-auto my-4 text-sm"
            >
              <code className="font-mono">{codeContent.trim()}</code>
            </pre>
          );
          inCodeBlock = false;
        }
        return;
      }

      if (inCodeBlock) {
        codeContent += line + "\n";
        return;
      }

      if (line.startsWith("# ")) {
        elements.push(
          <h1 key={index} className="font-mono text-3xl font-bold mt-8 mb-4">
            {line.slice(2)}
          </h1>
        );
      } else if (line.startsWith("## ")) {
        elements.push(
          <h2 key={index} className="font-mono text-2xl font-semibold mt-6 mb-3 text-primary">
            {line.slice(3)}
          </h2>
        );
      } else if (line.startsWith("### ")) {
        elements.push(
          <h3 key={index} className="font-mono text-xl font-medium mt-4 mb-2">
            {line.slice(4)}
          </h3>
        );
      } else if (line.startsWith("- ")) {
        elements.push(
          <li key={index} className="ml-4 text-muted-foreground">
            {line.slice(2)}
          </li>
        );
      } else if (line.trim() === "") {
        elements.push(<div key={index} className="h-4" />);
      } else {
        elements.push(
          <p key={index} className="text-muted-foreground leading-relaxed">
            {line}
          </p>
        );
      }
    });

    return elements;
  };

  return (
    <Layout>
      <article className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <Link to="/blog">
            <Button variant="ghost" className="mb-6 -ml-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Quay lại
            </Button>
          </Link>

          <header className="mb-8">
            <Badge
              variant="outline"
              className={`mb-4 ${
                post.category === "java"
                  ? "border-java text-java bg-java/10"
                  : "border-javascript text-javascript bg-javascript/10"
              }`}
            >
              {post.category === "java" ? "Java" : "JavaScript"}
            </Badge>

            <h1 className="font-mono text-3xl md:text-4xl font-bold mb-4">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString("vi-VN")}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          <div className="prose prose-invert max-w-none">
            {renderContent(post.content)}
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;

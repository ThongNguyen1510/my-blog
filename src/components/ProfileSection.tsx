import { Code2, Database, Globe, Terminal } from "lucide-react";

const ProfileSection = () => {
  const skills = [
    { icon: Code2, label: "Java", color: "text-java" },
    { icon: Terminal, label: "JavaScript", color: "text-javascript" },
    { icon: Database, label: "SQL", color: "text-primary" },
    { icon: Globe, label: "Networking", color: "text-accent" },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/30 mb-6">
            <span className="font-mono text-3xl font-bold text-primary">NV</span>
          </div>
          <h1 className="font-mono text-4xl md:text-5xl font-bold mb-4">
            Nguyễn Văn <span className="text-gradient">Dev</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sinh viên Công nghệ thông tin | Đam mê lập trình mạng & phát triển ứng dụng
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {skills.map((skill, index) => (
            <div
              key={skill.label}
              className="flex flex-col items-center p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <skill.icon className={`h-8 w-8 ${skill.color} mb-2`} />
              <span className="font-medium text-sm">{skill.label}</span>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-xl p-6 md:p-8 border border-border opacity-0 animate-fade-in" style={{ animationDelay: "600ms" }}>
          <h2 className="font-mono text-xl font-semibold mb-4 text-primary">
            {"// Giới thiệu"}
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Xin chào! Tôi là một sinh viên đam mê công nghệ, đặc biệt là lập trình mạng 
              và phát triển ứng dụng. Blog này là nơi tôi chia sẻ những kiến thức đã học 
              được từ các khóa học về Java và JavaScript.
            </p>
            <p>
              Với mục tiêu trở thành một lập trình viên chuyên nghiệp, tôi không ngừng 
              học hỏi và thực hành. Hy vọng những bài viết của tôi sẽ giúp ích cho các 
              bạn đang trên con đường học lập trình.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;

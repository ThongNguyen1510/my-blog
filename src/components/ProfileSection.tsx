import { Terminal, GitBranch, Container, Cloud } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const ProfileSection = () => {
  const skills = [
    { icon: Terminal, label: "Linux & Bash", color: "text-primary" },
    { icon: GitBranch, label: "Git & CI/CD", color: "text-accent" },
    { icon: Container, label: "Docker", color: "text-primary" },
    { icon: Cloud, label: "Cloud (AWS/Azure)", color: "text-accent" },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full overflow-hidden border-2 border-primary/30 mb-6 hover-glow transition-all">
            <img src={profileImage} alt="Nguyễn Lương Minh Thông" className="w-full h-full object-cover" />
          </div>
          <h1 className="font-mono text-4xl md:text-5xl font-bold mb-4">
            Nguyễn Lương <span className="text-gradient">Minh Thông</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            DevOps Intern | Đam mê Cloud Computing & CI/CD Pipeline
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
              Xin chào! Tôi là sinh viên năm cuối ngành Công nghệ thông tin tại HUTECH với nền tảng 
              vững chắc về Linux, Networking và kinh nghiệm thực hành với Docker, Kubernetes.
            </p>
            <p>
              Tôi đang tìm kiếm cơ hội thực tập DevOps để áp dụng kiến thức trong môi trường CI/CD 
              chuyên nghiệp. Blog này là nơi tôi chia sẻ những kiến thức về lập trình Java, JavaScript 
              và các bài học từ hành trình học tập của mình.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;

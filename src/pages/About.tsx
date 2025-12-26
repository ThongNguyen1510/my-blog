import { Code2, Database, Globe, Terminal, GraduationCap, Briefcase, Heart, MapPin, Mail, Phone, Linkedin, Github, Cloud, GitBranch, Container, Server, Award, Download, Facebook } from "lucide-react";
import Layout from "@/components/Layout";
import profileImage from "@/assets/profile.jpg";
import { Button } from "@/components/ui/button";

const About = () => {
  const skills = [
    { icon: Terminal, label: "Linux & Bash Scripting", level: 80 },
    { icon: GitBranch, label: "Git & GitHub Actions", level: 85 },
    { icon: Container, label: "Docker & Containers", level: 80 },
    { icon: Cloud, label: "Cloud (AWS/Azure)", level: 70 },
    { icon: Globe, label: "Networking (TCP/IP, DNS, HTTP)", level: 75 },
    { icon: Code2, label: "Python & Shell Automation", level: 75 },
    { icon: Server, label: "CI/CD Pipeline", level: 80 },
    { icon: Database, label: "SDLC & DevOps", level: 70 },
  ];

  const certifications = [
    { name: "Introduction to Cybersecurity", org: "Cisco", year: "2024" },
    { name: "Introduction to DevOps", org: "Coursera", year: "2025" },
    { name: "Networking Basics", org: "Cisco", year: "2025" },
    { name: "Introduction to Cloud Computing", org: "Coursera", year: "2025" },
  ];

  const experiences = [
    {
      title: "Ho Chi Minh City University of Technology (HUTECH)",
      organization: "Ngành: Công nghệ Thông tin",
      period: "2022 - Hiện tại",
      description: "GPA: 2.84/4 - Sinh viên năm cuối với nền tảng vững chắc về Linux, Networking và kinh nghiệm thực hành với Docker, Kubernetes."
    },
    {
      title: "DXC Technology Company Tour",
      organization: "Ho Chi Minh City",
      period: "Tháng 10/2025",
      description: "Tham quan DXC Technology để tìm hiểu về quy trình phát triển phần mềm thực tế, DevOps workflows và cloud infrastructure."
    },
    {
      title: "Software Testing & QA Seminar",
      organization: "HUTECH University",
      period: "Tháng 3/2025",
      description: "Học về software testing practices và cơ hội nghề nghiệp trong lĩnh vực QA."
    },
    {
      title: "Tình nguyện viên - Chương trình 'Về Ước Mơ'",
      organization: "HUTECH University",
      period: "Tháng 12/2023",
      description: "Hỗ trợ hoạt động cộng đồng, cải thiện kỹ năng làm việc nhóm và giao tiếp."
    }
  ];

  const projects = [
    {
      title: "CI/CD Microservices Project",
      period: "Tháng 10/2025 - Hiện tại",
      github: "github.com/ThongNguyen1510/cicd-microservices-project",
      description: "Xây dựng ứng dụng microservices với Docker và Docker Compose. Triển khai CI/CD pipeline với GitHub Actions cho automated testing và deployment."
    },
    {
      title: "Agri Blockchain System",
      period: "Tháng 9/2025 - Hiện tại",
      github: "github.com/ThongNguyen1510/agri-blockchain-system",
      description: "Phát triển hệ thống blockchain cho truy xuất nguồn gốc nông sản. Xây dựng và deploy smart contracts đảm bảo minh bạch dữ liệu."
    },
    {
      title: "Real Estate Search & Rental Platform",
      period: "Tháng 3 - 5/2025",
      github: "github.com/ThongNguyen1510/real-estate-project",
      description: "Phát triển web platform tìm kiếm và cho thuê bất động sản với Google Maps API. Backend sử dụng Node.js, Express.js, SQL Server; Frontend React.js."
    }
  ];

  const interests = [
    "Coding",
    "Sports",
    "Gaming",
    "Esports",
    "Emerging Tech Trends",
    "DevOps",
    "Cloud Computing"
  ];

  return (
    <Layout>
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12 opacity-0 animate-fade-in">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full overflow-hidden border-2 border-primary/30 mb-6 hover-glow transition-all">
              <img src={profileImage} alt="Nguyễn Lương Minh Thông" className="w-full h-full object-cover" />
            </div>
            <h1 className="font-mono text-4xl md:text-5xl font-bold mb-4">
              Nguyễn Lương <span className="text-gradient">Minh Thông</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              DevOps Intern
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
              <MapPin className="h-4 w-4" />
              <span>Tân Bình, TP. Hồ Chí Minh</span>
            </div>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground flex-wrap">
              <a href="tel:0909763220" className="flex items-center gap-1 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span>0909763220</span>
              </a>
              <a href="mailto:nguyenluongminhthong@gmail.com" className="flex items-center gap-1 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                <span>nguyenluongminhthong@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/thongnguyen1510/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary transition-colors">
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
              <a href="https://www.facebook.com/ThongNguyen1510" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary transition-colors">
                <Facebook className="h-4 w-4" />
                <span>Facebook</span>
              </a>
            </div>
            <div className="mt-6">
              <a href="/CV_Nguyen_Luong_Minh_Thong.pdf" download>
                <Button className="gap-2">
                  <Download className="h-4 w-4" />
                  Tải CV (PDF)
                </Button>
              </a>
            </div>
          </div>

          {/* Objective */}
          <div 
            className="bg-card rounded-xl p-6 md:p-8 border border-border mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "100ms" }}
          >
            <h2 className="font-mono text-xl font-semibold mb-4 text-primary flex items-center gap-2">
              <Heart className="h-5 w-5" />
              Mục tiêu nghề nghiệp
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Sinh viên năm cuối ngành Công nghệ thông tin với nền tảng vững chắc về Linux, Networking 
                và kinh nghiệm thực hành với Docker và Kubernetes. Tìm kiếm cơ hội thực tập DevOps để áp dụng 
                kiến thức nền tảng trong môi trường CI/CD chuyên nghiệp và tích lũy kinh nghiệm thực tế với 
                các công nghệ Cloud cốt lõi (AWS/Azure/GCP).
              </p>
              <p>
                Blog này là nơi tôi chia sẻ những kiến thức đã học được về lập trình Java và JavaScript, 
                những bài học từ các dự án thực tế, và những tips hữu ích cho các bạn đang trên con đường 
                trở thành lập trình viên.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div 
            className="bg-card rounded-xl p-6 md:p-8 border border-border mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            <h2 className="font-mono text-xl font-semibold mb-6 text-primary flex items-center gap-2">
              <Code2 className="h-5 w-5" />
              Kỹ năng
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div key={skill.label} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <skill.icon className="h-5 w-5 text-primary" />
                      <span className="font-medium text-sm">{skill.label}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-all duration-1000"
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 100 + 300}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Tiếng Anh:</strong> Trình độ B2 - Có khả năng giao tiếp và đọc tài liệu kỹ thuật hiệu quả.
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div 
            className="bg-card rounded-xl p-6 md:p-8 border border-border mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "250ms" }}
          >
            <h2 className="font-mono text-xl font-semibold mb-6 text-primary flex items-center gap-2">
              <Award className="h-5 w-5" />
              Chứng chỉ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-lg bg-muted/50 border border-border hover:border-primary/50 transition-colors"
                >
                  <h3 className="font-semibold text-sm">{cert.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{cert.org} • {cert.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Experience */}
          <div 
            className="bg-card rounded-xl p-6 md:p-8 border border-border mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "300ms" }}
          >
            <h2 className="font-mono text-xl font-semibold mb-6 text-primary flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              Học vấn & Hoạt động
            </h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="relative pl-6 border-l-2 border-border hover:border-primary transition-colors"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary" />
                  <div className="mb-1">
                    <h3 className="font-semibold">{exp.title}</h3>
                    <p className="text-sm text-primary">{exp.organization}</p>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{exp.period}</p>
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div 
            className="bg-card rounded-xl p-6 md:p-8 border border-border mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "350ms" }}
          >
            <h2 className="font-mono text-xl font-semibold mb-6 text-primary flex items-center gap-2">
              <Briefcase className="h-5 w-5" />
              Dự án
            </h2>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-lg bg-muted/50 border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                    <h3 className="font-semibold">{project.title}</h3>
                    <span className="text-xs text-muted-foreground">{project.period}</span>
                  </div>
                  <a 
                    href={`https://${project.github}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline mb-2"
                  >
                    <Github className="h-3 w-3" />
                    {project.github}
                  </a>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div 
            className="bg-card rounded-xl p-6 md:p-8 border border-border opacity-0 animate-fade-in"
            style={{ animationDelay: "400ms" }}
          >
            <h2 className="font-mono text-xl font-semibold mb-6 text-primary flex items-center gap-2">
              <Heart className="h-5 w-5" />
              Sở thích
            </h2>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest, index) => (
                <span 
                  key={interest}
                  className="px-4 py-2 rounded-full bg-muted text-sm font-medium hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                >
                  {interest}
                </span>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-border text-sm text-muted-foreground">
              <p><strong className="text-foreground">Sẵn sàng làm việc:</strong> Full-time hoặc 4 ngày/tuần</p>
              <p className="mt-1">Có thư giới thiệu chính thức từ trường đại học.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

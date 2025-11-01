export interface BlogPost {
  id: string
  titleAr: string
  titleEn: string
  slugAr: string
  slugEn: string
  descriptionAr: string
  descriptionEn: string
  contentAr: string
  contentEn: string
  image: string
  author: string
  date: string
  category: string
  readTime: number
}

export const blogPosts: BlogPost[] = [
  {
    id: "digital-transformation-guide",
    titleAr: "دليل التحول الرقمي للمؤسسات",
    titleEn: "Digital Transformation Guide for Organizations",
    slugAr: "دليل-التحول-الرقمي",
    slugEn: "digital-transformation-guide",
    descriptionAr: "تعرف على خطوات التحول الرقمي الفعال لمؤسستك",
    descriptionEn: "Learn the steps for effective digital transformation of your organization",
    contentAr:
      "التحول الرقمي ليس مجرد تبني التكنولوجيا، بل هو تغيير شامل في طريقة عمل المؤسسة. يتطلب تغييراً في الثقافة، العمليات، والأفراد. في هذا الدليل، سنستكشف الخطوات الأساسية لتحقيق تحول رقمي ناجح.",
    contentEn:
      "Digital transformation is not just about adopting technology, it's a comprehensive change in how organizations operate. It requires changes in culture, processes, and people. In this guide, we'll explore the fundamental steps to achieve successful digital transformation.",
    image: "/placeholder.svg?key=blog1",
    author: "فريق ويريا",
    date: "2024-10-15",
    category: "transformation",
    readTime: 8,
  },
  {
    id: "cybersecurity-best-practices",
    titleAr: "أفضل ممارسات الأمان السيبراني",
    titleEn: "Cybersecurity Best Practices",
    slugAr: "افضل-ممارسات-الامان",
    slugEn: "cybersecurity-best-practices",
    descriptionAr: "حماية بيانات مؤسستك من التهديدات السيبرانية",
    descriptionEn: "Protect your organization's data from cyber threats",
    contentAr:
      "في عالم رقمي متغير، الأمان السيبراني أصبح ضرورة حتمية. تواجه المؤسسات تهديدات متزايدة يومياً. نقدم لك أفضل الممارسات لحماية بيانات مؤسستك بشكل فعال.",
    contentEn:
      "In a changing digital world, cybersecurity has become a necessity. Organizations face increasing threats daily. We provide you with best practices to effectively protect your organization's data.",
    image: "/placeholder.svg?key=blog2",
    author: "فريق ويريا",
    date: "2024-10-10",
    category: "security",
    readTime: 6,
  },
  {
    id: "ai-and-automation",
    titleAr: "الذكاء الاصطناعي والأتمتة",
    titleEn: "AI and Automation in Business",
    slugAr: "الذكاء-الاصطناعي-والاتمتة",
    slugEn: "ai-and-automation",
    descriptionAr: "كيفية استخدام الذكاء الاصطناعي لتحسين العمليات",
    descriptionEn: "How to use AI to improve business processes",
    contentAr:
      "الذكاء الاصطناعي يغير طريقة عمل الشركات. من أتمتة العمليات المتكررة إلى تحسين اتخاذ القرارات، الفرص لا حصر لها. اكتشف كيف يمكن لمؤسستك الاستفادة من هذه التقنيات.",
    contentEn:
      "Artificial intelligence is changing how companies operate. From automating repetitive tasks to improving decision-making, the opportunities are endless. Discover how your organization can benefit from these technologies.",
    image: "/placeholder.svg?key=blog3",
    author: "فريق ويريا",
    date: "2024-10-05",
    category: "technology",
    readTime: 10,
  },
]

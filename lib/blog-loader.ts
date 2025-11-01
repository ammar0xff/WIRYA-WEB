export interface BlogPostFrontmatter {
  titleAr: string
  titleEn: string
  descriptionAr: string
  descriptionEn: string
  author: string
  date: string
  readTime: number
  image?: string
  series?: string
}

export interface BlogPost extends BlogPostFrontmatter {
  id: string
  category: string
  slug: string
  contentAr: string
  contentEn: string
}

// Blog posts with inline markdown content
export const BLOG_POSTS: BlogPost[] = [
  {
    id: "digital-transformation-guide",
    slug: "digital-transformation-guide",
    category: "transformation",
    titleAr: "دليل التحول الرقمي الشامل",
    titleEn: "Complete Digital Transformation Guide",
    descriptionAr: "استكشف الخطوات الأساسية لتحويل عملك رقميًا",
    descriptionEn: "Explore the essential steps to digitally transform your business",
    author: "Ahmed Hassan",
    date: "2024-10-15",
    readTime: 5,
    image: "/digital-transformation-concept.png",
    series: "Digital Transformation",
    contentAr: `# دليل التحول الرقمي الشامل

التحول الرقمي ليس خيارًا بعد الآن، بل هو ضرورة حتمية للشركات التي تريد البقاء تنافسية في عالم الأعمال الحديث.

## لماذا التحول الرقمي؟

في عصر التكنولوجيا المتسارعة، أصبح التحول الرقمي ضرورة لا غنى عنها. الشركات التي تتبنى التحول الرقمي تحقق:

- **زيادة الكفاءة**: أتمتة العمليات توفر الوقت والموارد
- **تحسين تجربة العملاء**: خدمات رقمية أسرع وأكثر سلاسة
- **ميزة تنافسية**: البقاء في صدارة المنافسة

## الخطوة الأولى: التقييم الشامل

قبل البدء في أي مشروع تحول رقمي، يجب عليك تقييم الوضع الحالي لعملك:

1. **تحليل العمليات الحالية**: فهم كيفية عمل الأنظمة الحالية
2. **تحديد نقاط الضعف**: معرفة المجالات التي تحتاج إلى تحسين
3. **قياس الأداء**: وضع مؤشرات أداء واضحة

## الخطوة الثانية: التخطيط الاستراتيجي

ضع خطة واضحة وقابلة للتنفيذ:

- حدد الأهداف قصيرة وطويلة المدى
- خصص الموارد اللازمة
- ضع جدولاً زمنياً واقعياً

## الخطوة الثالثة: التنفيذ التدريجي

ابدأ بمشاريع صغيرة وتدرج تدريجيًا:

1. اختر مشروعاً تجريبياً
2. قيّم النتائج
3. وسّع النطاق تدريجياً

## الخلاصة

التحول الرقمي رحلة مستمرة تتطلب التزاماً والتكيف المستمر مع التغيرات التكنولوجية.`,
    contentEn: `# Complete Digital Transformation Guide

Digital transformation is no longer optional—it's a necessity for businesses wanting to stay competitive in the modern business world.

## Why Digital Transformation?

In an era of rapid technological advancement, digital transformation has become indispensable. Companies that embrace digital transformation achieve:

- **Increased Efficiency**: Process automation saves time and resources
- **Improved Customer Experience**: Faster and smoother digital services
- **Competitive Advantage**: Staying ahead of the competition

## Step 1: Comprehensive Assessment

Before starting any digital transformation project, assess your business's current state:

1. **Analyze Current Processes**: Understand how existing systems work
2. **Identify Weaknesses**: Know which areas need improvement
3. **Measure Performance**: Set clear performance indicators

## Step 2: Strategic Planning

Create a clear and actionable plan:

- Define short and long-term goals
- Allocate necessary resources
- Set a realistic timeline

## Step 3: Gradual Implementation

Start with small projects and scale gradually:

1. Choose a pilot project
2. Evaluate results
3. Expand scope progressively

## Conclusion

Digital transformation is an ongoing journey that requires commitment and continuous adaptation to technological changes.`,
  },
  {
    id: "cybersecurity-best-practices",
    slug: "cybersecurity-best-practices",
    category: "security",
    titleAr: "أفضل ممارسات الأمن السيبراني",
    titleEn: "Cybersecurity Best Practices",
    descriptionAr: "احم عملك من التهديدات السيبرانية مع أفضل الممارسات",
    descriptionEn: "Protect your business from cyber threats with best practices",
    author: "Fatima Al-Mansouri",
    date: "2024-10-10",
    readTime: 6,
    image: "/cybersecurity-network.png",
    series: "Security Essentials",
    contentAr: `# أفضل ممارسات الأمن السيبراني

الأمن السيبراني أصبح أساسيًا لأي عمل في العصر الرقمي. مع تزايد التهديدات الإلكترونية، يجب على الشركات اتخاذ خطوات استباقية لحماية بياناتها وأنظمتها.

## المبدأ الأول: كلمات المرور القوية

استخدم كلمات مرور معقدة وفريدة لكل حساب:

- **الطول**: على الأقل 12 حرفاً
- **التعقيد**: مزيج من الأحرف والأرقام والرموز
- **التفرد**: كلمة مرور مختلفة لكل حساب
- **المصادقة الثنائية**: تفعيل 2FA حيثما أمكن

## المبدأ الثاني: التحديثات المنتظمة

حافظ على تحديث جميع الأنظمة والبرامج:

1. تحديثات نظام التشغيل
2. تحديثات التطبيقات
3. تحديثات الأمان
4. تحديثات البرامج الثابتة

## المبدأ الثالث: النسخ الاحتياطية

قم بعمل نسخ احتياطية منتظمة لبيانات عملك:

- **التكرار**: نسخ احتياطية يومية أو أسبوعية
- **التنوع**: استخدم مواقع تخزين متعددة
- **الاختبار**: تحقق من إمكانية استعادة البيانات

## المبدأ الرابع: التدريب والتوعية

الموظفون هم خط الدفاع الأول:

- تدريب منتظم على الأمن السيبراني
- التوعية بالتصيد الاحتيالي
- سياسات أمنية واضحة

## الخلاصة

الأمن السيبراني مسؤولية مشتركة تتطلب يقظة مستمرة والتزاماً من جميع أفراد المؤسسة.`,
    contentEn: `# Cybersecurity Best Practices

Cybersecurity has become essential for any business in the digital age. With increasing cyber threats, companies must take proactive steps to protect their data and systems.

## Principle 1: Strong Passwords

Use complex and unique passwords for each account:

- **Length**: At least 12 characters
- **Complexity**: Mix of letters, numbers, and symbols
- **Uniqueness**: Different password for each account
- **Two-Factor Authentication**: Enable 2FA wherever possible

## Principle 2: Regular Updates

Keep all systems and software updated:

1. Operating system updates
2. Application updates
3. Security patches
4. Firmware updates

## Principle 3: Regular Backups

Make regular backups of your business data:

- **Frequency**: Daily or weekly backups
- **Diversity**: Use multiple storage locations
- **Testing**: Verify data recovery capability

## Principle 4: Training and Awareness

Employees are the first line of defense:

- Regular cybersecurity training
- Phishing awareness
- Clear security policies

## Conclusion

Cybersecurity is a shared responsibility that requires constant vigilance and commitment from all members of the organization.`,
  },
  {
    id: "ai-and-automation",
    slug: "ai-and-automation",
    category: "technology",
    titleAr: "الذكاء الاصطناعي والأتمتة",
    titleEn: "AI and Automation",
    descriptionAr: "كيف يغير الذكاء الاصطناعي المشهد التجاري",
    descriptionEn: "How AI is changing the business landscape",
    author: "Mohammed Al-Zahra",
    date: "2024-10-05",
    readTime: 7,
    image: "/artificial-intelligence-network.png",
    series: "Future Tech",
    contentAr: `# الذكاء الاصطناعي والأتمتة

الذكاء الاصطناعي يحول طريقة عمل الشركات بشكل جذري، مما يفتح آفاقاً جديدة للكفاءة والابتكار.

## ما هو الذكاء الاصطناعي؟

الذكاء الاصطناعي هو قدرة الآلات على محاكاة الذكاء البشري:

- **التعلم الآلي**: الأنظمة التي تتعلم من البيانات
- **معالجة اللغة الطبيعية**: فهم وتوليد اللغة البشرية
- **الرؤية الحاسوبية**: تحليل وفهم الصور والفيديو

## فوائد الأتمتة

توفير الوقت والتكاليف بشكل كبير:

1. **تقليل الأخطاء البشرية**: دقة أعلى في العمليات
2. **زيادة الإنتاجية**: العمل على مدار الساعة
3. **توفير التكاليف**: تقليل الحاجة للعمالة اليدوية
4. **تحسين الجودة**: اتساق في النتائج

## التطبيقات العملية

من خدمة العملاء إلى إدارة المشاريع:

### خدمة العملاء
- روبوتات الدردشة الذكية
- الرد الآلي على الاستفسارات
- تحليل مشاعر العملاء

### إدارة المشاريع
- جدولة المهام الذكية
- توقع المخاطر
- تحسين تخصيص الموارد

### التسويق
- تخصيص المحتوى
- تحليل سلوك المستخدمين
- التنبؤ بالاتجاهات

## المستقبل

الذكاء الاصطناعي سيكون أساس معظم العمليات التجارية:

- **الأتمتة الكاملة**: عمليات تجارية مؤتمتة بالكامل
- **القرارات الذكية**: أنظمة تتخذ قرارات معقدة
- **التخصيص الشامل**: تجارب مخصصة لكل عميل

## الخلاصة

الذكاء الاصطناعي ليس مستقبلاً بعيداً، بل هو حاضر يجب على الشركات التكيف معه الآن.`,
    contentEn: `# AI and Automation

Artificial intelligence is fundamentally transforming how companies operate, opening new horizons for efficiency and innovation.

## What is Artificial Intelligence?

AI is the ability of machines to simulate human intelligence:

- **Machine Learning**: Systems that learn from data
- **Natural Language Processing**: Understanding and generating human language
- **Computer Vision**: Analyzing and understanding images and video

## Benefits of Automation

Significant time and cost savings:

1. **Reducing Human Errors**: Higher accuracy in operations
2. **Increasing Productivity**: 24/7 operations
3. **Cost Savings**: Reduced need for manual labor
4. **Quality Improvement**: Consistency in results

## Practical Applications

From customer service to project management:

### Customer Service
- Intelligent chatbots
- Automated query responses
- Customer sentiment analysis

### Project Management
- Smart task scheduling
- Risk prediction
- Resource allocation optimization

### Marketing
- Content personalization
- User behavior analysis
- Trend forecasting

## The Future

AI will be the foundation of most business operations:

- **Full Automation**: Completely automated business processes
- **Smart Decisions**: Systems making complex decisions
- **Complete Personalization**: Customized experiences for each customer

## Conclusion

AI is not a distant future—it's a present reality that companies must adapt to now.`,
  },
]

export function getAllBlogPosts(): BlogPost[] {
  return BLOG_POSTS.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getBlogPostById(id: string): BlogPost | null {
  return BLOG_POSTS.find((post) => post.id === id) || null
}

export function getAllCategories(): string[] {
  return Array.from(new Set(BLOG_POSTS.map((post) => post.category)))
}

export function getAllSeries(): string[] {
  const series = new Set<string>()
  BLOG_POSTS.forEach((post) => {
    if (post.series) {
      series.add(post.series)
    }
  })
  return Array.from(series)
}

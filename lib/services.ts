export interface ServiceOption {
  id: string
  nameAr: string
  nameEn: string
  priceModifier: number
}

export interface Service {
  id: string
  category: string
  nameAr: string
  nameEn: string
  descriptionAr: string
  descriptionEn: string
  price: number
  currency: string
  image: string
  options: ServiceOption[]
  whatsappLink: string
  detailedDescAr: string
  detailedDescEn: string
  detailedContentPath?: string
  longDescriptionAr?: string
  longDescriptionEn?: string
}

export interface ServiceCategory {
  id: string
  nameAr: string
  nameEn: string
}

export const serviceCategories: ServiceCategory[] = [
  { id: "support", nameAr: "الدعم والصيانة", nameEn: "Support & Maintenance" },
  { id: "transformation", nameAr: "التحول الرقمي", nameEn: "Digital Transformation" },
  { id: "consulting", nameAr: "الاستشارات", nameEn: "Consulting" },
  { id: "optimization", nameAr: "تحسين الأداء", nameEn: "Optimization" },
  { id: "security", nameAr: "الأمان السيبراني", nameEn: "Cybersecurity" },
  { id: "development", nameAr: "تطوير البرامج", nameEn: "Development" },
]

export const services: Service[] = [
  {
    id: "tech-support-24-7",
    category: "support",
    nameAr: "الدعم الفني 24/7",
    nameEn: "24/7 Technical Support",
    descriptionAr: "دعم فني متخصص طوال اليوم",
    descriptionEn: "Specialized technical support all day",
    price: 299,
    currency: "SAR",
    image: "/technical-support-center.jpg",
    detailedDescAr: "خدمة دعم فني شاملة توفر الاستجابة السريعة والحلول الفعالة لجميع مشاكلك التقنية بدون توقف",
    detailedDescEn:
      "Comprehensive technical support service providing rapid response and effective solutions for all your technical issues without interruption",
    longDescriptionAr: `# الدعم الفني 24/7

نوفر لك دعماً فنياً متخصصاً على مدار الساعة لضمان استمرارية عملك دون انقطاع.

## ما نقدمه

### استجابة فورية
- فريق متاح 24/7
- وقت استجابة أقل من 15 دقيقة
- دعم عبر قنوات متعددة

### حلول شاملة
- حل المشاكل التقنية
- صيانة وقائية
- تحديثات منتظمة

### خبرة متخصصة
- فريق من المحترفين المعتمدين
- خبرة في جميع الأنظمة
- تدريب مستمر

## الباقات المتاحة

### الباقة الأساسية
- دعم عبر البريد الإلكتروني
- استجابة خلال ساعة
- تقارير شهرية

### الباقة الاحترافية
- دعم عبر الهاتف والبريد
- استجابة خلال 30 دقيقة
- مدير حساب مخصص

### الباقة المؤسسية
- دعم فوري عبر جميع القنوات
- استجابة خلال 15 دقيقة
- فريق دعم مخصص`,
    longDescriptionEn: `# 24/7 Technical Support

We provide specialized technical support around the clock to ensure your business continuity without interruption.

## What We Offer

### Immediate Response
- Team available 24/7
- Response time under 15 minutes
- Support across multiple channels

### Comprehensive Solutions
- Technical problem solving
- Preventive maintenance
- Regular updates

### Specialized Expertise
- Team of certified professionals
- Experience with all systems
- Continuous training

## Available Packages

### Basic Package
- Email support
- Response within one hour
- Monthly reports

### Professional Package
- Phone and email support
- Response within 30 minutes
- Dedicated account manager

### Enterprise Package
- Instant support across all channels
- Response within 15 minutes
- Dedicated support team`,
    options: [
      { id: "basic", nameAr: "باقة أساسية", nameEn: "Basic Package", priceModifier: 0 },
      { id: "pro", nameAr: "باقة احترافية", nameEn: "Professional Package", priceModifier: 200 },
      { id: "enterprise", nameAr: "باقة مؤسسية", nameEn: "Enterprise Package", priceModifier: 500 },
    ],
    whatsappLink: "https://wa.me/96612345678?text=I%20want%20to%20order%20Technical%20Support",
  },
  {
    id: "digital-transformation",
    category: "transformation",
    nameAr: "خدمة التحول الرقمي",
    nameEn: "Digital Transformation Service",
    descriptionAr: "حلول متكاملة للتحول الرقمي",
    descriptionEn: "Integrated digital transformation solutions",
    price: 5999,
    currency: "SAR",
    image: "/digital-transformation-concept.png",
    detailedDescAr: "نساعد مؤسستك على الانتقال إلى العصر الرقمي بخطوات منظمة وحلول شاملة",
    detailedDescEn:
      "We help your organization transition to the digital age with organized steps and comprehensive solutions",
    longDescriptionAr: `# خدمة التحول الرقمي

نساعدك في رحلة التحول الرقمي الشاملة لمؤسستك مع استراتيجية واضحة وتنفيذ احترافي.

## منهجيتنا

### المرحلة الأولى: التقييم
- تحليل الوضع الحالي
- تحديد الفرص والتحديات
- وضع خارطة طريق

### المرحلة الثانية: التخطيط
- تصميم الاستراتيجية الرقمية
- تحديد الأولويات
- تخصيص الموارد

### المرحلة الثالثة: التنفيذ
- تطبيق الحلول التقنية
- تدريب الفريق
- إدارة التغيير

### المرحلة الرابعة: التحسين المستمر
- قياس الأداء
- التحسين المستمر
- التوسع التدريجي

## الفوائد

- زيادة الكفاءة التشغيلية
- تحسين تجربة العملاء
- خفض التكاليف
- ميزة تنافسية`,
    longDescriptionEn: `# Digital Transformation Service

We help you in your organization's comprehensive digital transformation journey with a clear strategy and professional implementation.

## Our Methodology

### Phase 1: Assessment
- Current state analysis
- Identify opportunities and challenges
- Create roadmap

### Phase 2: Planning
- Design digital strategy
- Set priorities
- Allocate resources

### Phase 3: Implementation
- Apply technical solutions
- Team training
- Change management

### Phase 4: Continuous Improvement
- Performance measurement
- Continuous improvement
- Gradual expansion

## Benefits

- Increased operational efficiency
- Improved customer experience
- Cost reduction
- Competitive advantage`,
    options: [
      { id: "assessment", nameAr: "تقييم شامل", nameEn: "Full Assessment", priceModifier: 0 },
      { id: "planning", nameAr: "التخطيط والتنفيذ", nameEn: "Planning & Implementation", priceModifier: 3000 },
      { id: "full-transformation", nameAr: "تحول شامل", nameEn: "Complete Transformation", priceModifier: 8000 },
    ],
    whatsappLink: "https://wa.me/96612345678?text=I%20want%20to%20order%20Digital%20Transformation",
  },
  {
    id: "consulting",
    category: "consulting",
    nameAr: "استشارات تقنية",
    nameEn: "Technical Consulting",
    descriptionAr: "استشارات احترافية من الخبراء",
    descriptionEn: "Professional consulting from experts",
    price: 399,
    currency: "SAR",
    image: "/business-consulting.png",
    detailedDescAr: "استشارات متخصصة من خبراء التكنولوجيا لتحسين استراتيجيتك الرقمية",
    detailedDescEn: "Specialized consulting from technology experts to improve your digital strategy",
    options: [
      { id: "hourly", nameAr: "استشارة بالساعة", nameEn: "Hourly Consultation", priceModifier: 0 },
      { id: "half-day", nameAr: "استشارة نصف يوم", nameEn: "Half Day Consulting", priceModifier: 400 },
      { id: "full-day", nameAr: "استشارة يوم كامل", nameEn: "Full Day Consulting", priceModifier: 700 },
    ],
    whatsappLink: "https://wa.me/96612345678?text=I%20want%20to%20order%20Technical%20Consulting",
  },
  {
    id: "performance-optimization",
    category: "optimization",
    nameAr: "تحسين الأداء",
    nameEn: "Performance Optimization",
    descriptionAr: "تحسين كفاءة أنظمتك",
    descriptionEn: "Improve system efficiency",
    price: 1999,
    currency: "SAR",
    image: "/performance-optimization.png",
    detailedDescAr: "تحليل شامل وتحسين لأداء أنظمتك لتحقيق أقصى إنتاجية",
    detailedDescEn: "Comprehensive analysis and improvement of system performance to achieve maximum productivity",
    options: [
      { id: "analysis", nameAr: "تحليل الأداء", nameEn: "Performance Analysis", priceModifier: 0 },
      { id: "optimization", nameAr: "التحسين", nameEn: "Optimization", priceModifier: 1500 },
      { id: "monitoring", nameAr: "المراقبة المستمرة", nameEn: "Continuous Monitoring", priceModifier: 2000 },
    ],
    whatsappLink: "https://wa.me/96612345678?text=I%20want%20to%20order%20Performance%20Optimization",
  },
  {
    id: "cybersecurity",
    category: "security",
    nameAr: "الأمان السيبراني",
    nameEn: "Cybersecurity",
    descriptionAr: "حماية شاملة ضد التهديدات",
    descriptionEn: "Complete protection against threats",
    price: 2499,
    currency: "SAR",
    image: "/cybersecurity-network.png",
    detailedDescAr: "خدمات أمان سيبراني متقدمة لحماية بيانات مؤسستك من التهديدات",
    detailedDescEn: "Advanced cybersecurity services to protect your organization's data from threats",
    options: [
      { id: "assessment", nameAr: "تقييم الأمان", nameEn: "Security Assessment", priceModifier: 0 },
      { id: "protection", nameAr: "الحماية الكاملة", nameEn: "Full Protection", priceModifier: 2000 },
      { id: "monitoring", nameAr: "المراقبة الأمنية", nameEn: "Security Monitoring", priceModifier: 3000 },
    ],
    whatsappLink: "https://wa.me/96612345678?text=I%20want%20to%20order%20Cybersecurity",
  },
  {
    id: "custom-development",
    category: "development",
    nameAr: "تطوير برامج مخصصة",
    nameEn: "Custom Software Development",
    descriptionAr: "حلول برمجية حسب احتياجاتك",
    descriptionEn: "Custom software solutions",
    price: 7999,
    currency: "SAR",
    image: "/software-development-collaboration.png",
    detailedDescAr: "تطوير برامج مخصصة تناسب احتياجات مؤسستك بالكامل",
    detailedDescEn: "Develop custom software that fully meets your organization's needs",
    options: [
      { id: "web", nameAr: "تطوير ويب", nameEn: "Web Development", priceModifier: 0 },
      { id: "mobile", nameAr: "تطبيق موبايل", nameEn: "Mobile App", priceModifier: 3000 },
      { id: "full-stack", nameAr: "نظام متكامل", nameEn: "Full Stack System", priceModifier: 6000 },
    ],
    whatsappLink: "https://wa.me/96612345678?text=I%20want%20to%20order%20Custom%20Development",
  },
]

export const SERVICES = services

"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, Phone, Moon, Sun, FileDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { ParticlesContainer } from "@/components/particles"
import { useState, useEffect } from "react"
import { MobileNav } from "@/components/mobile-nav"
import { FloatingNav } from "@/components/floating-nav"
import { CustomCursor } from "@/components/cursor"
import { Timeline } from "@/components/timeline"
import { SectionHeading } from "@/components/section-heading"
import { Tilt } from "react-tilt"
import { SkillCard } from "@/components/skill-card"
import { MainNav } from "@/components/main-nav"

const skills = [
  {
    name: "Machine Learning",
    level: 95,
    category: "AI & Data Science",
  },
  {
    name: "Python",
    level: 90,
    category: "Programming",
  },
  {
    name: "Data Analysis",
    level: 92,
    category: "Data Science",
  },
  {
    name: "TensorFlow/PyTorch",
    level: 88,
    category: "AI & Data Science",
  },
  {
    name: "SQL",
    level: 85,
    category: "Databases",
  },
  {
    name: "React/Next.js",
    level: 82,
    category: "Web Development",
  },
  {
    name: "AWS",
    level: 80,
    category: "Cloud Computing",
  },
  {
    name: "Docker/Kubernetes",
    level: 78,
    category: "DevOps",
  },
]

export default function Portfolio() {
  const { scrollYProgress } = useScroll()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  const downloadResume = () => {
    const resumeContent = `Shivam Singh
Email: shivamsingh@ucsb.edu
https://www.linkedin.com/in/shivamsingh56/
Mobile: +1-510-953-2376

Education
University of California, Santa Barbara                                            Santa Barbara, CA
Bachelor of Science in Statistics and Data Science                                Sept. 2022 – June 2026

Relevant Coursework:
• Completed: Algorithms & Data Structures, Statistical Modeling, Python for Data Science & Finance, Linear Algebra, Probability & Stochastic Processes
• Planned (2025-2026): Advanced Regression Techniques for Financial Modeling, Machine Learning Applications in Finance, Stochastic Processes in Financial Systems, Time Series Analysis for Market Data

Experience
UCSB Human-AI-Interaction-Lab                                                     Santa Barbara, CA
Machine Learning Researcher                                                       Jan 2025 - Present
• Developing Autonomous Retrieval-Augmented Generation (RAG) Agents under the guidance of Dr. Chen, optimizing retrieval pipelines to improve contextual accuracy and reduce hallucinations
• Optimizing retrieval techniques to improve knowledge grounding, leveraging reinforcement learning and prompt engineering for dynamic, self-improving query generation in autonomous agents

Artificial Intelligence Student Collective                                        Riverside, CA
Machine Learning Lead                                                            Mar 2024 - June 2024
• Led a team of 7 to design and deploy a CNN model for skin lesion classification, boosting accuracy by 20%
• Optimized data preprocessing in Python, cutting image processing time by 30%
• Analyzed model performance using K-Nearest Neighbor and CNNs, presenting findings at the AISC symposium

Metalane                                                                         San Francisco, GA
Software Engineering Intern                                                      June 2023 - September 2023
• Built a React-based web dashboard, enhancing user alert management efficiency by 15%
• Integrated Google's Digital Ink API to enable stylus input for users with limited dexterity
• Collaborated in an Agile team to develop data-driven web applications, leveraging React/Redux for interactive data visualization

Projects
Automated Financial Data Pipeline for Market Insights                            Dec 2024
• Built an ETL pipeline to ingest and load e-commerce data into AWS RDS using SQLAlchemy, improving query performance by 35%
• Optimized large-scale data transformations with PySpark for customer segmentation and revenue aggregation, boosting processing efficiency
• Built interactive Tableau dashboards visualizing key business metrics from a SQL-backed data warehouse, enhancing data accessibility

Market Regime Analysis using ML for Financial Forecasting                        June 2024
• Modeled historical market trends and volatility shifts using time series forecasting, identifying potential market regimes and inefficiencies relevant to proprietary trading strategies
• Researched market structure and historical price movements to assess trends in asset volatility, incorporating external factors such as earnings releases and economic cycles
• Analyzed price patterns and clustering of financial data to detect shifts in market behavior

Technical Skills
Programming Languages: Python, Java, SQL (PostgreSQL, MySQL, SQLite), HTML/CSS
Machine Learning: TensorFlow, PyTorch, Scikit-learn, XGBoost, LightGBM, LLMs (BERT, Llama, GPT)
Financial Data Analysis: Market Volatility, Risk Modeling, Backtesting, Time Series Forecasting
Frameworks: NumPy, Pandas, Keras, Matplotlib, Seaborn, OpenCV
Data Analytics: Tableau, Power BI, Excel, Hypothesis Testing
Developer Tools: Jira, Flask, Docker, Git, AWS (Lambda, EC2, S3), Jupyter Notebooks, Kubernetes`

    const blob = new Blob([resumeContent], { type: "text/plain" })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "Shivam_Singh_Resume.txt"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
  }

  const experienceItems = [
    {
      title: "Machine Learning Researcher",
      company: "UCSB Human-AI-Interaction-Lab",
      date: "Jan 2025 - Present",
      description: [
        "Developing Autonomous RAG Agents under Dr. Chen's guidance",
        "Optimizing retrieval techniques for knowledge grounding",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "Metalane",
      date: "June 2023 - September 2023",
      description: [
        "Built React-based web dashboard, improving efficiency by 15%",
        "Integrated Google's Digital Ink API for accessibility",
        "Developed data-driven applications using React/Redux",
      ],
    },
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/50 dark:from-slate-950 dark:to-blue-950/30 relative">
      <CustomCursor />
      <ParticlesContainer />
      <FloatingNav />

      <motion.div
        className="fixed bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600"
        style={{ scaleX: scrollYProgress }}
      />

      <header className="sticky top-0 z-50 w-full border-b bg-background/80 dark:bg-slate-950/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Shivam Singh
          </Link>
          <div className="flex items-center gap-4">
            <MainNav />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hidden md:inline-flex"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <MobileNav />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="min-h-[90vh] flex flex-col-reverse md:flex-row items-center justify-center gap-12 py-16"
        >
          <div className="space-y-6 text-center md:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Shivam Singh
                </span>
              </h1>
              <p className="mt-6 text-xl text-muted-foreground max-w-[600px]">
                Statistics & Data Science student at UCSB, passionate about Machine Learning and Financial Data Analysis
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <Button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                onClick={downloadResume}
              >
                <FileDown className="mr-2 h-4 w-4" />
                Download CV
              </Button>
              <Button variant="outline" className="border-blue-600/20" asChild>
                <Link href="https://www.linkedin.com/in/shivamsingh56/" target="_blank">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>
            </motion.div>
          </div>
          <Tilt
            options={{
              max: 25,
              scale: 1.05,
              speed: 400,
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.2,
              }}
              className="relative w-72 h-72 rounded-full overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-1">
                <div className="bg-background dark:bg-slate-950 rounded-full p-2">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Professional-Headshot.png-DmOzNIG6MPV3vWqC9f3AjPNPaRAg24.jpeg"
                    alt="Professional headshot"
                    fill
                    className="object-cover rounded-full"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </Tilt>
        </motion.section>

        {/* Experience Section */}
        <motion.section id="experience" style={{ scale: scaleProgress, opacity: opacityProgress }} className="py-16">
          <SectionHeading>Experience</SectionHeading>
          <Timeline items={experienceItems} />
        </motion.section>

        {/* Skills Section */}
        <motion.section id="skills" style={{ scale: scaleProgress, opacity: opacityProgress }} className="py-16">
          <SectionHeading>Technical Skills</SectionHeading>
          <div className="grid gap-4 md:grid-cols-2">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} name={skill.name} level={skill.level} index={index} />
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section id="projects" style={{ scale: scaleProgress, opacity: opacityProgress }} className="py-16">
          <SectionHeading>Projects</SectionHeading>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "StrokeSense",
                description: "AI-Powered Stroke Risk Analysis",
                details:
                  "An innovative healthcare application that leverages machine learning to analyze stroke risk factors and provide early warning indicators. Built with a focus on accessibility and accurate risk assessment, this tool helps users understand their stroke risk profile through interactive visualizations and personalized analysis. Developed for UCSB's Data Orbit event, it achieved 92% accuracy in predicting stroke likelihood using RandomForestClassifier and decision trees.",
                github: "https://github.com/ShivamSinghNow/StrokeDashboard",
              },
              {
                title: "Automated Financial Data Pipeline",
                description: "Real-time Market Intelligence Platform",
                details:
                  "A comprehensive market intelligence solution that transforms raw financial data into actionable insights in real-time. This platform enables financial analysts to identify market trends and make data-driven decisions through automated data processing and interactive visualizations. The system processes over 1M daily trading records with 60% improved efficiency through distributed computing.",
                github:
                  "https://github.com/ShivamSinghNow/Automated-Data-Warehouse-and-ETL-Pipeline-for-E-Commerce-Dataset",
              },
              {
                title: "Market Regime Analysis",
                description: "Advanced Financial Forecasting System",
                details:
                  "A stock price prediction system leveraging K-Means Clustering and LSTM models to analyze NVIDIA (NVDA) stock trends. It processes technical indicators to detect market phases and forecast price movements, helping investors make data-driven decisions. The model combines unsupervised clustering with deep learning for enhanced predictive accuracy.",
                github: "https://github.com/ShivamSinghNow/Stock-Prediction-Model",
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm border-blue-600/20">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{project.title}</CardTitle>
                      <Button variant="ghost" size="icon" asChild>
                        <Link href={project.github} target="_blank">
                          <Github className="h-5 w-5" />
                          <span className="sr-only">View on GitHub</span>
                        </Link>
                      </Button>
                    </div>
                    <CardDescription className="text-base mb-4">{project.description}</CardDescription>
                    <div className="text-sm text-muted-foreground">{project.details}</div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          style={{ scale: scaleProgress, opacity: opacityProgress }}
          className="py-16 text-center"
        >
          <SectionHeading className="text-center">Get in Touch</SectionHeading>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              asChild
            >
              <Link href="mailto:shivamsingh@ucsb.edu">
                <Mail className="mr-2 h-4 w-4" />
                shivamsingh@ucsb.edu
              </Link>
            </Button>
            <Button variant="outline" className="border-blue-600/20" asChild>
              <Link href="tel:+15109532376">
                <Phone className="mr-2 h-4 w-4" />
                +1 (510) 953-2376
              </Link>
            </Button>
            <Button variant="outline" className="border-blue-600/20" asChild>
              <Link href="https://www.linkedin.com/in/shivamsingh56/" target="_blank">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Link>
            </Button>
            <Button variant="outline" className="border-blue-600/20" asChild>
              <Link href="https://github.com/ShivamSinghNow" target="_blank">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>
          </motion.div>
        </motion.section>
      </main>
    </div>
  )
}


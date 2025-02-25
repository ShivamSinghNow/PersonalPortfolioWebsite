import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function downloadResume() {
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


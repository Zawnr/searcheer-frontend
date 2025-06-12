import React from 'react';
import { motion } from 'framer-motion';
import CardFeature from '../components/About/CardFeature';
import FaqAccordion from '../components/About/FaqAccordion';
import bgBlurTeam from '../assets/images/Bg/bg-blur-team.png';
import VideoCard from '../components/About/VideoCard';

// DATA: FAQ
const faqs = [
	{
		question: 'Can I upload a CV?',
		answer:
			'Yes, absolutely! Searcheer supports CV uploads in PDF format that are ATS-friendly and written in English. Simply click the upload button, select your CV file, and our AI will automatically extract and analyze the content. Make sure your CV follows standard formatting for the best analysis results.',
	},
	{
		question: 'How long will the analysis process take?',
		answer:
			'The CV analysis process typically takes 2-3 minutes depending on the complexity of your CV and the job description you’re matching against. Our AI needs time to: Extract your PDF, Identify skills and qualifications using NLP, Calculate similarity scores with job requirements, Generate personalized feedback and recommendations.',
	},
	{
		question: 'What does the analysis process involve?',
		answer:
			'Our comprehensive analysis includes several advanced steps: Extraction, Skill Identification, Job Matching, Gap Analysis, Success Prediction, Personalized Recommendations.',
	},
	{
		question: 'Do you provide services for fresh graduates and students?',
		answer:
			'Yes, we specialize in helping students and fresh graduates! Searcheer was specifically designed to address the unique challenges faced by final-year students preparing for internships and entry-level positions, fresh graduates entering the job market for the first time, career changers, and international students unfamiliar with local job market standards.',
	},
	{
		question: 'What file formats do you support?',
		answer:
			'Currently, we support PDF format for CV uploads to ensure maximum compatibility with our analysis algorithms.',
	},
	{
		question: 'How accurate is your job matching algorithm?',
		answer:
			'Our algorithm leverages advanced Natural Language Processing (NLP) and machine learning models to provide accurate job matching and recommendations.',
	},
	{
		question: 'Is my data secure and private?',
		answer:
			'Absolutely! We prioritize your privacy and use industry best practices to keep your data secure and confidential.',
	},
	{
		question: 'Can I analyze multiple job descriptions with one CV?',
		answer:
			'Currently, our platform provides instant job recommendations based on your CV analysis. We’re planning to introduce this feature in future updates.',
	},
	{
		question: "What if my CV doesn't match any job descriptions well?",
		answer:
			'Don’t worry! We will give you recommendations to improve your CV and skills.',
	},
];

// DATA: How it works cards
const features = [
	{
		icon: '👤',
		title: 'Create Account',
		desc: 'Create your account in minutes to get started with personalized career support.',
	},
	{
		icon: '📄',
		title: 'Upload Resume',
		desc: 'Upload your ATS-friendly CV and paste the job description you’re targeting — we’ll do the rest.',
	},
	{
		icon: '💼',
		title: 'Find Jobs',
		desc: 'Our AI analyzes your CV and provides a match score, skill gap feedback, and best-fit job suggestions.',
	},
	{
		icon: '✅',
		title: 'Apply Job',
		desc: 'Update your CV with our insights and apply to the right jobs — smarter, faster.',
	},
];

export default function AboutUs() {
	return (
		<div className="bg-white min-h-screen">
			{/* Section: Hero + Title */}
			<div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pt-12 pb-2">
				<motion.h1
					className="text-4xl md:text-5xl font-bold text-center mb-14 mt-4"
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: 'easeOut' }}
				>
					About Us
				</motion.h1>
				<div className="flex flex-col md:flex-row gap-6 md:gap-10">
					{/* Kiri: Judul besar */}
					<motion.div
						className="flex-1 flex flex-col justify-start"
						initial={{ opacity: 0, x: -40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }}
					>
						<motion.h2
							className="text-3xl md:text-[2.2rem] font-bold mb-6 leading-tight"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.5 }}
							transition={{ duration: 0.8, delay: 0.2 }}
						>
							Search Better, Career Louder! <br />
							Your AI-powered CV analysis platform for smarter job
							matching.
						</motion.h2>
					</motion.div>
					{/* Kanan: Box Who We Are + Problem */}
					<motion.div
						className="flex-1 flex"
						initial={{ opacity: 0, x: 40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
					>
						<motion.div
							className="bg-gray-100 rounded-xl shadow px-6 py-5 w-full text-[0.96rem] leading-snug"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.5 }}
							transition={{ duration: 0.8, delay: 0.3 }}
						>
							<b>Who We Are</b>
							<p className="mt-1">
								At Searcheer, we understand the challenges that students and
								fresh graduates face when entering the competitive job market.
								Born from the collaborative efforts of talented minds from
								Politeknik Negeri Banyuwangi and Universitas Brawijaya, we're
								on a mission to bridge the gap between academic preparation and
								industry expectations.
							</p>
							<b className="block mt-4">The Problem We Solve</b>
							<p className="mt-1">
								Did you know that 63% of job seekers in Indonesia struggle
								with high experience requirements, while 58% face barriers due
								to educational prerequisites? Many talented individuals spend
								countless hours applying to positions that don’t align with
								their qualifications, leading to prolonged job searches and
								missed opportunities.
							</p>
						</motion.div>
					</motion.div>
				</div>

				<motion.div
					className="mt-12"
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
				>
					<b className="block mb-1">Our Solution</b>
					<p className="mb-1">
						Searcheer revolutionizes the job search process through cutting-edge
						NLP and machine learning technologies. Our platform analyzes your CV
						against job descriptions, providing:
					</p>
					<ul className="list-disc pl-5 mb-6">
						<li>
							<b>Intelligent CV Analysis</b> - Deep evaluation of your skills
							and qualifications using Bidirectional LSTM neural networks and
							TF-IDF vectorization to understand context and extract meaningful
							insights from your professional profile.
						</li>
						<li>
							<b>Personalized Feedback</b> - Detailed insights on skill gaps and
							areas of improvement through multi-dimensional scoring algorithms
							that evaluate experience matching, education compatibility, and
							industry relevance with weighted importance.
						</li>
						<li>
							<b>Smart Job Matching</b> - AI-powered recommendations for
							positions that truly fit your profile using hybrid machine
							learning models that combine text similarity analysis, skill
							pattern matching, and content-based filtering algorithms.
						</li>
						<li>
							<b>Success Prediction</b> - Data-driven assessment of your
							application success likelihood through ensemble scoring methods
							that analyze compatibility across five key dimensions: text
							similarity, skill alignment, experience level, educational
							background, and&nbsp;industry&nbsp;fit.
						</li>
					</ul>
					<b className="block mb-1">Our Vision</b>
					<p>
						We envision a world where every student and fresh graduate can
						confidently navigate their career journey, armed with data-driven
						insights and personalized guidance. Through Searcheer, we're making
						career preparation more inclusive, objective, and effective.
					</p>
				</motion.div>
			</div>

			{/* Section Gambar Blur di bawah Our Vision */}
			<motion.div
				className="w-full flex justify-center items-center mt-10"
				initial={{ opacity: 0, scale: 0.96 }}
				whileInView={{ opacity: 1, scale: 1 }}
				viewport={{ once: true, amount: 0.5 }}
				transition={{
					duration: 1,
					delay: 0.2,
					type: 'spring',
					stiffness: 100,
				}}
			>
				<div className="w-full max-w-6xl h-[330px] rounded-2xl shadow-md overflow-hidden bg-gray-200 flex items-center justify-center relative">
					<img
						src={bgBlurTeam}
						alt="Searcheer Team Blur"
						className="object-cover w-full h-full absolute inset-0"
						style={{ opacity: 0.85, zIndex: 0 }}
						draggable="false"
					/>
				</div>
			</motion.div>

			{/* Section: How it works */}
			<motion.div
				className="max-w-6xl mx-auto px-4 mt-12"
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
			>
				<motion.h2
					className="text-3xl font-bold text-center mb-2"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.7, delay: 0.1 }}
				>
					How it works
				</motion.h2>
				<motion.p
					className="text-center text-sm text-gray-600 mb-8"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.7, delay: 0.15 }}
				>
					Follow these simple steps to get started with Searcheer and improve
					your job search experience
				</motion.p>
				<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
					{features.map((item, idx) => (
						<motion.div
							key={item.title}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.7, delay: 0.1 + idx * 0.12 }}
							whileHover={{
								scale: 1.04,
								boxShadow: '0 8px 32px 0 rgba(63,103,249,0.10)',
							}}
						>
							<CardFeature {...item} />
						</motion.div>
					))}
				</div>
			</motion.div>

			{/* Section: Video Card */}
			<div className="max-w-6xl w-full mx-auto px-4 my-14">
				<VideoCard />
			</div>

			{/* Section: FAQ */}
			<div className="max-w-4xl mx-auto px-4 my-14">
				<h2 className="text-3xl font-bold text-center mb-2">
					Frequently Asked Questions
				</h2>
				<p className="text-center text-xs text-gray-500 mb-6">
					All you need to know about using Searcheer for your career journey
				</p>
				<FaqAccordion faqs={faqs} />
				<div className="mt-6 text-center text-xs text-gray-500">
					Having more questions? Contact our support team for additional
					resources.
				</div>
			</div>
		</div>
	);
}

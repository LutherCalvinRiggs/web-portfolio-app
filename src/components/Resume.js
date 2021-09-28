import React from 'react';
import { educationArray } from './educationArray.js'
import { certificationArray } from './certificationArray.js'
import { resumeExperienceArray } from './resumeExperienceArray.js'
import Footer from './Footer.js';
// import '../css/Resume.css'


const Resume = () => {
	return (
		// Need to update your resume
		<>
			<main id="resume">
				<WorkExperience />
				<Certifications />
				<Education />
			</main>
			<Footer />
		</>
	)
}

	const Education = (props) => {
		return (
			// Need to make this the <section> then style the elements within the section
			<>
				<h1 
					id="education-heading" 
					className="heading"
				>
					EDUCATION
				</h1>

				<section id="education-section">

					{educationArray.map(education => (
						<article 
							key={education.id} 
							className="education-block"
						>
							<Major 
								major={education.major}
							/>
							<Institution 
								schoolName={education.schoolName}
							/>
							<Location 
								location={education.location}
							/>
							<GraduationYear 
								gradYear={education.gradYear}
							/>
						</article>
					))}

				</section>
			</>
		)
	}

		const Major = (props) => {
			return (
				<p
					className="education-major"
				>
					{props.major}
				</p>
			)
		}		

		const Institution = (props) => {
			return (
				<p
					className="school-name"
				>
					{props.schoolName}
				</p>
			)
		}		
		
		const Location = (props) => {
			return (
				<p
					className="school-location"
				>
					{props.location}
				</p>
			)
		}		
		
		const GraduationYear = (props) => {
			return (
				<p
					className="graduation-year"
				>
					{props.gradYear}
				</p>
			)
		}		

	const Certifications = (props) => {
		return (
			<>
				<h1
					id="certification-heading" 
					className="heading"
				>
					CERTIFICATION
				</h1>

				<section id="certification-section">

					{certificationArray.map(certification => (
						<article 
							key={certification.id} 
							className="certification-block"
						>
							<CertificationName
								name={certification.name}
							/>
							<Issuer 
								issuer={certification.issuer}
							/>
							<Year
								year={certification.year}
							/>
						</article>
					))}

				</section>
			</>
		)
	}

		const CertificationName = (props) => {
			return (
				<p
					className="certification-name"
				>
					{props.name}
				</p>
			)
		}		
		
		const Issuer = (props) => {
			return (
				<p
					className="certification-issuer"
				>
					{props.issuer}
				</p>
			)
		}		
		
		const Year = (props) => {
			return (
				<p
					className="certification-year"
				>
					{props.year}
				</p>
			)
		}		

	const WorkExperience = (props) => {
		return (
			<>
				<h1 
						id="work-experience-heading" 
						className="heading"
					>
						WORK EXPERIENCE
					</h1>

				<section id="work-experience-section">

					{resumeExperienceArray.map(workExp => (
						<article 
							key={workExp.id} 
							className="work-experience-block"
						>
							<JobTitle 
								jobTitle={workExp.jobTitle}
							/>
							<EmployerDetails 
								companyName={workExp.companyName}
								companyLocation={workExp.companyLocation}
							/>
							<WorkDates 
								startDate={workExp.startDate}
								endDate={workExp.endDate}
							/>
							<JobOverview 
								jobOverview={workExp.jobOverview}
							/>
							<JobHighlights 
								jobHighlights={workExp.jobHighlights}
							/>
						</article>
					))}

				</section>
			</>
		)
	}

		const JobTitle = (props) => {
			return (
				<h2 className="job-title">{props.jobTitle}</h2>
			)
		}

		const EmployerDetails = (props) => {
			return (
				<p className="employer-details">
					<span className="company-name">{props.companyName}</span> - 
					<span className="company-location">{props.companyLocation}</span>
				</p>
			)
		}

		const WorkDates = (props) => {
			return (
				<p className="employment-dates">
					<span className="start-date">{props.startDate}</span>&nbsp;-&nbsp; 
					<span className="end-date">{props.endDate}</span>
				</p>
			)
		}

		const JobOverview = (props) => {
			return (
				<p className="job-overview">{props.jobOverview}</p>
			)
		}

		const JobHighlights = (props) => {
			return (
				<ul className="job-highlight-list">

					{props.jobHighlights.map(highlight => (
							<li 
								id={highlight.id}
								className="job-highlight"
							>
								{highlight.highlightBullet}
							</li>
					))}

				</ul>
			)
		}

export default Resume
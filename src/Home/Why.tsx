import React from 'react'

const Why = () => {
  return (
    <div className='text-xl mt-8 flex flex-col justify-around min-h-[90rem]'>
        <ul className='list-disc'>
        <li>
        <h1 className='text-4xl font-bold  underline'>FAQs</h1>
        <div>
        <h2 className='text-2xl font-medium'>What is ATS?</h2>
        <p>Hundreds of candidates apply for various positions at MAANG, multi-national companies and unicorn start-ups.
        <br />
        Recruiters at such organizations don't have time to go through each and every resume to find one or two candidate for that position.
        Their solution? Application Tracking System or ATS - a software that screens out candidates based on the keywords and format in their resume.
    This brings down the numbers to some two-digits among them which will be the candidate that will get hired.
        </p>
        </div>
        </li>

        <div>
        <h2 className='text-2xl font-medium'>How do I make a ATS freindly resume then?</h2>
        <p>You see, there are a lot of things to consider when you're trying to create a resume that not only goes through
         ATS but also makes the recruiter notice it. This include the format of the document, using proper fonts, using bullet points,etc. You can 
         read more about it at <a href="http://www.techinterviewhandbook.org" className='text-blue-500' target="_blank" rel="noopener noreferrer">Technical Interview Handbook</a> 
        <br />
        </p>
        </div>
        <div>
        <h2 className='text-2xl font-medium'>Why should I not use other CV makers instead of Resmerise?</h2>
        <p>Good question! Other CV/Resume maker services create resume that are quite attractive and graphical.
        However, using graphics such as icons, photos, etc can make it harder for ATS to parse your resume and hence 
        rejecting your Resume from reaching human eyes.
        <br />
        Thats where Resmerise comes in! It creates a simple yet attentive resume that helps ATS parse your 
        resume more effectively that increases your chances of selection by 30%!
        </p>
        </div>
        </ul>
    </div>
  )
}

export default Why
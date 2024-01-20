import React from 'react'
import "./Home.css"

const Home = () => {
  const data = [
    {img:"https://onactive.in/assets/uploads/media-uploader/datamanagement1652538564.png", heading:"Data Management", data:"Data management includes all aspects of data planning, handling, analysis, documentation and storage, and takes place during all stages.", button:"Read more"},
    {img:"https://onactive.in/assets/uploads/media-uploader/data-science1652539130.png", heading:"Data Science", data:"Data science is the process of using algorithms, methods and systems to extract knowledge and insights from structured and unstructured data.", button:"Read more"},
    {img:"https://onactive.in/assets/uploads/media-uploader/cloud-services1652537781.png", heading:"Cloud Service", data:"Companies considering using these services should think about how these factors would affect their priorities and risk profile.", button:"Read more"},
    {img:"https://onactive.in/assets/uploads/media-uploader/data-analysis1652466842.png", heading:"Data Analysis", data:"Data management includes all aspects of data planning, handling, analysis, documentation and storage, and takes place during all stages.", button:"Read more"},
    {img:"https://onactive.in/assets/uploads/media-uploader/optimization1652538217.png", heading:"Optimization", data:"Analyses qualitative and quantitative data to determine the most valuable opportunities to improve marketing performance and digital experiences", button:"Read more"},
    {img:"https://onactive.in/assets/uploads/media-uploader/nps1652010016.png", heading:"Customer Experience", data:"A trusted anchor for your customer experience management program this proven metric transformed the business world.", button:"Read more"},
    {img:"https://onactive.in/assets/uploads/media-uploader/quality-assurance-audits1652459857.png", heading:"Quality Assurance", data:"The quality assurance process helps a business ensure its products meet the quality standards set by the company or its industry", button:"Read more"},
    {img:"https://onactive.in/assets/uploads/media-uploader/recruitments1652466131.png", heading:"Recruitments", data:"OnActive aims to assist businesses in assembling a team of highly efficient and competent individuals, as well as employee benefits.", button:"Read more"},
    {img:"https://onactive.in/assets/uploads/media-uploader/market-research1652466603.png", heading:"Market Research CS Benchmarking", data:"EARLY RESEARCH Making market research capabilities more valuable by gaining access to new and underutilized data ADVANCED RESEARCH Providing enough background information to allow access to primary research data.", button:"Read more"},
    {img:"https://onactive.in/assets/uploads/media-uploader/customer-support1652550012.png", heading:"Customer Support (Calls, Email, & Chat)", data:"Call center audits are conducted to examine and identify the areas of improvement in call center operations of any organization/partner.", button:"Read more"},
    {img:"https://onactive.in/assets/uploads/media-uploader/web-development1652520637.png", heading:"Web Development", data:"We create and maintain websites. are also responsible for the site's technical aspects, such as its performance and capacity, measures the speed and how much traffic the site can handle.", button:"Read more"},
    {img:"https://onactive.in/assets/uploads/media-uploader/mobile-apps1652536646.png", heading:"Mobile Apps", data:"Mobile application development is the process of creating software applications that run on a mobile device, and a typical mobile application utilizes a network connection to work with remote computing resources.", button:"Read more"},
    {heading:"Website Design", data:"OnActive is an India based website designing and development company. Established with the mission of providing high quality services to our customers to grow their business online. We are serving all types of businesses and service businesses with our website designing services.", button:"Read more"},
    {heading:"Responsive Web Design", data:"Responsive web design is a device-independent user interface design that aims to develop and deliver an optimized website experience on devices of various widths and resolutions: desktop, smartphone, etc. It is a technique in which web designers use the style code of the website. One way is that its layout is more comfortably adapted to the view of the browser in which it is viewed.", button:"Read more"},
    {heading:"Custom Web Design", data:"Your website is an online identity for your brand name. A well designed website is the first impression because web design for your company is a creative activity for the development of your brand. Your business is unique and so should your website. OnActive works with you to identify your needs and create a site that perfectly fits your goals.", button:"Read more"}
  ]
  return (
    <div className='home'>
      <div className="sub-heading">SPECIALISED IN</div>
      <div className="heading">What We Offer</div>
      <div className="banner">
      {data.map((task) => (
            <div className="banner-wrap"key={task.id}>
              {task.img && (<div className="top-svg"><img src={task.img} alt="Image"/></div>)}
                  <div className="data-wrap">
                    <div className="banner-heading">{task.heading}</div>
                    <div className="banner-data">{task.data}</div>
                    <div className="read-more">Read more &rarr;</div>
                  </div>
            </div>
      ))}
       </div>
    </div>
  )
}

export default Home
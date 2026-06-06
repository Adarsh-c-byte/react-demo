
import React from 'react'
import Card from './component/Card'

const employees = [
  {
    image: "https://i.pinimg.com/736x/fa/d1/6e/fad16ee6eeda53a2d4536e545252eb07.jpg",
    name: "Sophia Carter",
    jobDescription:
      "I'm a Brand Designer who focuses on clarity & emotional connection.",
    profileState: {
      rating: 4.9,
      earned: "$45k+",
      rate: "$120/hr",
    },
  },
  {
    image: "https://i.pinimg.com/1200x/65/de/d0/65ded07a4195769b10bb90567fd9c455.jpg",
    name: "Liam Anderson",
    jobDescription:
      "I'm a Full Stack Developer who builds scalable and user-friendly web applications.",
    profileState: {
      rating: 4.8,
      earned: "$60k+",
      rate: "$100/hr",
    },
  },
  {
    image: "https://i.pinimg.com/736x/90/06/83/9006838f5f8347d83b65fea831b40eb9.jpg",
    name: "Emma Wilson",
    jobDescription:
      "I'm a UI/UX Designer passionate about creating smooth and engaging digital experiences.",
    profileState: {
      rating: 4.7,
      earned: "$38k+",
      rate: "$95/hr",
    },
  },
  {
    image: "https://i.pinimg.com/736x/8a/b4/8e/8ab48ee24a4e058c56ac63aa0d163273.jpg",
    name: "Noah Martinez",
    jobDescription:
      "I'm a Digital Marketer helping brands grow through smart strategies and campaigns.",
    profileState: {
      rating: 4.6,
      earned: "$50k+",
      rate: "$85/hr",
    },
  },
  {
    image: "https://i.pinimg.com/1200x/a2/2d/76/a22d765595359ce606ccad019714defd.jpg",
    name: "Olivia Taylor",
    jobDescription:
      "I'm a Content Writer who crafts compelling stories that connect with audiences.",
    profileState: {
      rating: 4.9,
      earned: "$35k+",
      rate: "$75/hr",
    },
  },
  {
    image: "https://i.pinimg.com/1200x/19/93/d9/1993d96add88deee227445854401bd32.jpg",
    name: "James Brown",
    jobDescription:
      "I'm a Mobile App Developer creating seamless and high-performance applications.",
    profileState: {
      rating: 4.8,
      earned: "$70k+",
      rate: "$130/hr",
    },
  },
  {
    image: "https://i.pinimg.com/736x/63/70/7f/63707f0e8d784b765a6a04a0893f1a96.jpg",
    name: "Ava Johnson",
    jobDescription:
      "I'm a Motion Designer bringing creative ideas to life through animation.",
    profileState: {
      rating: 4.7,
      earned: "$42k+",
      rate: "$90/hr",
    },
  },
  {
    image: "https://i.pinimg.com/736x/49/9b/7d/499b7de74310d5dae8fb9ec082a5193d.jpg",
    name: "William Davis",
    jobDescription:
      "I'm a Cybersecurity Specialist focused on protecting systems and sensitive data.",
    profileState: {
      rating: 4.9,
      earned: "$80k+",
      rate: "$140/hr",
    },
  },
  {
    image: "https://i.pinimg.com/1200x/18/48/ee/1848eee88c9f6c450493fdd427ec0471.jpg",
    name: "Mia Thomas",
    jobDescription:
      "I'm a Video Editor who transforms raw footage into visually appealing stories.",
    profileState: {
      rating: 4.8,
      earned: "$48k+",
      rate: "$95/hr",
    },
  },
  {
    image: "https://i.pinimg.com/736x/a8/d9/53/a8d953b0a44c338f87ad88c6904c1576.jpg",
    name: "Benjamin Lee",
    jobDescription:
      "I'm a Data Analyst who turns complex data into meaningful business insights.",
    profileState: {
      rating: 4.7,
      earned: "$55k+",
      rate: "$110/hr",
    },
  },
];

const App = () => {
  return (
    <div className='parent'>
      
{employees.map(function(elem){
  return <Card img = {elem.image} name = {elem.name} jobDis = {elem.jobDescription} profSta = {elem.profileState} rating = {elem.rating} earned = {elem.earned} rate = {elem.rate} />
})}

    </div>
  )
}

export default App

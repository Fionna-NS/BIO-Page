import './App.css';
import profilephoto from './assets/profile photo.jpg'

function Introduction(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.bio}</p>
      
    </div>
      );
     }

function Skills(props) {
  return(
    <div>
      <h2> {props.title}</h2>
      {props.skills}
      {props.Skills}
      
    </div>
  )
}

function Interests(props){
  return(
    <div>
      <h2>{props.title}</h2>
      {props.Information}
    </div>
  )
}
 
function Hoobies(props){
  return(
    <div>
      <h2>{props.title}</h2>
       {props.Information}
    </div>
  )
}
function Contacts(props) {
  return(
    <div>
      <h2>{props.title}</h2>
      {props.information}
    </div>
  )
}

function App() {

  return(
    <div>
     <img
        src={profilephoto}
        alt="My profile"
        width="200"
      />
     <Introduction
    name="FIONNA SIBORA"
    bio="Am a student at the university Of Nairobi"
   />
  
  <h2> About me</h2>
<p> I am a Gender and Development Studies student with a strong interest in technology, software development, 
    and Artificial Intelligence. I am building practical skills in Software Engineering, 
    including JavaScript and other programming languages, 
    while developing my understanding of modern digital technologies and AI tools. 
    Having participated in AI Safari, I have gained valuable exposure to AI and its potential applications. 
    I am passionate about combining my technical and development knowledge to build innovative, 
    technology-driven solutions that address real-world social challenges.</p>
 
 <Skills
   title="My Skills"
   skills={
     <>
       <h3>Technical skills</h3>
       <ul>
    <li>Programming (Python, JavaScript, C++)</li>
    <li>Web development (HTML, CSS, React)</li>
    <li>Database management (SQL, MySQL)</li>
    <li>Gender and social inequality analysis</li>
    <li>Qualitative and quantitative research</li>
    <li>Version control (Git and GitHub)</li>
  </ul>
     </>
   }
  Skills={
    <>
    <h3>Personal skills</h3>
    <ul>
     <li>Critical thinking and problem-solving</li>
     <li>Effective communication and collaboration</li>
     <li>Adaptability and resilience</li>
     <li>Time management and organization</li>
     <li>Leadership and teamwork</li>
    </ul>
    </>
  }
   />

<Interests
  title="My Interests"
  Information={
    <p>I am passionate about exploring the intersection of technology, social development, and gender equality. 
     I am particularly interested in leveraging technology to address social challenges, 
     promote inclusivity, and empower marginalized communities. 
     I enjoy learning about emerging technologies, AI applications, and their potential impact on society. 
     Additionally, I am keen on engaging in research and projects that contribute to positive social change.
     </p>
  }
   />

<Hoobies
  title="My Hoobies" 
  Information={
    <>
     <ul>
    <li>Participating in online coding challenges and hackathons</li>
    <li>Exploring new programming languages and frameworks</li>
    <li>Engaging in community service and volunteering activities</li>
    <li>Attending tech meetups and conferences</li>
     </ul>
    </>
  }
/>

  <Contacts
  title="My Contact Information"
  information={
  <>
  <ul>
    <li><strong>Email:</strong> fionnasibora1@gmail.com</li>
    <li><strong>Phone:</strong> +254 741204231</li>
    <li><strong>Location:</strong> Nairobi, Kenya</li>
  </ul>
  </>
 }
  />
  </div>
  );
}




export default App;
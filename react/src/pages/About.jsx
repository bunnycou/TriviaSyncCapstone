import '../csspages/Home.css';
import '../csspages/about.css';
import groupphoto from "../assets/groupphoto.jpg";
function About() {
    
    return (
<div className="home-container">
<h1 className='PinkGreen'>About US!</h1>
<div class="row">
  <div className='about'>
    <div class="card aboutp">
      <img src={groupphoto} class='group-photo'></img>
      <p className='large'>Who are we?</p>
      <p>We are a team of students in Information Technology and Computer Science and Engineering Tehnology majors.<br></br> From left to right we are...</p>
      <p>
        <a target='_blank' href='https://www.linkedin.com/in/kevin-brinke-4854b7262/'>Kevin Brinke</a>, a Computer Science and Engineering Technology major,
        who has gained experience from creating video game prototypes and hopes to keep learning about every part of the development stack. 
      </p>
      <p>
        <a target='_blank' href='https://www.linkedin.com/in/robert-conboy-196b19221/'>Robert Conboy</a>, a Computer Science and Engineering Technology major,
        who has learned a lot about programming and security through past internships and his current internship with Toledo Refining Company. 
      </p>
      <p>
        <a target='_blank' href='https://www.linkedin.com/in/noah-cousino-4062a11b3/'>Noah Cousino</a>, a Computer Science and Engineering Technology major,
        who has worked on several personal projects to develop skills across various programming languages and hopes to find a career in software engineering.  
      </p>
      <p>
        <a target='_blank' href='https://www.linkedin.com/in/riley-flint-715b2a291/'>Riley Flint</a>, an Information Technology major,
        who has leadership and teamwork experience from her time at TruStage as well as in depth technical skills including PowerShell proficiency. 
      </p>
      <p>
        <a target='_blank' href='https://www.linkedin.com/in/a-pinson/'>Angie Pinson</a>, an Information Technology major,
        who has been passionate about hardware and IT infrastructure and hopes to find a role that allows them to pursue their passion. 
      </p>
    </div>
  </div>
</div>
</div>
  );
}

export default About
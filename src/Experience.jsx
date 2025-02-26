import './Experience.css';

const Experience = () => {
    return (
      <div className="experience">
        <h2>Work Experience</h2>
        
        <div className="timeline-container">
          <div className="timeline-item">
            <h3>Quark Networks Pvt Ltd</h3>
            <p>Designation: Software Developer Engineer / Full Stack Developer</p>
            <p><strong>Start Date:</strong> February 2024</p>
            <p><strong>Location:</strong> Gurugram, Haryana</p>
          </div>

          <div className="timeline-item">
            <h3>Redtron Edu Pvt Ltd</h3>
            <p>Designation: Software Developer Intern</p>
            <p><strong>Start Date:</strong> September 2023</p>
            <p><strong>End Date:</strong> December 2023</p>
            <p><strong>Location:</strong> Patna, Bihar</p>
          </div>
        </div>
      </div>
    );
};

export default Experience;

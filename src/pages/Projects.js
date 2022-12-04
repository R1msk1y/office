
import Project from '../components/project/Project';
import two from './../img/projects/02.jpg';
import three from './../img/projects/03.jpg';
import four from './../img/projects/04.jpg';
import five from './../img/projects/05.jpg';
import six from './../img/projects/06.jpg';

const Projects = () => {
    return ( 
        <main className="section">
        <div className="container">
            <h2 className="title-1">Projects</h2>
            <ul className="projects">
                <Project/>
                <Project/>
                <Project/>
               
 

            </ul>
        </div>
    </main>


     );
}
 
export default Projects;
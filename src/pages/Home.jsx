import htmlIcon from "../assets/images/html-icon.png"
import cssIcon from "../assets/images/css-icon.png"
import jsIcon from "../assets/images/javascript-icon.png"
import accessIcon from "../assets/images/accessibility-icon.png"

import SubjectButton from "../components/SubjectButton"
const Home = () => {
    return (
        <main className="flex">
            <section className="intro">
                <h1>Welcome to the <br /> <span> Frontend Quiz!</span></h1>
                <p>Pick a subject to get started.</p>
            </section>
            <section>
                <SubjectButton img={htmlIcon} subject={"HTML"} />
                <SubjectButton img={cssIcon} subject={"CSS"} />
                <SubjectButton img={jsIcon} subject={"JavaScript"} />
                <SubjectButton img={accessIcon} subject={"ReactJS"} />
            </section>
        </main>
    )
}
export default Home;
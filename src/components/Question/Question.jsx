import { Link } from "react-router";
import guy from "./Images/guy.png";
// import questionImg from "./Images/questionImg.png"

const questionMessage = `Hello YesifikFoods! \n\nI'd like to make enquiry about...`;
const encodedMessage = encodeURIComponent(questionMessage);

const Question = () => {
  return (
    <section className="questionSections" id="questionSections">
      <div className="question">
        <div className="questionContents">
          <h1>Got Questions, Hit us up right away!</h1>
          <Link to={`https://wa.me/2348159716937?text=${encodedMessage}`} target="_blank">
            <button className="sendMessageBtn">Send Message</button>
          </Link>
        </div>
        <div className="questionImg">
          <img src={guy} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Question;

import guy from "./Images/guy.png"
// eslint-disable-next-line no-unused-vars
import questionImg from "./Images/questionImg.png"

const Question = () =>{
    return(
        <section className="questionSections">
            <div className="question">
                <div className="questionContents">
                    <h1>Got Questions, Hit us up right away!</h1>
                    <button className="sendMessageBtn">Send  Message</button>
                </div>
                <div className="questionImg">
                    <img src={guy} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Question
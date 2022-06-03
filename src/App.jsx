import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Who invented the telescope?",
      answers: [
        {
          text: "Nikola Tesla",
          correct: false,
        },
        {
          text: "Lyman Spitzer",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Galileo Galilei",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "Who is the president of Canada?",
      answers: [
        {
          text: "Norman Osborne",
          correct: false,
        },
        {
          text: "Harry Potter",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Justin Trudeau",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question: "Who discovered radium?",
      answers: [
        {
          text: "Nikola Tesla",
          correct: false,
        },
        {
          text: "Alfred Nobel",
          correct: false,
        },
        {
          text: "Maria Curie",
          correct: true,
        },
        {
          text: "Mongolfier brothers",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "What is the deppest point on earth?",
      answers: [
        {
          text: "Tonga Trench",
          correct: false,
        },
        {
          text: "Mariana Trench",
          correct: true,
        },
        {
          text: "Kuril Trench",
          correct: false,
        },
        {
          text: "Kermadec Trench",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "How many people walked on the surface of moon?",
      answers: [
        {
          text: "12",
          correct: true,
        },
        {
          text: "10",
          correct: false,
        },
        {
          text: "5",
          correct: false,
        },
        {
          text: "1",
          correct: true,
        },
      ],
    },
    {
      id: 9,
      question: "Who directed Titanic?",
      answers: [
        {
          text: "M.Scorsese",
          correct: false,
        },
        {
          text: "G.Lucas",
          correct: false,
        },
        {
          text: "S.Spielberg",
          correct: true,
        },
        {
          text: "D.Fincher",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Who founded Apple?",
      answers: [
        {
          text: "Nikola Tesla",
          correct: false,
        },
        {
          text: "Lyman Spitzer",
          correct: false,
        },
        {
          text: "Martin Johnson",
          correct: false,
        },
        {
          text: "Steve Jobs",
          correct: true,
        },
      ],
    },
    {
      id: 11,
      question: "When did J.F.K assasination happend?",
      answers: [
        {
          text: "22 november 1963",
          correct: true,
        },
        {
          text: "15 august 1961",
          correct: false,
        },
        {
          text: "28 february 1989",
          correct: false,
        },
        {
          text: "16 december 1962",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Who invented TNT?",
      answers: [
        {
          text: "Nikola Tesla",
          correct: false,
        },
        {
          text: "Lyman Spitzer",
          correct: false,
        },
        {
          text: "Johnny Depp",
          correct: false,
        },
        {
          text: "Alfred Nobel",
          correct: true,
        },
      ],
    },
    {
      id: 13,
      question: "Who played Lucy in movie Lucy?",
      answers: [
        {
          text: "Lucy Martin",
          correct: false,
        },
        {
          text: "Carrie Fiscbourn",
          correct: false,
        },
        {
          text: "Scarlet Johansen",
          correct: true,
        },
        {
          text: "Katerine Bloom",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "What is the real name of Dipper from Gravity Falls?",
      answers: [
        {
          text: "Mason Pines",
          correct: true,
        },
        {
          text: "Steven Pines",
          correct: false,
        },
        {
          text: "David Pines",
          correct: false,
        },
        {
          text: "Stanford Pines",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "What is the color of the Sun ?",
      answers: [
        {
          text: "Red",
          correct: false,
        },
        {
          text: "Yellow",
          correct: false,
        },
        {
          text: "White",
          correct: true,
        },
        {
          text: "Orange",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;

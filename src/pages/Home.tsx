import styled from "styled-components";
import arrowDown from "/images/arrow-down-s-line.svg";
import { useState } from "react";

export default function Home() {
  const [first, setFirst] = useState<boolean>(false);
  const [second, setSecond] = useState<boolean>(false);
  const [third, setThird] = useState<boolean>(false);
  const [four, setFourth] = useState<boolean>(false);
  return (
    <Parent>
      <ContenCon>
        <FirstCon>
          <QuestionCon status={first} onClick={() => setFirst((prev) => !prev)}>
            <Question>რას არის DEALIN?</Question>
            <ArrowDown src={arrowDown} alt="" status={first} />
          </QuestionCon>
          {first ? (
            <Answer>
              DEALIN არის ინოვაციური პლატფორმა, რომელიც ქმნის მყარ კავშირებს
              მეწარმეებსა და ინვესტორებს შორის ონლაინ. თუ ეძებთ სხვადასხვა ტიპის
              ინვესტიციის შესაძლებლობას, ოცნებობთ ახალ ბიზნეს იდეაზე, ან
              არსებული ბიზნესის განვითარებაზე, DEALIN გეხმარებათ სწორი
              პარტნიორების მოძიებაში და თქვენი პოტენციალის რეალობად გარდაქმნაში.
              ეს არის მეწარმეებისა და ინვესტორებისათვის შექმნილი უნიკალური
              გარემო, სადაც სამეწარმეო და საინვესტიციო შესაძლებლობები კონკრეტული
              საჭიროებების მიხედვით იხვეწება.
            </Answer>
          ) : null}
        </FirstCon>
        <SecondCon>
          <QuestionCon
            status={second}
            onClick={() => setSecond((prev) => !prev)}
          >
            <Question>ვინ არის მეწარმე?</Question>
            <ArrowDown src={arrowDown} alt="" status={second} />
          </QuestionCon>
          {second ? (
            <Answer>
              DEALIN-ზე მეწარმე არის ადამიანი, რომელიც ხედავს შესაძლებლობებს იქ,
              სადაც სხვები პრობლემებს ხედავენ. ეს არის პირი, რომელიც საკუთარ
              თავზე იღებს რისკს და დაუღალავად შრომობს, რათა აქციოს იდეა
              რეალობად. მეწარმე არ არის მხოლოდ ბიზნესის მფლობელი, არამედ იმ
              ადამიანთა ჯგუფის ლიდერი, ვინც ახალ გზებსა და ინოვაციებზე ფიქრობს,
              რათა შექმნას რამე ისეთი, რაც გავლენას მოახდენს საზოგადოებასა და
              ეკონომიკაზე.
            </Answer>
          ) : null}
        </SecondCon>
        <ThirdCon>
          <QuestionCon status={third} onClick={() => setThird((prev) => !prev)}>
            <Question>ვინ არის ინვესტორი?</Question>
            <ArrowDown src={arrowDown} alt="" status={third} />
          </QuestionCon>
          <Answer>
            DEALIN-ზე ინვესტორი არის ადამიანი ან ორგანიზაცია, რომელიც ხედავს
            პოტენციალს იქ, სადაც სხვები მხოლოდ რესურსების დაკარგვის რისკს
            ხედავენ. ეს არის პირი, რომელიც მზადაა გააზრებულად განახორციელოს
            სხვადასხვა ტიპის ფინანსური ინვესტიცია პერსპექტიულ იდეებში,
            რომლებისთვისაც ბაზარზე წარმატების მოპოვება ნამდვილად შესაძლებელია,
            ან მოქმედ ბიზნესში რომელიც DEALIN-ის სანდო ანალიტიკის მიხედვით უკვე
            წარმატებულია.
          </Answer>
        </ThirdCon>
        <div></div>
      </ContenCon>
    </Parent>
  );
}

const ThirdCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  border-bottom: 2px solid #fff;
`;
const SecondCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  border-bottom: 2px solid #fff;
`;
const Answer = styled.p`
  color: #c7d9ff;
  font-family: Glaho;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 155.556% */
  letter-spacing: 0.72px;
  padding-bottom: 3rem;
`;
const ArrowDown = styled.img<{ status: boolean }>`
  width: 38px;
  height: 31px;
  transform: ${(props) => (props.status ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease;
`;

const Question = styled.p`
  color: #c7d9ff;
  font-family: Nino;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 147%;
`;
const QuestionCon = styled.div<{ status: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${(props) => (props.status ? null : "1.5rem")};
`;
const FirstCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  border-bottom: 2px solid #fff;
`;
const ContenCon = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;
const Parent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18rem;
  padding-left: 9px;
  padding-right: 9px;
`;

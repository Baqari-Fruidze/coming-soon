import styled from "styled-components";
import arrowDown from "/images/arrow-down-s-line.svg";
import { useState } from "react";
import next from "/images/scroll-to-bottom-fill.svg";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import CountdownTimer from "../components/CountDown";

export default function Home() {
  const [first, setFirst] = useState<boolean>(false);
  const [second, setSecond] = useState<boolean>(false);
  const [third, setThird] = useState<boolean>(false);
  const [four, setFourth] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <Parent>
      <Helmet>
        <title>Dealin</title>
        <meta name="description" content="Welcome to My Website" />
        <link rel="icon" href="/images/rfgt.png" sizes="32x32" />
        {/* <meta property="og:title" content="Dealin" />
        <meta
          property="og:image"
          content="https://www.dealin.com.ge/images/chatlogo.png"
        />
        <meta property="og:url" content="https://www.dealin.com.ge/" /> */}
      </Helmet>
      <CountdownTimer />
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
          {third ? (
            <Answer>
              DEALIN-ზე ინვესტორი არის ადამიანი ან ორგანიზაცია, რომელიც ხედავს
              პოტენციალს იქ, სადაც სხვები მხოლოდ რესურსების დაკარგვის რისკს
              ხედავენ. ეს არის პირი, რომელიც მზადაა გააზრებულად განახორციელოს
              სხვადასხვა ტიპის ფინანსური ინვესტიცია პერსპექტიულ იდეებში,
              რომლებისთვისაც ბაზარზე წარმატების მოპოვება ნამდვილად შესაძლებელია,
              ან მოქმედ ბიზნესში რომელიც DEALIN-ის სანდო ანალიტიკის მიხედვით
              უკვე წარმატებულია.
            </Answer>
          ) : null}
        </ThirdCon>
        <FourthCon>
          <QuestionCon status={four} onClick={() => setFourth((prev) => !prev)}>
            <Question>მეწარმე VS ინვესტორი?</Question>
            <ArrowDown src={arrowDown} alt="" status={four} />
          </QuestionCon>
          {four ? (
            <UUl>
              <Spann>
                DEALIN-ზე მეწარმე იქნები თუ ინვესტორი, დამოკიდებულია შენს
                კონკრეტულ საჭირობებსა და მოთხოვნებზე.
              </Spann>
              <ul>
                <Para> მეწარმის სტაუტსი უნდა აირჩიო:</Para>
                <Lii>
                  თუ გაქვს ინოვაციური ბიზნეს იდეა და გჭირდება თანხის მოზიდვა.
                </Lii>
                <Lii>
                  თუ გაქვს მოქმედი ბიზნესი, უკვე არსებული გაყიდვების ისტორიით და
                  გჭირდება დამატებითი ფულადი სახსრები.
                </Lii>
                <ul>
                  <Para>ინვესტორის სტაუტსი უნდა აირჩიო:</Para>
                  <Lii>
                    თუ დაინტერესებული ხარ ინოვაციურ ბიზნეს იდეებში ინვესტირებით.
                  </Lii>
                  <Lii>
                    თუ დაინტერესებული ხარ თანხის გასესხებით ან მოქმედი ბიზნესის
                    სრულად/ნაწილობრივ შეძენით.
                  </Lii>
                </ul>
              </ul>
            </UUl>
          ) : null}
        </FourthCon>
      </ContenCon>
      <BottonCon onClick={() => navigate("SelectRole")}>
        <Mini>წინ</Mini>
        <Img src={next} alt="" />
      </BottonCon>
    </Parent>
  );
}

const BottonCon = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;
`;
const Mini = styled.span`
  color: #e2caa9;
  font-family: Nino;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (min-width: 1440px) {
    font-size: 24px;
  }
`;
const Img = styled.img`
  width: 4rem;
  height: 4rem;
  transform: rotate(-90deg);
`;
const Lii = styled.li`
  margin-left: 3.5rem;
  color: #c7d9ff;
  font-family: Glaho;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 147%; /* 26.46px */
  @media (min-width: 1440px) {
    font-size: 22px;
  }
`;
const Para = styled.p`
  color: #c7d9ff;
  font-family: Glaho;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 147%; /* 26.46px */
  @media (min-width: 1440px) {
    font-size: 22px;
  }
`;
const UUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-left: 2.6rem;
  padding-right: 0.6rem;
  padding-bottom: 3rem;
`;
const Spann = styled.span`
  color: #c7d9ff;
  font-family: Glaho;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 147%;
  @media (min-width: 1440px) {
    font-size: 22px;
  }
`;
const FourthCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  border-bottom: 2px solid #fff;
`;
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
  @media (min-width: 1440px) {
    font-size: 22px;
  }
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
  @media (min-width: 1440px) {
    font-size: 36px;
  }
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
  @media (min-width: 768px) {
    padding-left: 2.4rem;
    padding-right: 2.4rem;
  }
  @media (min-width: 1440px) {
    padding-left: 15rem;
    padding-right: 15rem;
  }
`;
const Parent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15rem;
  padding-left: 9px;
  padding-right: 9px;
  padding-bottom: 13rem;
`;

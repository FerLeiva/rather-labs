import { useState } from "react";
import { useRouter } from "next/router";
import { useMoralis } from "react-moralis";
import surveyData from "../surveys/survey-1.json";
import { Button, Image } from "antd";
import PageLayout from "../components/commons/PageLayout/PageLayout";
import Survey from "../components/Survey/Survey";

export default function SurveyPage() {
  const [survey, setSurvey] = useState(false);
  const router = useRouter();
  const { account } = useMoralis();

  const handleStartSurvey = () => {
    account ? setSurvey(!survey) : router.push("/");
  };

  const breadcrumbs = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Take survey",
      path: "/survey",
    },
  ];

  return (
    <>
      <PageLayout breadcrumbs={breadcrumbs}>
        {survey ? (
          <Survey questions={surveyData.questions} />
        ) : (
          <>
            <h1 className="title">Welcome to Rather Labs Survey</h1>
            <h2>{surveyData.title}</h2>
            <Image className="surveyImage" src={surveyData.image} />
            <p className="subtitle">
              {account
                ? "Excellent! Now is the time for your daily survey. You have a limited amount of time to answer some multiple choice questions. Complete them successfully and you will get some $QUIZ token. Click below when you're ready to get started."
                : "First you have to connect your Metamask. Go back to home and enable it before we can continue."}
            </p>
            <Button className="button" onClick={handleStartSurvey}>
              {account ? "I'm ready!" : "Go back to home"}
            </Button>
          </>
        )}
      </PageLayout>
    </>
  );
}


export enum SurveyQuestionType {
   thingsInTheWay = "thingsInTheWay",
   thingsThatHelp = "thingsThatHelp",
   AiProductUseCases = "AiProductUseCases",
}
export type SurveyQuestion = {
   type: SurveyQuestionType
   value: string
   description?: string
}
export const surveyQuestions: SurveyQuestion[] = [
   {
      type: SurveyQuestionType.AiProductUseCases,
      value: "What are some use cases for AI in products you use or build?",
      // description: "that you have either seen, built or a.k.a features that use LLMs or ML to deliver value to the user.",
      // value: "What are some AI-driven product features you've thought about, seen, or built?",
      // share examples of product features that would benefit from AI integration
   },
   // {
   //    type: SurveyQuestionType.thingsInTheWay,
   //    value: "What things can make your job less enjoyable?"
   // },
   // {
   //    type: SurveyQuestionType.thingsThatHelp,
   //    value: "What things have helped improve your experience at work?"
   // },
]

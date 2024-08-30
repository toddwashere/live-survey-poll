
export enum SurveyQuestionType {
   thingsInTheWay = "thingsInTheWay",
   thingsThatHelp = "thingsThatHelp",
   AiProductUseCases = "AiProductUseCases",
}
export type SurveyQuestion = {
   type: SurveyQuestionType
   value: string
}
export const surveyQuestions: SurveyQuestion[] = [
   {
      type: SurveyQuestionType.AiProductUseCases,
      value: "What are some use cases for AI in products you use?"
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

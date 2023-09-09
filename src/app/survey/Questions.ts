
export enum SurveyQuestionId {
   thingsInTheWay = "thingsInTheWay",
   thingsThatHelp = "thingsThatHelp",
}
export type SurveyQuestion = {
   id: SurveyQuestionId
   value: string
}
export const surveyQuestions: SurveyQuestion[] = [
   {
      id: SurveyQuestionId.thingsInTheWay,
      value: "What things make your job less enjoyable?"
   },
   {
      id: SurveyQuestionId.thingsThatHelp,
      value: "What things have helped improve your experience at work?"
   },
]

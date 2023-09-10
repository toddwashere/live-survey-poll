
export enum SurveyQuestionType {
   thingsInTheWay = "thingsInTheWay",
   thingsThatHelp = "thingsThatHelp",
}
export type SurveyQuestion = {
   type: SurveyQuestionType
   value: string
}
export const surveyQuestions: SurveyQuestion[] = [
   {
      type: SurveyQuestionType.thingsInTheWay,
      value: "What things make your job less enjoyable?"
   },
   {
      type: SurveyQuestionType.thingsThatHelp,
      value: "What things have helped improve your experience at work?"
   },
]


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

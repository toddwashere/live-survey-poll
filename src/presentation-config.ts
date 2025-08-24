import { SurveyQuestion, SurveyQuestionType } from "@/app/survey/Questions"


type PresentationConfigId = "bad-id" | "need-for-speed" | "ai-cookbook-learning" | "make-work-not-suck"
const defaultPresentationId: PresentationConfigId = "need-for-speed"

export type PresentationConfig = {
   presentationId: PresentationConfigId
   presentationTitle: string 
   linkedInProfileUrl: string 
   linkedInProfileName: string
   githubRepoUrl?: string
   gitHubRepoOwnerName?: string
   gitHubRepoName?: string
   presentationUrl: string
   qrCodeImageUrl: string
   questions: SurveyQuestion[]
   siteUrlLabel: string
   conferenceLogoUrl: string
}



export const presentationConfigs: Map<PresentationConfigId, PresentationConfig> = new Map([
   ["need-for-speed", {
      presentationId: "need-for-speed",
      presentationTitle: "Need for Speed",
      linkedInProfileUrl: "https://www.linkedin.com/in/todd-b-fisher/",
      linkedInProfileName: "Todd B Fisher",
      presentationUrl: "https://docs.google.com/presentation/d/1zs7pDdoLdQAmLg1JUUdn3qXAN-zBBu9AYIigH4AbQKE/embed",
      qrCodeImageUrl: "/images/qrcode.png",
      conferenceLogoUrl: "/images/utahjs_400x400.png",
      siteUrlLabel: "utahjs.vercel.app",
      questions: [
         {
            type: SurveyQuestionType.thingsInTheWay,
            value: "As a software engineer, what slows you down?"
         },
         {
            type: SurveyQuestionType.thingsThatHelp,
            value: "What things have helped you move fast?"
         },
      ]
   }],

   ["ai-cookbook-learning", {
      presentationId: "ai-cookbook-learning",
      presentationTitle: "AI Cookbook Learning",
      linkedInProfileUrl: "https://www.linkedin.com/in/todd-b-fisher/",
      linkedInProfileName: "Todd B Fisher",
      presentationUrl: "https://docs.google.com/presentation/d/18xa-r19U5R2-onJ9qKq_DbBPvMr35PT72Gm2t9dttbc/embed",
      qrCodeImageUrl: "/images/qrcode.png",
      conferenceLogoUrl: "/images/utahjs_400x400.png",
      siteUrlLabel: "utahjs.vercel.app",
      questions: [
               {
         type: SurveyQuestionType.AiProductUseCases,
         value: "What are some use cases for AI in products you use or build?",
         // description: "that you have either seen, built or a.k.a features that use LLMs or ML to deliver value to the user.",
         // value: "What are some AI-driven product features you've thought about, seen, or built?",
         // share examples of product features that would benefit from AI integration
      },
      ]
   }],

   ["make-work-not-suck", {
      presentationId: "make-work-not-suck",
      presentationTitle: "Make Work Not Suck",
      linkedInProfileUrl: "https://www.linkedin.com/in/todd-b-fisher/",
      linkedInProfileName: "Todd B Fisher",
      presentationUrl: "https://docs.google.com/presentation/d/1boJkqqgG7snuiogSWsAhkGlWeGHbPeLVSkaq9CWJ5hM/embed",
      qrCodeImageUrl: "/images/qrcode.png",
      conferenceLogoUrl: "/images/utahjs_400x400.png",
      siteUrlLabel: "utahjs.vercel.app",
      questions: [
         {
            type: SurveyQuestionType.thingsInTheWay,
            value: "Things that make work suck"
         },
         {
            type: SurveyQuestionType.thingsThatHelp,
            value: "Things that make work more enjoyable"
         },
      ]
   }],
])


/** If this is ever selected, there is a problem with the presentation config */
const defaultPresentationConfig: PresentationConfig = {
   presentationId: "bad-id",
   presentationTitle: "BAD ID",
   linkedInProfileUrl: "https://www.linkedin.com/in/todd-b-fisher/",
   linkedInProfileName: "Todd B Fisher",
   presentationUrl: "https://google.com",
   qrCodeImageUrl: "/images/qrcode.png",
   conferenceLogoUrl: "/images/utahjs_400x400.png",
   siteUrlLabel: "utahjs.vercel.app",
   questions: [],
}

/** Statically set at BUILD time */
export const currentPresentationConfig: PresentationConfig = presentationConfigs.get(defaultPresentationId) || defaultPresentationConfig
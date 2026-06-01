// Auto-generated from substances.txt
import type { Substance } from './types';

// Substance Data
// Name: Midazolam
// ID: midazolam
// Categories: depressants
// Class: Benzodiazepines

export const midazolam: Substance = 
{
  "id": "midazolam",
  "name": "Midazolam",
  "commonNames": [
    "Midazolam",
    "Versed"
  ],
  "categories": [
    "depressants"
  ],
  "class": "Benzodiazepines",
  "description": "Midazolam (trade name Versed) is a depressant substance of the benzodiazepine class. It is on the World Health Organization's List of Essential Medicines. Subjective effects include sedation, anxiety suppression, disinhibition, muscle relaxation, respiratory depression, and moderate euphoria.",
  "effects": {
    "positive": [],
    "neutral": [],
    "negative": []
  },
  "defaultUnit": "mg",
  "routeData": {
    "intravenous": {
      "dosage": {
        "threshold": "1mg",
        "light": "1-2mg",
        "common": "2-4mg",
        "strong": "4-5mg",
        "heavy": "5mg"
      },
      "duration": {
        "onset": "4-6 minutes",
        "comeup": "Unknown",
        "peak": "1-4 hours",
        "offset": "0.5-1.5 hours",
        "total": "2-6 hours",
        "afterglow": "Unknown"
      }
    },
    "oral": {
      "dosage": {
        "threshold": "1mg",
        "light": "2.5-5mg",
        "common": "5-15mg",
        "strong": "15-30mg",
        "heavy": "30mg"
      },
      "duration": {
        "onset": "30-60 minutes",
        "comeup": "30-60 minutes",
        "peak": "1-2 hours",
        "offset": "1-2 hours",
        "total": "2-4 hours",
        "afterglow": "Unknown"
      }
    }
  },
  "interactions": {
    "dangerous": [],
    "unsafe": [],
    "uncertain": [],
    "crossTolerances": []
  },
  "harmReduction": [
    "Benzodiazepine dependence occurs in about one-third of individuals who are treated with benzodiazepines for longer than 4 weeks, which typically results in tolerance and benzodiazepine withdrawal syndrome when the dose is reduced too rapidly. Midazolam infusions may induce tolerance and a withdrawal syndrome in a matter of days.",
    "The risk factors for dependence include dependent personality, use of a benzodiazepine that is short-acting, high potency and long-term use of benzodiazepines. Withdrawal symptoms from midazolam can range from insomnia and anxiety to seizures and psychosis. Withdrawal symptoms can sometimes resemble a person's underlying condition.",
    "Gradual reduction of midazolam after regular use can minimise withdrawal and rebound effects. Tolerance and the resultant withdrawal syndrome may be due to receptor down-regulation and GABAA receptor alterations in gene expression, which causes long-term changes in the function of the GABAergic neuronal system.",
    "A midazolam overdose is considered a medical emergency and generally requires the immediate attention of medical personnel. Benzodiazepine overdose in healthy individuals is rarely life-threatening with proper medical support; however, the toxicity of benzodiazepines increases when they are combined with other CNS depressants such as alcohol, opioids, or tricyclic antidepressants. The toxicity of benzodiazepine overdose and risk of death is also increased in the elderly and those with obstructive pulmonary disease or when used intravenously."
  ],
  "legality": "Legal status varies by jurisdiction. Check local laws.",
  "chemistry": {
    "formula": "Unknown",
    "molecularWeight": "Unknown",
    "class": "Benzodiazepines"
  },
  "history": null,
  "afterEffects": "See route data for afterglow information.",
  "riskLevel": "moderate",
  "psychonautWikiUrl": "https://psychonautwiki.org/wiki/Midazolam"
};
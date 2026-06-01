import type { Substance } from './types';

// Substance Data
// Name: Magnesium Glycinate
// ID: magnesium-glycinate
// Categories: supplements
// Class: Dietary Supplements

export const magnesium_glycinate: Substance = 
{
  "id": "magnesium_glycinate",
  "name": "Magnesium Glycinate",
  "commonNames": [
    "Magnesium Glycinate",
    "Magnesium Bisglycinate",
    "Magnesium Diglycinate"
  ],
  "categories": [
    "other" //TODo: ADD SUPPLEMENTS CAT
  ],
  "class": "Dietary Supplements",
  "description": "Magnesium Glycinate (also known as Magnesium Bisglycinate or Magnesium Diglycinate) is a widely-used dietary supplement and over-the-counter compound of the mineral magnesium bound to two glycine molecules. Magnesium is an essential mineral involved in over 300 enzymatic reactions in the body, including energy production, DNA synthesis, muscle function, and nervous system regulation. The glycinate form is known for its high bioavailability and gentle effect on the digestive system compared to other magnesium compounds such as magnesium oxide or magnesium citrate. It is commonly used to support sleep, reduce anxiety, alleviate muscle cramps, and maintain healthy magnesium levels. Magnesium glycinate is one of the most well-tolerated and absorbable forms of magnesium supplementation available.",
  "effects": {
    "positive": [
      "Cognitive euphoria - Mild improvements in mood and emotional well-being have been reported, particularly in individuals with magnesium deficiency. Some users describe a subtle lift in mood or a general sense of calm contentment when supplementing regularly.",
      "Anxiety suppression - Magnesium glycinate is frequently reported to reduce feelings of anxiety and stress. Magnesium plays a role in regulating the hypothalamic-pituitary-adrenal (HPA) axis and modulating the stress response by binding to calming receptors in the brain.",
      "Focus enhancement - Mild improvements in concentration and mental clarity have been noted by some users, likely related to magnesium's role in supporting healthy neurological function and reducing background anxiety.",
      "Sleep aid - Magnesium glycinate is one of the most popular magnesium supplements used to improve sleep quality. The glycine component may independently promote relaxation and improve sleep quality by lowering core body temperature and acting as an inhibitory neurotransmitter.",
      "Stamina enhancement - Mild improvements in physical stamina and exercise performance have been reported, as magnesium is critical for ATP production, muscle oxygenation, and electrolyte balance during physical activity.",
      "Tactile enhancement",
      "Increased libido",
      "Increased music appreciation",
      "Memory enhancement",
      "Thought organization",
      "Sedation - At higher doses, magnesium glycinate can produce a mild calming or sedating effect that is useful for winding down before sleep. This effect is generally subtle and not comparable to traditional sedatives or depressants.",
      "Muscle relaxation - Reduction in muscle tension, cramps, and spasms is one of the most commonly reported benefits of magnesium glycinate supplementation. Magnesium acts as a natural calcium channel blocker, helping muscles relax."
    ],
    "neutral": [
      "Appetite enhancement",
      "Appetite suppression - Some users report reduced appetite when supplementing with magnesium glycinate, though this is not a universal effect and may depend on individual metabolic factors.",
      "Bodily lightness",
      "Changes in gravity perception",
      "Cognitive fatigue - At higher doses, some users report mild mental fatigue or brain fog, which may be related to the sedating properties of glycine.",
      "Dream suppression",
      "Dream enhancement - Vivid dreams have been reported by some users when taking magnesium glycinate before bed, likely due to glycine's influence on NMDA receptors and REM sleep architecture.",
      "Spontaneous bodily sensations - A sense of physical relaxation and warmth throughout the body is commonly reported.",
      "Temperature regulation suppression",
      "Tactile suppression",
      "Thought deceleration - Mild slowing of thought processes may occur at higher doses, contributing to the overall calming effect.",
      "Wakefulness - At low to moderate doses, magnesium glycinate may produce a slight increase in wakefulness and alertness, particularly in individuals who were previously deficient in magnesium."
    ],
    "negative": [
      "Dizziness - Occurs rarely and is typically associated with excessive dosing or rapid changes in blood pressure secondary to vasodilation.",
      "Nausea - Mild nausea can occur, especially when taken on an empty stomach. Taking magnesium glycinate with food generally eliminates this side effect.",
      "Bowel changes - Unlike other forms of magnesium (notably magnesium citrate and oxide), magnesium glycinate is well-tolerated by the digestive system. However, at very high doses, some users may experience loose stools or mild diarrhea.",
      "Headaches - Rarely reported and typically associated with dehydration or overly high dosing.",
      "Cognitive dysphoria - Mild brain fog or cognitive dulling may occur at doses significantly above the recommended range, though this is uncommon with the glycinate form.",
      "Depression",
      "Abnormal heartbeat - Palpitations or changes in heart rhythm may occur at very high doses due to magnesium's effect on cardiac muscle function. Individuals with heart conditions should consult a physician before supplementation.",
      "Motor control loss",
      "Respiratory depression - Excessive magnesium intake can lead to respiratory depression in extreme cases, though this is highly unlikely at normal supplemental doses.",
      "Seizure - Risk of seizures is extremely low at normal supplemental doses. Seizures are more likely associated with magnesium deficiency rather than excess intake."
    ]
  },
  "defaultUnit": "mg",
  "routeData": {
    "oral": {
      "dosage": {
        "threshold": "50mg",
        "light": "100-200mg",
        "common": "200-400mg",
        "strong": "400-600mg",
        "heavy": "600mg"
      },
      "duration": {
        "onset": "15-60 minutes",
        "comeup": "30-90 minutes",
        "peak": "2-4 hours",
        "offset": "4-8 hours",
        "total": "6-12 hours",
        "afterglow": "2-4 hours"
      }
    }
  },
  "interactions": {
    "dangerous": [],
    "unsafe": [],
    "uncertain": [
      "Benzodiazepines",
      "Ketamine",
      "Opioids",
      "Barbiturates"
    ],
    "crossTolerances": []
  },
  "harmReduction": [
    "Magnesium glycinate has a very high safety profile and a wide therapeutic window. The recommended daily allowance (RDA) for magnesium in adults ranges from 310-420mg depending on age and sex. Supplemental doses typically range from 200-400mg per day.",
    "Magnesium glycinate is generally well-tolerated and does not cause the gastrointestinal distress commonly associated with magnesium oxide or magnesium citrate. This makes it the preferred form for individuals with sensitive digestive systems.",
    "Individuals with kidney disease or severe renal impairment should exercise caution with magnesium supplementation, as impaired kidney function can lead to dangerous accumulation of magnesium in the blood (hypermagnesemia). Symptoms of hypermagnesemia include nausea, vomiting, lethargy, muscle weakness, irregular heartbeat, and in extreme cases, cardiac arrest.",
    "Magnesium can interact with certain medications, including bisphosphonates (osteoporosis drugs), antibiotics (quinolones and tetracyclines), diuretics, and proton pump inhibitors (PPIs). It is advisable to space magnesium supplementation at least 2 hours apart from these medications.",
    "The upper tolerable intake level (UL) for supplemental magnesium is set at 350mg per day for adults by the National Institutes of Health (NIH), though many practitioners recommend higher doses for therapeutic purposes under medical supervision.",
    "Magnesium supplementation may enhance the effects of central nervous system depressants including benzodiazepines, barbiturates, and certain anticonvulsants. While magnesium itself is not a depressant, its muscle-relaxing and calming properties may compound sedative effects when combined with these substances.",
    "It is strongly recommended that one use harm reduction practices when using this substance, including starting with a low dose to assess individual tolerance and response.",
    "Pregnant and breastfeeding individuals should consult their healthcare provider before beginning magnesium supplementation, though magnesium glycinate is generally considered safe during pregnancy and is sometimes prescribed to prevent preeclampsia.",
    "Symptoms of magnesium overdose (hypermagnesemia) include low blood pressure, nausea, vomiting, facial flushing, retention of urine, depression, and lethargy before progressing to more severe symptoms such as muscle weakness, difficulty breathing, extreme hypotension, irregular heartbeat, and cardiac arrest. If overdose is suspected, seek immediate medical attention."
  ],
  "legality": "Legal. Magnesium glycinate is available as an over-the-counter dietary supplement in most countries worldwide without a prescription. It is classified as a Generally Recognized as Safe (GRAS) substance by the FDA.",
  "chemistry": {
    "formula": "C4H8MgN2O4",
    "molecularWeight": "142.41 g/mol",
    "class": "Dietary Supplements"
  },
  "history": "Magnesium was first isolated as an element by Sir Humphry Davy in 1808 through the electrolysis of magnesia and mercury oxide. The glycinate form of magnesium, where magnesium is chelated (bound) to the amino acid glycine, was developed later as pharmaceutical and supplement manufacturers sought more bioavailable and better-tolerated forms of magnesium supplementation. Glycine itself, the smallest amino acid, was first isolated in 1820 by Henri Braconnot. The combination of magnesium with glycine creates a stable chelate that survives digestion intact, allowing for efficient absorption in the intestines. Magnesium glycinate has become increasingly popular since the early 2000s as public awareness of magnesium deficiency has grown and as clinical research has demonstrated its superior bioavailability compared to inorganic magnesium salts like magnesium oxide.",
  "afterEffects": "Mild residual relaxation and improved sleep quality may persist for several hours after the primary effects have worn off. Some users report a sense of physical well-being and reduced muscle tension lasting into the following day when used consistently as a sleep aid.",
  "riskLevel": "none",
  "psychonautWikiUrl": "https://psychonautwiki.org/wiki/Magnesium_Glycinate"
};

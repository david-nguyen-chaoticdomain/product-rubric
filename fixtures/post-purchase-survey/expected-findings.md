# Expected findings: post-purchase survey

The answer key for this fixture. Every flaw below was planted deliberately. A run of the Survey Review rubric against `questionnaire.md` should find each of them, at the rating given, and should not flag the sound items.

## The introduction

| Flaw | Criterion | Expected rating |
| --- | --- | --- |
| The introduction announces what the team hopes to hear ("the most delightful way to keep your books," "how much you are enjoying it") before a single question is asked, priming positive answers to everything that follows. | Neutral wording; Order that does not contaminate | Biasing |

## Question by question

| # | Flaw | Criterion | Expected rating |
| --- | --- | --- | --- |
| Q1 | "How much do you love using Ledgerline?" presupposes the answer and offers an asymmetric scale (A lot / A little / Not at all) on what is, in effect, the survey's central satisfaction measure. The question manufactures its answers. | Neutral wording; Scales that behave | **Invalidating** |
| Q2 | Double-barreled: "fast and easy to understand" asks two things in one yes/no item. A respondent who found setup fast but confusing has no truthful answer. | One question per question | Biasing |
| Q3 | Asks for exact recall of logins during the first week, a month later, as a free-text number. Respondents cannot know this; the data will be invented. (The product's own analytics already hold the true number.) | Answerable from the respondent's position | Biasing |
| Q4 | Unbalanced satisfaction scale: four positive shades (Extremely / Very / Satisfied / Somewhat satisfied) against a single negative option, with no neutral point. | Scales that behave | Biasing |
| Q5 | Sound on its own: a numeric value-for-money scale, 1 = Excellent to 5 = Poor, ends labeled. Its flaw only exists in combination with Q9 (see below), so a run should not flag Q5 alone. | (none) | Sound |
| Q6 | "Do you agree that our pricing is unfair for freelancers?" plants the conclusion and uses an agree/disagree format, which pulls toward agreement. | Neutral wording | Biasing |
| Q7 | Forces a rating of the AI categorization feature with no "I have not used it" option. Respondents who never touched it must either guess (noise) or abandon the survey. | Answer options that cover the truth; Scales that behave | Biasing |
| Q8 | The stem lists the release's features and then asks "How innovative do you find Ledgerline?" The question primes the judgment it claims to measure. | Neutral wording; Order that does not contaminate | Biasing |
| Q9 | A numeric scale running 5 = Excellent to 1 = Poor, the opposite direction of Q5's 1 = Excellent to 5 = Poor, in the same questionnaire. Respondents who learned the first scale will misread the second. | Scales that behave (consistency across the questionnaire) | Biasing |
| Q10 | Overlapping ranges: "1 to 5" and "5 to 10" both contain 5; "5 to 10" and "10 to 20" both contain 10. Boundary answers fit two boxes, and there is no "I did not send any" option. | Answer options that cover the truth | Biasing |
| Q11 | Sound: a factual question with exhaustive, mutually exclusive options in the respondent's vocabulary, including the trial state. | (none) | Sound |
| Q12 | Overall satisfaction asked a second time (see Q4) with nothing new asked. It adds burden, duplicates a construct, and its balanced scale will contradict Q4's skewed one. Recommended action: remove it; keep one satisfaction measure, on a balanced scale. | Every question earns its place | Burden |

## Questionnaire level

- **Order:** the introduction's priming contaminates the whole instrument (see above). Within the questions, the order is otherwise acceptable; a run that invents further order problems is overreaching.
- **Earns its place:** Q12 is the removal candidate (duplication of Q4). Q3's data, even if answered, duplicates what product analytics hold exactly.

## Expected summary counts

12 questions: 1 invalidating (Q1), 8 biasing (Q2, Q3, Q4, Q6, Q7, Q8, Q9, Q10), 1 burden (Q12), 2 sound (Q5, Q11). Plus the introduction, rated Biasing.

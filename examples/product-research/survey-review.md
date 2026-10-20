# Worked example: Survey Review

**Fixture:** `fixtures/post-purchase-survey/questionnaire.md` (a fictional day-30 survey for a fictional bookkeeping app; its brief is in the same folder).
**Rubric:** Survey Review (`survey-review`), version 1.0, fetched through the ProductRubric MCP server.
**Produced:** Oct 20, 2026, by an AI assistant running the rubric exactly as written. Checked against the fixture's answer key (`expected-findings.md` in the fixture folder).

---

**Summary:** 12 questions reviewed: 1 invalidating, 8 biasing, 1 burden, 2 sound. The survey's purpose and audience were available to this review, from the fixture brief: understand the first-month experience to decide onboarding fixes and whether the pricing page sets the right expectations; respondents are customers thirty days after signup, including people still in trial. The introduction is rated separately, before Q1.

**Introduction** (Biasing, breaks Neutral wording and Order that does not contaminate): "We have worked hard to make Ledgerline the most delightful way to keep your books, and we would love to hear how much you are enjoying it" announces the answers the team hopes for before a single question is asked, and it leans on every answer that follows. Suggested revision: "This survey asks about your first month using Ledgerline. It takes about five minutes, and your answers will help us decide what to improve first."

**Q1** (Invalidating, breaks Neutral wording and Scales that behave): "How much do you love using Ledgerline?" presupposes the feeling it claims to measure, and its options (A lot / A little / Not at all) offer two degrees of love against one total rejection. As the survey's first and headline measure, it manufactures the result it will report. Suggested revision: "How satisfied are you with Ledgerline so far?" with options Very satisfied / Satisfied / Neither satisfied nor dissatisfied / Dissatisfied / Very dissatisfied. (Adopting this revision makes Q4 and Q12 duplicates; see below.)

**Q2** (Biasing, breaks One question per question): "Was setting up your account fast and easy to understand?" asks two things and offers one yes or no. A respondent who found setup quick but confusing has no truthful answer, and the team cannot tell which half failed. Suggested revision, split in two: "How easy was it to understand the steps for setting up your account?" (Very easy / Easy / Neither easy nor difficult / Difficult / Very difficult) and "About how long did setting up your account take?" (Under 10 minutes / 10 to 30 minutes / 30 to 60 minutes / More than an hour / I have not finished setting up).

**Q3** (Biasing, breaks Answerable from the respondent's position): "How many times did you log in during your first week?" asks for an exact count of a routine action from a month ago, as a typed number. Respondents will guess, and the guesses will be charted as usage data. The product's own analytics already hold the true number. Suggested revision, if the question is kept at all: "In the last 7 days, on how many days did you log in to Ledgerline?" (0 / 1 to 2 / 3 to 4 / 5 to 7).

**Q4** (Biasing, breaks Scales that behave): "How satisfied are you with Ledgerline overall?" offers four shades of positive (Extremely satisfied / Very satisfied / Satisfied / Somewhat satisfied) against a single Dissatisfied, with no neutral point. The scale leans, so the average will. Suggested revision: the balanced scale, Very satisfied / Satisfied / Neither satisfied nor dissatisfied / Dissatisfied / Very dissatisfied. If Q1 is revised as suggested above, remove this question instead and keep one satisfaction measure.

**Q5.** Sound.

**Q6** (Biasing, breaks Neutral wording): "Do you agree that our pricing is unfair for freelancers?" plants the conclusion in the question and uses an agree format, which pulls respondents toward agreeing. This is also the question meant to inform the pricing page decision, so its bias lands on a real decision. Suggested revision: "How fair do you think Ledgerline's pricing is for freelancers?" (Very fair / Somewhat fair / Neither fair nor unfair / Somewhat unfair / Very unfair).

**Q7** (Biasing, breaks Answer options that cover the truth): "How would you rate our new AI categorization feature?" forces a rating from every respondent, including those who have never used the feature. They must guess, which adds noise to a feature evaluation, or abandon the survey. Suggested revision: add the option "I have not used this feature yet" (or ask "Have you used AI categorization?" first and only put the rating to those who have).

**Q8** (Biasing, breaks Neutral wording and Order that does not contaminate): the stem lists the release's features ("AI categorization, receipt scanning, and automatic mileage tracking") and then asks "How innovative do you find Ledgerline?" The question primes the judgment it claims to measure; respondents are rating the list as much as the product. Suggested revision: "Compared with other bookkeeping tools you have used, how innovative do you find Ledgerline?" (Very innovative / Somewhat innovative / Not very innovative / Not at all innovative / I have not used other bookkeeping tools).

**Q9** (Biasing, breaks Scales that behave): the help center scale runs 5 = Excellent down to 1 = Poor, the opposite direction of Q5's 1 = Excellent to 5 = Poor in the same questionnaire. Respondents who learned the first scale will misread the second, and the errors will be silent. Suggested revision: relabel to match Q5, 1 = Excellent, 2, 3, 4, 5 = Poor.

**Q10** (Biasing, breaks Answer options that cover the truth): the invoice ranges overlap: "1 to 5" and "5 to 10" both contain 5, and "5 to 10" and "10 to 20" both contain 10, so boundary respondents choose arbitrarily between two correct boxes. There is also no option for sending no invoices. Suggested revision: I did not send any invoices / 1 to 4 / 5 to 9 / 10 to 19 / 20 or more.

**Q11.** Sound.

**Q12** (Burden, breaks Every question earns its place): "Overall, how satisfied are you with Ledgerline?" asks Q4's question a second time and adds nothing. Its balanced scale will also contradict Q4's skewed one, leaving two satisfaction numbers that disagree for reasons built into the instrument. Recommended action: remove it, and keep a single satisfaction measure on a balanced scale.

## Questionnaire as a whole

**Order that does not contaminate.** The introduction's priming is the questionnaire's main order problem: it frames the team as proud and the product as delightful immediately before the satisfaction measures, and nothing later cancels that lean. Within the questions, the sequence is otherwise workable; Q8's contamination sits inside its own stem and is covered there.

**Every question earns its place.** Q12 should be removed: it duplicates Q4. If Q1 is revised into the balanced satisfaction measure, Q4 should be removed as well, leaving one satisfaction question in the survey. Q3 earns weak keep: even answered honestly, it duplicates what product analytics hold exactly, and the revised version should only stay if the team has a reason to compare perceived use against actual use.

## Highest impact fixes

1. Q1: replace the "love" question and its asymmetric options with a balanced satisfaction measure; as written, the survey's headline number is manufactured.
2. Introduction: remove "the most delightful way to keep your books" and "how much you are enjoying it"; the framing leans on every answer in the survey.
3. Q6: rewrite the pricing question in neutral form; it feeds the pricing page decision.
4. Q4: balance the satisfaction scale (four positive shades against one negative), or remove the question if Q1 is revised.
5. Q8: delete the feature list from the stem so the innovation question measures a judgment instead of reciting one.
6. Q7: add "I have not used this feature yet" so non-users stop guessing or abandoning.
7. Q9: make the help center scale run in the same direction as Q5.
8. Q2: split "fast and easy to understand" into a speed question and an ease question.
9. Q3: replace exact first-week recall with a last-7-days ranged question, or drop it and use product analytics.
10. Q10: fix the overlapping invoice ranges and add a "did not send any" option.
11. Q12: remove the duplicate satisfaction question.

```
Rubric summary, for tracking
Rubric: Survey Review v1.0 · Date: 2026-10-20 · Artifact: Post-purchase survey questionnaire (Ledgerline fixture)
Questions: Reviewed 12 · Invalidating flaws 1 · Biasing flaws 8 · Burden flaws 1 · Sound 2
Result: 10 of 12 questions need revision before the survey is fielded
```

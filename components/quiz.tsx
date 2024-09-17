'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Quiz data for all subjects (20 questions each)
const quizData = {
  polity: [
    {
      question: "Who is known as the 'Father of the Indian Constitution'?",
      options: [
        { text: "Mahatma Gandhi", explanation: "While a key figure in India's independence, he wasn't directly involved in drafting the constitution." },
        { text: "Jawaharlal Nehru", explanation: "He was India's first Prime Minister, but not the primary drafter of the constitution." },
        { text: "B.R. Ambedkar", explanation: "Correct! He was the chairman of the constitution drafting committee." },
        { text: "Sardar Patel", explanation: "He played a crucial role in India's integration, but wasn't the main architect of the constitution." }
      ],
      correctAnswer: 2
    },
    {
      question: "Which article of the Indian Constitution abolishes untouchability?",
      options: [
        { text: "Article 14", explanation: "Article 14 ensures equality before the law." },
        { text: "Article 15", explanation: "Article 15 prohibits discrimination on grounds of religion, race, caste, sex or place of birth." },
        { text: "Article 17", explanation: "Correct! Article 17 abolishes untouchability and forbids its practice in any form." },
        { text: "Article 21", explanation: "Article 21 protects life and personal liberty." }
      ],
      correctAnswer: 2
    },
    {
      question: "Who was the first woman to become the President of India?",
      options: [
        { text: "Sonia Gandhi", explanation: "Sonia Gandhi was never the President of India." },
        { text: "Pratibha Patil", explanation: "Correct! Pratibha Patil was the first woman to serve as the President of India." },
        { text: "Indira Gandhi", explanation: "Indira Gandhi was the first female Prime Minister, not President." },
        { text: "Meira Kumar", explanation: "Meira Kumar was the first woman Speaker of the Lok Sabha, not the President." }
      ],
      correctAnswer: 1
    },
    {
      question: "Which amendment to the Indian Constitution added the words 'Socialist' and 'Secular' to the Preamble?",
      options: [
        { text: "24th Amendment", explanation: "The 24th Amendment reaffirmed Parliament's power to amend any part of the Constitution." },
        { text: "42nd Amendment", explanation: "Correct! The 42nd Amendment added 'Socialist' and 'Secular' to the Preamble." },
        { text: "44th Amendment", explanation: "The 44th Amendment nullified some aspects of the 42nd Amendment." },
        { text: "52nd Amendment", explanation: "The 52nd Amendment dealt with defection laws." }
      ],
      correctAnswer: 1
    },
    {
      question: "Which body in India is responsible for conducting elections?",
      options: [
        { text: "Supreme Court of India", explanation: "The Supreme Court of India does not conduct elections." },
        { text: "Election Commission of India", explanation: "Correct! The Election Commission of India conducts elections in the country." },
        { text: "Union Public Service Commission", explanation: "The UPSC conducts civil services examinations, not elections." },
        { text: "National Human Rights Commission", explanation: "The NHRC is related to human rights issues, not elections." }
      ],
      correctAnswer: 1
    },
    {
      question: "What is the tenure of the President of India?",
      options: [
        { text: "5 years", explanation: "Correct! The President of India serves a 5-year term." },
        { text: "6 years", explanation: "The President of India does not serve a 6-year term." },
        { text: "7 years", explanation: "The President's tenure is not 7 years." },
        { text: "4 years", explanation: "The tenure of the President of India is not 4 years." }
      ],
      correctAnswer: 0
    },
    {
      question: "Which article of the Constitution provides for the imposition of President's rule in a state?",
      options: [
        { text: "Article 352", explanation: "Article 352 deals with National Emergency." },
        { text: "Article 356", explanation: "Correct! Article 356 allows the imposition of President's rule in a state." },
        { text: "Article 360", explanation: "Article 360 relates to a financial emergency." },
        { text: "Article 365", explanation: "Article 365 deals with non-compliance with the directions of the Union Government." }
      ],
      correctAnswer: 1
    },
    {
      question: "Which house of the Indian Parliament is considered the 'House of the People'?",
      options: [
        { text: "Lok Sabha", explanation: "Correct! The Lok Sabha is the 'House of the People' in the Indian Parliament." },
        { text: "Rajya Sabha", explanation: "Rajya Sabha is the 'Council of States'." },
        { text: "Vidhan Sabha", explanation: "Vidhan Sabha refers to the state legislative assemblies." },
        { text: "Vidhan Parishad", explanation: "Vidhan Parishad refers to the state legislative councils." }
      ],
      correctAnswer: 0
    },
    {
      question: "Which of the following is NOT a Fundamental Right under the Indian Constitution?",
      options: [
        { text: "Right to Equality", explanation: "Right to Equality is a Fundamental Right." },
        { text: "Right to Freedom", explanation: "Right to Freedom is a Fundamental Right." },
        { text: "Right to Property", explanation: "Correct! Right to Property was removed from the list of Fundamental Rights by the 44th Amendment." },
        { text: "Right to Education", explanation: "Right to Education is a Fundamental Right." }
      ],
      correctAnswer: 2
    },
    {
      question: "Who appoints the Chief Justice of India?",
      options: [
        { text: "President of India", explanation: "Correct! The President of India appoints the Chief Justice of India." },
        { text: "Prime Minister of India", explanation: "The Prime Minister does not appoint the Chief Justice." },
        { text: "Chief Election Commissioner", explanation: "The Chief Election Commissioner does not appoint the Chief Justice." },
        { text: "Attorney General of India", explanation: "The Attorney General does not appoint the Chief Justice." }
      ],
      correctAnswer: 0
    },
    {
      question: "What is the minimum age required to become the Prime Minister of India?",
      options: [
        { text: "30 years", explanation: "The minimum age to be a Member of Parliament is not 30 years." },
        { text: "25 years", explanation: "Correct! A person must be at least 25 years old to become the Prime Minister of India." },
        { text: "35 years", explanation: "The minimum age is lower than 35 years." },
        { text: "40 years", explanation: "The minimum age is lower than 40 years." }
      ],
      correctAnswer: 1
    },
    {
      question: "Which part of the Indian Constitution deals with Fundamental Duties?",
      options: [
        { text: "Part III", explanation: "Part III deals with Fundamental Rights." },
        { text: "Part IV", explanation: "Part IV deals with the Directive Principles of State Policy." },
        { text: "Part IVA", explanation: "Correct! Part IVA deals with Fundamental Duties." },
        { text: "Part V", explanation: "Part V deals with the Union Government." }
      ],
      correctAnswer: 2
    },
    {
      question: "The Vice President of India is elected by:",
      options: [
        { text: "Lok Sabha", explanation: "The Vice President is elected by both houses of Parliament." },
        { text: "Rajya Sabha", explanation: "The Vice President is not elected by Rajya Sabha alone." },
        { text: "Both Houses of Parliament", explanation: "Correct! The Vice President is elected by an electoral college consisting of members of both houses of Parliament." },
        { text: "State Legislative Assemblies", explanation: "The Vice President is not elected by State Legislative Assemblies." }
      ],
      correctAnswer: 2
    },
    {
      question: "The 73rd Amendment Act of the Indian Constitution is related to:",
      options: [
        { text: "Municipalities", explanation: "The 73rd Amendment is not related to municipalities." },
        { text: "Panchayati Raj", explanation: "Correct! The 73rd Amendment deals with Panchayati Raj institutions." },
        { text: "Fundamental Rights", explanation: "The 73rd Amendment does not pertain to Fundamental Rights." },
        { text: "Union Territories", explanation: "The 73rd Amendment does not deal with Union Territories." }
      ],
      correctAnswer: 1
    },
    {
      question: "What is the maximum strength of the Lok Sabha as mentioned in the Constitution?",
      options: [
        { text: "530", explanation: "The maximum strength of the Lok Sabha is higher than 530." },
        { text: "545", explanation: "Correct! The maximum strength of the Lok Sabha is 545 members." },
        { text: "550", explanation: "The actual maximum strength is slightly lower than 550." },
        { text: "560", explanation: "The maximum strength of the Lok Sabha is lower than 560." }
      ],
      correctAnswer: 1
    },
    {
      question: "Who among the following was the first Chief Justice of India?",
      options: [
        { text: "H.J. Kania", explanation: "Correct! H.J. Kania was the first Chief Justice of India." },
        { text: "Fazal Ali", explanation: "Fazal Ali was not the first Chief Justice of India." },
        { text: "M. Patanjali Sastri", explanation: "M. Patanjali Sastri was the second Chief Justice of India." },
        { text: "B.P. Sinha", explanation: "B.P. Sinha was not the first Chief Justice of India." }
      ],
      correctAnswer: 0
    },
    {
      question: "Who presides over a joint sitting of both houses of Parliament?",
      options: [
        { text: "Prime Minister of India", explanation: "The Prime Minister does not preside over joint sittings of Parliament." },
        { text: "Speaker of the Lok Sabha", explanation: "Correct! The Speaker of the Lok Sabha presides over joint sittings of both houses of Parliament." },
        { text: "Chairman of the Rajya Sabha", explanation: "The Chairman of the Rajya Sabha does not preside over joint sittings." },
        { text: "President of India", explanation: "The President does not preside over joint sittings." }
      ],
      correctAnswer: 1
    },
    {
      question: "Which of the following is a constitutional body in India?",
      options: [
        { text: "National Human Rights Commission", explanation: "The NHRC is a statutory body, not a constitutional one." },
        { text: "Election Commission of India", explanation: "Correct! The Election Commission of India is a constitutional body." },
        { text: "NITI Aayog", explanation: "NITI Aayog is a non-constitutional body." },
        { text: "National Green Tribunal", explanation: "The NGT is a statutory body, not a constitutional one." }
      ],
      correctAnswer: 1
    },
    {
      question: "Which Article of the Indian Constitution empowers the Parliament to amend the Constitution?",
      options: [
        { text: "Article 356", explanation: "Article 356 deals with President's rule in a state." },
        { text: "Article 368", explanation: "Correct! Article 368 empowers Parliament to amend the Constitution." },
        { text: "Article 370", explanation: "Article 370 deals with special provisions for Jammu and Kashmir." },
        { text: "Article 352", explanation: "Article 352 deals with the declaration of a national emergency." }
      ],
      correctAnswer: 1
    }
  ],
  geography: [
    {
      question: "Which is the largest state in India by area?",
      options: [
        { text: "Maharashtra", explanation: "Maharashtra is the third-largest state by area." },
        { text: "Madhya Pradesh", explanation: "Madhya Pradesh is the second-largest state by area." },
        { text: "Rajasthan", explanation: "Correct! Rajasthan is the largest state in India by area." },
        { text: "Uttar Pradesh", explanation: "Uttar Pradesh is the fourth-largest state by area." }
      ],
      correctAnswer: 2
    },
    {
      question: "Which river is known as the 'Sorrow of Bihar'?",
      options: [
        { text: "Ganga", explanation: "While the Ganga flows through Bihar, it's not known as the 'Sorrow of Bihar'." },
        { text: "Kosi", explanation: "Correct! The Kosi river is known as the 'Sorrow of Bihar' due to its frequent floods." },
        { text: "Son", explanation: "The Son river is an important river in Bihar but not known as the 'Sorrow of Bihar'." },
        { text: "Gandak", explanation: "The Gandak is a major river in Bihar but not known as the 'Sorrow of Bihar'." }
      ],
      correctAnswer: 1
    },
    {
      question: "Which Indian state has the longest coastline?",
      options: [
        { text: "Maharashtra", explanation: "Maharashtra has a long coastline, but it's not the longest." },
        { text: "Tamil Nadu", explanation: "Tamil Nadu's coastline is significant, but not the longest." },
        { text: "Gujarat", explanation: "Correct! Gujarat has the longest coastline in India." },
        { text: "Kerala", explanation: "Kerala has a long coastline, but it's not the longest in India." }
      ],
      correctAnswer: 2
    },
    {
      question: "Which is the highest mountain peak in India?",
      options: [
        { text: "Mount Everest", explanation: "Mount Everest is the highest peak in the world, but not in India." },
        { text: "Kanchenjunga", explanation: "Correct! Kanchenjunga is the highest mountain peak in India." },
        { text: "Nanda Devi", explanation: "Nanda Devi is one of the highest peaks, but not the highest." },
        { text: "K2", explanation: "K2 is located in Pakistan-occupied territory." }
      ],
      correctAnswer: 1
    },
    {
      question: "Which Indian state is known as the 'Land of the Rising Sun'?",
      options: [
        { text: "Arunachal Pradesh", explanation: "Correct! Arunachal Pradesh is known as the 'Land of the Rising Sun'." },
        { text: "Assam", explanation: "Assam is located in the northeastern part of India, but it's not called the 'Land of the Rising Sun'." },
        { text: "Sikkim", explanation: "Sikkim is in the northeast but is not known as the 'Land of the Rising Sun'." },
        { text: "Meghalaya", explanation: "Meghalaya is known as the 'Abode of Clouds,' not the 'Land of the Rising Sun'." }
      ],
      correctAnswer: 0
    },
    {
      question: "Which river is the longest in India?",
      options: [
        { text: "Yamuna", explanation: "The Yamuna is long, but not the longest in India." },
        { text: "Ganga", explanation: "Correct! The Ganga is the longest river in India." },
        { text: "Brahmaputra", explanation: "The Brahmaputra is one of the major rivers but not the longest." },
        { text: "Godavari", explanation: "The Godavari is the longest peninsular river but not the longest in India." }
      ],
      correctAnswer: 1
    },
    {
      question: "Which desert is located in India?",
      options: [
        { text: "Sahara", explanation: "The Sahara is located in Africa." },
        { text: "Gobi", explanation: "The Gobi Desert is located in China and Mongolia." },
        { text: "Thar", explanation: "Correct! The Thar Desert is located in northwestern India." },
        { text: "Atacama", explanation: "The Atacama Desert is located in South America." }
      ],
      correctAnswer: 2
    },
    {
      question: "Which is the largest freshwater lake in India?",
      options: [
        { text: "Chilika Lake", explanation: "Chilika Lake is the largest coastal lagoon, not a freshwater lake." },
        { text: "Wular Lake", explanation: "Correct! Wular Lake in Jammu & Kashmir is the largest freshwater lake in India." },
        { text: "Loktak Lake", explanation: "Loktak Lake is a freshwater lake but not the largest in India." },
        { text: "Dal Lake", explanation: "Dal Lake is famous but not the largest freshwater lake in India." }
      ],
      correctAnswer: 1
    },
    {
      question: "Which state is known as the 'Spice Garden of India'?",
      options: [
        { text: "Kerala", explanation: "Correct! Kerala is known as the 'Spice Garden of India' due to its large production of spices." },
        { text: "Tamil Nadu", explanation: "Tamil Nadu produces spices, but it's not known as the 'Spice Garden of India'." },
        { text: "Assam", explanation: "Assam is famous for tea production, not spices." },
        { text: "Karnataka", explanation: "Karnataka produces spices but is not known as the 'Spice Garden of India'." }
      ],
      correctAnswer: 0
    },
    {
      question: "In which state is the Sundarbans, the largest mangrove forest, located?",
      options: [
        { text: "Odisha", explanation: "Odisha has mangroves but is not home to the Sundarbans." },
        { text: "West Bengal", explanation: "Correct! The Sundarbans are located in West Bengal." },
        { text: "Assam", explanation: "The Sundarbans are not located in Assam." },
        { text: "Andhra Pradesh", explanation: "The Sundarbans are not located in Andhra Pradesh." }
      ],
      correctAnswer: 1
    },
    {
      question: "Which mountain range separates northern and southern India?",
      options: [
        { text: "Aravalli", explanation: "The Aravalli Range does not separate northern and southern India." },
        { text: "Himalayas", explanation: "The Himalayas are in northern India and don't separate the north and south." },
        { text: "Vindhya", explanation: "Correct! The Vindhya Range separates northern and southern India." },
        { text: "Western Ghats", explanation: "The Western Ghats are located on the western side of India." }
      ],
      correctAnswer: 2
    },
    {
      question: "Which plateau is the oldest in India?",
      options: [
        { text: "Deccan Plateau", explanation: "The Deccan Plateau is large but not the oldest." },
        { text: "Chhota Nagpur Plateau", explanation: "The Chhota Nagpur Plateau is not the oldest in India." },
        { text: "Malwa Plateau", explanation: "The Malwa Plateau is not the oldest in India." },
        { text: "Peninsular Plateau", explanation: "Correct! The Peninsular Plateau is one of the oldest landmasses in India." }
      ],
      correctAnswer: 3
    },
    {
      question: "Which river originates from the Mansarovar Lake in Tibet?",
      options: [
        { text: "Ganga", explanation: "The Ganga does not originate from Mansarovar Lake." },
        { text: "Brahmaputra", explanation: "Correct! The Brahmaputra River originates from the Mansarovar Lake in Tibet." },
        { text: "Godavari", explanation: "The Godavari River does not originate from Mansarovar Lake." },
        { text: "Krishna", explanation: "The Krishna River does not originate from Mansarovar Lake." }
      ],
      correctAnswer: 1
    },
    {
      question: "Which is the southernmost point of India?",
      options: [
        { text: "Kanyakumari", explanation: "Kanyakumari is the southernmost point of mainland India, but not the entire country." },
        { text: "Indira Point", explanation: "Correct! Indira Point is the southernmost point of India's territory." },
        { text: "Rameswaram", explanation: "Rameswaram is not the southernmost point of India." },
        { text: "Minicoy Island", explanation: "Minicoy Island is part of Lakshadweep but not the southernmost point." }
      ],
      correctAnswer: 1
    },
    {
      question: "In which state is the Kaziranga National Park located?",
      options: [
        { text: "West Bengal", explanation: "Kaziranga is not located in West Bengal." },
        { text: "Assam", explanation: "Correct! Kaziranga National Park is located in Assam." },
        { text: "Uttar Pradesh", explanation: "Kaziranga is not located in Uttar Pradesh." },
        { text: "Madhya Pradesh", explanation: "Kaziranga is not located in Madhya Pradesh." }
      ],
      correctAnswer: 1
    },
    {
      question: "Which state is the largest producer of coffee in India?",
      options: [
        { text: "Tamil Nadu", explanation: "Tamil Nadu produces coffee, but not the largest amount." },
        { text: "Kerala", explanation: "Kerala is a major coffee producer, but not the largest." },
        { text: "Karnataka", explanation: "Correct! Karnataka is the largest producer of coffee in India." },
        { text: "Andhra Pradesh", explanation: "Andhra Pradesh is not the largest coffee producer in India." }
      ],
      correctAnswer: 2
    }
  ],
  sports: [
    {
      question: "Who was the first Indian to win an individual Olympic gold medal?",
      options: [
        { text: "P.T. Usha", explanation: "P.T. Usha, known as the 'Queen of Indian track and field', never won an Olympic medal." },
        { text: "Abhinav Bindra", explanation: "Correct! Abhinav Bindra won India's first individual Olympic gold medal in the 10m Air Rifle event at the 2008 Beijing Olympics." },
        { text: "Sushil Kumar", explanation: "Sushil Kumar won bronze in 2008 and silver in 2012 Olympics, but not gold." },
        { text: "Mary Kom", explanation: "Mary Kom won a bronze medal in the 2012 London Olympics, not gold." }
      ],
      correctAnswer: 1
    },
    {
      question: "Which Indian cricketer has scored the most runs in international cricket?",
      options: [
        { text: "Virat Kohli", explanation: "While Virat Kohli has scored many runs, he hasn't surpassed Sachin Tendulkar's record yet." },
        { text: "Rahul Dravid", explanation: "Rahul Dravid, known as 'The Wall', scored over 24,000 international runs, but not the most." },
        { text: "Sachin Tendulkar", explanation: "Correct! Sachin Tendulkar has scored the most runs in international cricket with over 34,000 runs." },
        { text: "MS Dhoni", explanation: "MS Dhoni, while a prolific scorer, hasn't scored the most runs in international cricket." }
      ],
      correctAnswer: 2
    },
    {
      question: "Which Indian athlete is known as the 'Flying Sikh'?",
      options: [
        { text: "P.T. Usha", explanation: "P.T. Usha is called the 'Queen of Indian track and field', not the 'Flying Sikh'." },
        { text: "Milkha Singh", explanation: "Correct! Milkha Singh is known as the 'Flying Sikh' for his achievements in athletics." },
        { text: "Neeraj Chopra", explanation: "Neeraj Chopra is a javelin thrower, but not known as the 'Flying Sikh'." },
        { text: "Hima Das", explanation: "Hima Das is a sprinter, but not known as the 'Flying Sikh'." }
      ],
      correctAnswer: 1
    },
    {
      question: "Which Indian city hosted the first-ever Asian Games in 1951?",
      options: [
        { text: "Mumbai", explanation: "Mumbai has hosted sporting events, but not the first Asian Games." },
        { text: "New Delhi", explanation: "Correct! New Delhi hosted the first-ever Asian Games in 1951." },
        { text: "Kolkata", explanation: "Kolkata did not host the first Asian Games." },
        { text: "Chennai", explanation: "Chennai did not host the first Asian Games." }
      ],
      correctAnswer: 1
    },
    {
      question: "Who is the first Indian woman to win a medal at the Olympics?",
      options: [
        { text: "P.T. Usha", explanation: "P.T. Usha came close to winning a medal but did not." },
        { text: "Saina Nehwal", explanation: "Saina Nehwal won a bronze medal, but not the first medal for an Indian woman." },
        { text: "Karnam Malleswari", explanation: "Correct! Karnam Malleswari won a bronze medal in weightlifting at the 2000 Sydney Olympics." },
        { text: "Mary Kom", explanation: "Mary Kom won a bronze medal in boxing, but she wasn't the first." }
      ],
      correctAnswer: 2
    },
    {
      question: "Which team won the first-ever IPL (Indian Premier League) title?",
      options: [
        { text: "Mumbai Indians", explanation: "Mumbai Indians have won multiple titles, but not the first one." },
        { text: "Chennai Super Kings", explanation: "Chennai Super Kings have won multiple titles, but not the first one." },
        { text: "Rajasthan Royals", explanation: "Correct! Rajasthan Royals won the first-ever IPL title in 2008." },
        { text: "Royal Challengers Bangalore", explanation: "Royal Challengers Bangalore have not won the IPL title yet." }
      ],
      correctAnswer: 2
    },
    {
      question: "Who is the first Indian to win the Badminton World Championships?",
      options: [
        { text: "Saina Nehwal", explanation: "Saina Nehwal has won several titles, but not the World Championships." },
        { text: "P.V. Sindhu", explanation: "Correct! P.V. Sindhu became the first Indian to win the Badminton World Championships in 2019." },
        { text: "Kidambi Srikanth", explanation: "Kidambi Srikanth has not won the World Championships." },
        { text: "Prakash Padukone", explanation: "Prakash Padukone has won many titles but not the World Championships." }
      ],
      correctAnswer: 1
    },
    {
      question: "In which year did India win its first Cricket World Cup?",
      options: [
        { text: "1979", explanation: "India did not win the Cricket World Cup in 1979." },
        { text: "1983", explanation: "Correct! India won its first Cricket World Cup in 1983." },
        { text: "1992", explanation: "India did not win the Cricket World Cup in 1992." },
        { text: "2003", explanation: "India did not win the Cricket World Cup in 2003." }
      ],
      correctAnswer: 1
    },
    {
      question: "Which Indian boxer won a bronze medal at the 2008 Beijing Olympics?",
      options: [
        { text: "Mary Kom", explanation: "Mary Kom won a bronze medal in the 2012 London Olympics, not in 2008." },
        { text: "Vijender Singh", explanation: "Correct! Vijender Singh won a bronze medal in boxing at the 2008 Beijing Olympics." },
        { text: "Akhil Kumar", explanation: "Akhil Kumar did not win a medal at the 2008 Olympics." },
        { text: "Devendro Singh", explanation: "Devendro Singh did not win a medal at the 2008 Olympics." }
      ],
      correctAnswer: 1
    },
    {
      question: "Which Indian footballer is known as the 'Bhaichung Bhutia of Women's Football'?",
      options: [
        { text: "Oinam Bembem Devi", explanation: "Correct! Oinam Bembem Devi is often referred to as the 'Bhaichung Bhutia of Women's Football'." },
        { text: "Sunil Chhetri", explanation: "Sunil Chhetri is a male footballer and not known as the 'Bhaichung Bhutia of Women's Football'." },
        { text: "Sasmita Malik", explanation: "Sasmita Malik is a footballer but not known by this title." },
        { text: "Aditi Chauhan", explanation: "Aditi Chauhan is a footballer but not known by this title." }
      ],
      correctAnswer: 0
    },
    {
      question: "Who is the first Indian woman to score a double century in Test cricket?",
      options: [
        { text: "Mithali Raj", explanation: "Correct! Mithali Raj was the first Indian woman to score a double century in Test cricket." },
        { text: "Harmanpreet Kaur", explanation: "Harmanpreet Kaur has not scored a double century in Test cricket." },
        { text: "Jhulan Goswami", explanation: "Jhulan Goswami is a bowler and has not scored a double century." },
        { text: "Smriti Mandhana", explanation: "Smriti Mandhana has not scored a double century in Test cricket." }
      ],
      correctAnswer: 0
    },
    {
      question: "Who won the first gold medal for India at the Commonwealth Games?",
      options: [
        { text: "Milkha Singh", explanation: "Milkha Singh won gold at the Commonwealth Games, but not the first for India." },
        { text: "Lila Ram", explanation: "Correct! Lila Ram won India's first Commonwealth Games gold medal in wrestling in 1958." },
        { text: "P.T. Usha", explanation: "P.T. Usha won many medals, but not the first Commonwealth Games gold." },
        { text: "Dhanraj Pillay", explanation: "Dhanraj Pillay is a hockey player and did not win the first Commonwealth Games gold." }
      ],
      correctAnswer: 1
    },
    {
      question: "Which sport is associated with the term 'Dronacharya Award'?",
      options: [
        { text: "Hockey", explanation: "The Dronacharya Award is given for excellence in coaching across multiple sports." },
        { text: "Cricket", explanation: "The Dronacharya Award is given for excellence in coaching across multiple sports." },
        { text: "Coaching", explanation: "Correct! The Dronacharya Award is presented to coaches for outstanding contributions in sports coaching." },
        { text: "Kabaddi", explanation: "The Dronacharya Award is not specific to Kabaddi." }
      ],
      correctAnswer: 2
    },
    {
      question: "Which Indian shooter won a silver medal at the 2004 Athens Olympics?",
      options: [
        { text: "Rajyavardhan Singh Rathore", explanation: "Correct! Rajyavardhan Singh Rathore won a silver medal in shooting at the 2004 Athens Olympics." },
        { text: "Abhinav Bindra", explanation: "Abhinav Bindra won gold at the 2008 Beijing Olympics, not silver in 2004." },
        { text: "Gagan Narang", explanation: "Gagan Narang did not win a medal at the 2004 Athens Olympics." },
        { text: "Vijay Kumar", explanation: "Vijay Kumar won a silver medal in 2012, not 2004." }
      ],
      correctAnswer: 0
    },
    {
      question: "Who is known as the 'Hockey Wizard' of India?",
      options: [
        { text: "Dhanraj Pillay", explanation: "Dhanraj Pillay is a famous Indian hockey player but not known as the 'Hockey Wizard'." },
        { text: "Sardar Singh", explanation: "Sardar Singh is a renowned hockey player, but not the 'Hockey Wizard'." },
        { text: "Dhyan Chand", explanation: "Correct! Dhyan Chand is known as the 'Hockey Wizard' for his exceptional skills in the game." },
        { text: "Balbir Singh", explanation: "Balbir Singh is a legendary hockey player but not known as the 'Hockey Wizard'." }
      ],
      correctAnswer: 2
    },
    {
      question: "Which Indian chess player became the first Grandmaster in India?",
      options: [
        { text: "Vishwanathan Anand", explanation: "Correct! Vishwanathan Anand became the first Grandmaster in India." },
        { text: "Pentala Harikrishna", explanation: "Pentala Harikrishna is a Grandmaster but not the first in India." },
        { text: "Koneru Humpy", explanation: "Koneru Humpy is a Grandmaster but not the first in India." },
        { text: "Praggnanandhaa", explanation: "Praggnanandhaa is a chess prodigy but not the first Grandmaster in India." }
      ],
      correctAnswer: 0
    }
  ],
  logic: [
    {
      question: "If all A are B, and all B are C, then:",
      options: [
        { text: "All C are A", explanation: "This is not necessarily true. While all A are C, the reverse may not be true." },
        { text: "All A are C", explanation: "Correct! If all A are B, and all B are C, then it logically follows that all A are C." },
        { text: "No A are C", explanation: "This contradicts the given statements." },
        { text: "Some A are not C", explanation: "This contradicts the given statements." }
      ],
      correctAnswer: 1
    },
    {
      question: "Which number should come next in this sequence: 2, 4, 8, 16, ...?",
      options: [
        { text: "24", explanation: "This doesn't follow the pattern of doubling each number." },
        { text: "32", explanation: "Correct! Each number in the sequence is doubled to get the next number." },
        { text: "30", explanation: "This doesn't follow the pattern of doubling each number." },
        { text: "64", explanation: "While this is double 32, it skips the next number in the sequence." }
      ],
      correctAnswer: 1
    },
    {
      question: "If John is 10 years old now and his sister is twice as old as him, how old will his sister be when John is 20?",
      options: [
        { text: "20", explanation: "His sister will not be the same age as John." },
        { text: "30", explanation: "Correct! John's sister is 10 years older, so when John is 20, she will be 30." },
        { text: "25", explanation: "His sister is not 5 years older." },
        { text: "40", explanation: "His sister is not twice his age." }
      ],
      correctAnswer: 1
    },
    {
      question: "What day comes after the day before yesterday, if today is Wednesday?",
      options: [
        { text: "Monday", explanation: "This does not follow from the question." },
        { text: "Tuesday", explanation: "Correct! The day before yesterday was Monday, so the day after is Tuesday." },
        { text: "Sunday", explanation: "This does not follow from the question." },
        { text: "Thursday", explanation: "This does not follow from the question." }
      ],
      correctAnswer: 1
    },
    {
      question: "Which word is an anagram of 'listen'?",
      options: [
        { text: "silent", explanation: "Correct! 'Silent' is an anagram of 'listen'." },
        { text: "stone", explanation: "'Stone' is not an anagram of 'listen'." },
        { text: "linen", explanation: "'Linen' is not an anagram of 'listen'." },
        { text: "siren", explanation: "'Siren' is not an anagram of 'listen'." }
      ],
      correctAnswer: 0
    },
    {
      question: "If 5 cats can catch 5 mice in 5 minutes, how long will it take 100 cats to catch 100 mice?",
      options: [
        { text: "100 minutes", explanation: "This is incorrect." },
        { text: "10 minutes", explanation: "This is incorrect." },
        { text: "5 minutes", explanation: "Correct! It will still take 5 minutes, since each cat can catch 1 mouse in 5 minutes." },
        { text: "50 minutes", explanation: "This is incorrect." }
      ],
      correctAnswer: 2
    },
    {
      question: "If a car travels at 60 miles per hour, how far can it travel in 45 minutes?",
      options: [
        { text: "60 miles", explanation: "This would be the distance if the car traveled for 1 hour." },
        { text: "45 miles", explanation: "This is incorrect." },
        { text: "30 miles", explanation: "Correct! The car will travel 30 miles in 45 minutes at this speed." },
        { text: "15 miles", explanation: "This is incorrect." }
      ],
      correctAnswer: 2
    },
    {
      question: "If you have a 12-minute hourglass and a 7-minute hourglass, how can you measure exactly 15 minutes?",
      options: [
        { text: "Start both hourglasses, flip the 12-minute hourglass when the 7-minute hourglass runs out, and stop when it runs out again.", explanation: "Correct! This will measure 15 minutes." },
        { text: "Start both hourglasses, and flip both when the 7-minute hourglass runs out.", explanation: "This will not measure 15 minutes accurately." },
        { text: "Use only the 12-minute hourglass, then flip it for another 3 minutes.", explanation: "This will not give an accurate measurement." },
        { text: "There is no way to measure exactly 15 minutes with these hourglasses.", explanation: "There is a way to measure 15 minutes." }
      ],
      correctAnswer: 0
    },
    {
      question: "What comes next in this sequence: 3, 6, 12, 24, ...?",
      options: [
        { text: "36", explanation: "This is incorrect." },
        { text: "48", explanation: "Correct! Each number in the sequence is doubled to get the next number." },
        { text: "60", explanation: "This is incorrect." },
        { text: "72", explanation: "This is incorrect." }
      ],
      correctAnswer: 1
    },
    {
      question: "Which word does not belong in the group: tiger, lion, elephant, cat?",
      options: [
        { text: "tiger", explanation: "Tiger is a wild animal, but it's related to the others." },
        { text: "lion", explanation: "Lion is a wild animal, but it's related to the others." },
        { text: "elephant", explanation: "Correct! Elephant is not a member of the cat family, unlike the others." },
        { text: "cat", explanation: "Cat is a domestic animal, but it's related to the others." }
      ],
      correctAnswer: 2
    },
    {
      question: "If two pencils cost 8 cents, how much do 6 pencils cost?",
      options: [
        { text: "12 cents", explanation: "This is incorrect." },
        { text: "16 cents", explanation: "This is incorrect." },
        { text: "24 cents", explanation: "Correct! If 2 pencils cost 8 cents, 6 pencils will cost 24 cents." },
        { text: "30 cents", explanation: "This is incorrect." }
      ],
      correctAnswer: 2
    },
    {
      question: "If a doctor gives you 3 pills and tells you to take one every half hour, how long will the pills last?",
      options: [
        { text: "1 hour", explanation: "Correct! The first pill is taken immediately, then the next after 30 minutes, and the last one after another 30 minutes." },
        { text: "1.5 hours", explanation: "This is incorrect." },
        { text: "2 hours", explanation: "This is incorrect." },
        { text: "2.5 hours", explanation: "This is incorrect." }
      ],
      correctAnswer: 0
    },
    {
      question: "If a triangle has one angle of 90 degrees, what is the sum of the other two angles?",
      options: [
        { text: "45 degrees", explanation: "This is incorrect." },
        { text: "90 degrees", explanation: "Correct! The sum of the other two angles in a right triangle is 90 degrees." },
        { text: "180 degrees", explanation: "This is incorrect." },
        { text: "60 degrees", explanation: "This is incorrect." }
      ],
      correctAnswer: 1
    },
    {
      question: "How many sides does a hexagon have?",
      options: [
        { text: "5", explanation: "This is incorrect." },
        { text: "6", explanation: "Correct! A hexagon has 6 sides." },
        { text: "7", explanation: "This is incorrect." },
        { text: "8", explanation: "This is incorrect." }
      ],
      correctAnswer: 1
    },
    {
      question: "What number is halfway between 10 and 30?",
      options: [
        { text: "15", explanation: "This is incorrect." },
        { text: "20", explanation: "Correct! 20 is halfway between 10 and 30." },
        { text: "25", explanation: "This is incorrect." },
        { text: "18", explanation: "This is incorrect." }
      ],
      correctAnswer: 1
    },
    {
      question: "If you add two odd numbers, the result is:",
      options: [
        { text: "Always odd", explanation: "This is incorrect." },
        { text: "Always even", explanation: "Correct! The sum of two odd numbers is always even." },
        { text: "Sometimes odd, sometimes even", explanation: "This is incorrect." },
        { text: "Always zero", explanation: "This is incorrect." }
      ],
      correctAnswer: 1
    },
    {
      question: "What is the next prime number after 7?",
      options: [
        { text: "9", explanation: "9 is not a prime number." },
        { text: "11", explanation: "Correct! 11 is the next prime number after 7." },
        { text: "13", explanation: "13 is prime but comes after 11." },
        { text: "15", explanation: "15 is not a prime number." }
      ],
      correctAnswer: 1
    },
    {
      question: "How many months in the year have 31 days?",
      options: [
        { text: "6", explanation: "This is incorrect." },
        { text: "7", explanation: "Correct! There are 7 months with 31 days." },
        { text: "8", explanation: "This is incorrect." },
        { text: "9", explanation: "This is incorrect." }
      ],
      correctAnswer: 1
    }
  ],
  english: [
    {
      question: "Which of the following is a correct use of the semicolon?",
      options: [
        { text: "I love cooking; my family, and my dog.", explanation: "This is incorrect use of a semicolon. A comma should be used instead." },
        { text: "I love cooking: pasta, pizza, and cake.", explanation: "This is incorrect use of a semicolon. A colon is used here correctly." },
        { text: "I love cooking; I make dinner every night.", explanation: "Correct! A semicolon is used to join two independent clauses." },
        { text: "I love; cooking.", explanation: "This is incorrect use of a semicolon. No punctuation is needed here." }
      ],
      correctAnswer: 2
    },
    {
      question: "Which word is an antonym of 'benevolent'?",
      options: [
        { text: "Kindly", explanation: "This is a synonym, not an antonym, of 'benevolent'." },
        { text: "Generous", explanation: "This is a synonym, not an antonym, of 'benevolent'." },
        { text: "Malevolent", explanation: "Correct! 'Malevolent' means wishing evil or harm to others, which is the opposite of 'benevolent'." },
        { text: "Beneficial", explanation: "While not exactly the same, this is more similar than opposite to 'benevolent'." }
      ],
      correctAnswer: 2
    },
    {
      question: "Which of the following sentences uses a comma correctly?",
      options: [
        { text: "I went to the store, and bought some milk.", explanation: "The comma here is unnecessary." },
        { text: "I went to the store and, bought some milk.", explanation: "The comma placement here is incorrect." },
        { text: "I went to the store, and I bought some milk.", explanation: "Correct! The comma is correctly used before the conjunction joining two independent clauses." },
        { text: "I went to the store and bought some milk.", explanation: "This sentence is also correct but does not use a comma." }
      ],
      correctAnswer: 2
    },
    {
      question: "Which of the following words is spelled correctly?",
      options: [
        { text: "Recieve", explanation: "This is incorrectly spelled." },
        { text: "Receive", explanation: "Correct! 'Receive' is spelled correctly." },
        { text: "Reciave", explanation: "This is incorrectly spelled." },
        { text: "Receeve", explanation: "This is incorrectly spelled." }
      ],
      correctAnswer: 1
    },
    {
      question: "Which of the following sentences is written in the passive voice?",
      options: [
        { text: "The chef cooked the meal.", explanation: "This sentence is written in the active voice." },
        { text: "The meal was cooked by the chef.", explanation: "Correct! This sentence is written in the passive voice." },
        { text: "The chef is cooking the meal.", explanation: "This sentence is written in the active voice." },
        { text: "The meal cooks quickly.", explanation: "This sentence is written in the active voice." }
      ],
      correctAnswer: 1
    },
    {
      question: "Which of the following is a synonym for 'happy'?",
      options: [
        { text: "Sad", explanation: "This is an antonym, not a synonym, of 'happy'." },
        { text: "Joyful", explanation: "Correct! 'Joyful' is a synonym of 'happy'." },
        { text: "Angry", explanation: "This is an antonym, not a synonym, of 'happy'." },
        { text: "Fearful", explanation: "This is not a synonym of 'happy'." }
      ],
      correctAnswer: 1
    },
    {
      question: "Which of the following words is a noun?",
      options: [
        { text: "Run", explanation: "'Run' is a verb, not a noun." },
        { text: "Quickly", explanation: "'Quickly' is an adverb, not a noun." },
        { text: "Happiness", explanation: "Correct! 'Happiness' is a noun." },
        { text: "Bright", explanation: "'Bright' is an adjective, not a noun." }
      ],
      correctAnswer: 2
    },
    {
      question: "Which of the following sentences is an example of a metaphor?",
      options: [
        { text: "The clouds were as fluffy as cotton candy.", explanation: "This is a simile, not a metaphor." },
        { text: "The sky was a blanket of stars.", explanation: "Correct! This is a metaphor." },
        { text: "She was like a breath of fresh air.", explanation: "This is a simile, not a metaphor." },
        { text: "The cake was sweeter than honey.", explanation: "This is a simile, not a metaphor." }
      ],
      correctAnswer: 1
    },
    {
      question: "Which word is an example of a conjunction?",
      options: [
        { text: "And", explanation: "Correct! 'And' is a conjunction." },
        { text: "Quickly", explanation: "'Quickly' is an adverb, not a conjunction." },
        { text: "Beautiful", explanation: "'Beautiful' is an adjective, not a conjunction." },
        { text: "He", explanation: "'He' is a pronoun, not a conjunction." }
      ],
      correctAnswer: 0
    },
    {
      question: "Which of the following sentences is a compound sentence?",
      options: [
        { text: "I went to the store and bought some milk.", explanation: "This is a simple sentence with a compound predicate, not a compound sentence." },
        { text: "I went to the store, but it was closed.", explanation: "Correct! This is a compound sentence because it contains two independent clauses joined by a conjunction." },
        { text: "I went to the store.", explanation: "This is a simple sentence, not a compound sentence." },
        { text: "Running to the store, I realized I had forgotten my wallet.", explanation: "This is a complex sentence, not a compound sentence." }
      ],
      correctAnswer: 1
    },
    {
      question: "Which of the following words is an adjective?",
      options: [
        { text: "Swim", explanation: "'Swim' is a verb, not an adjective." },
        { text: "Beautiful", explanation: "Correct! 'Beautiful' is an adjective." },
        { text: "Quickly", explanation: "'Quickly' is an adverb, not an adjective." },
        { text: "And", explanation: "'And' is a conjunction, not an adjective." }
      ],
      correctAnswer: 1
    },
    {
      question: "Which of the following sentences is written in the future tense?",
      options: [
        { text: "I am going to the store.", explanation: "This is present tense." },
        { text: "I will go to the store.", explanation: "Correct! This is written in the future tense." },
        { text: "I went to the store.", explanation: "This is past tense." },
        { text: "I had gone to the store.", explanation: "This is past perfect tense." }
      ],
      correctAnswer: 1
    },
    {
      question: "Which of the following is a correct use of an apostrophe?",
      options: [
        { text: "The dog wagged it’s tail.", explanation: "This is incorrect. 'It’s' is the contraction for 'it is'." },
        { text: "The dog wagged its tail.", explanation: "Correct! 'Its' shows possession." },
        { text: "The dog’s wagged tail.", explanation: "This is incorrect. The apostrophe is not needed here." },
        { text: "The dogs wagged their tail’s.", explanation: "This is incorrect. The apostrophe is not needed here." }
      ],
      correctAnswer: 1
    },
    {
      question: "Which of the following sentences contains a preposition?",
      options: [
        { text: "She ran quickly.", explanation: "'Quickly' is an adverb, not a preposition." },
        { text: "She ran to the store.", explanation: "Correct! 'To' is a preposition." },
        { text: "She ran and jumped.", explanation: "This sentence does not contain a preposition." },
        { text: "She ran fast.", explanation: "This sentence does not contain a preposition." }
      ],
      correctAnswer: 1
    },
    {
      question: "Which of the following is an example of an interrogative sentence?",
      options: [
        { text: "She went to the store.", explanation: "This is a declarative sentence, not an interrogative one." },
        { text: "Go to the store!", explanation: "This is an imperative sentence, not an interrogative one." },
        { text: "Did she go to the store?", explanation: "Correct! This is an interrogative sentence because it asks a question." },
        { text: "She might go to the store.", explanation: "This is a declarative sentence, not an interrogative one." }
      ],
      correctAnswer: 2
    },
    {
      question: "Which of the following words is a pronoun?",
      options: [
        { text: "He", explanation: "Correct! 'He' is a pronoun." },
        { text: "Quickly", explanation: "'Quickly' is an adverb, not a pronoun." },
        { text: "Beautiful", explanation: "'Beautiful' is an adjective, not a pronoun." },
        { text: "Run", explanation: "'Run' is a verb, not a pronoun." }
      ],
      correctAnswer: 0
    },
    {
      question: "Which of the following is an example of a complex sentence?",
      options: [
        { text: "I went to the store and bought some milk.", explanation: "This is a simple sentence with a compound predicate, not a complex sentence." },
        { text: "I went to the store, but it was closed.", explanation: "This is a compound sentence, not a complex sentence." },
        { text: "Although I went to the store, it was closed.", explanation: "Correct! This is a complex sentence because it contains a dependent and an independent clause." },
        { text: "I went to the store.", explanation: "This is a simple sentence, not a complex sentence." }
      ],
      correctAnswer: 2
    },
    {
      question: "Which of the following words is an adverb?",
      options: [
        { text: "Quickly", explanation: "Correct! 'Quickly' is an adverb." },
        { text: "Beautiful", explanation: "'Beautiful' is an adjective, not an adverb." },
        { text: "He", explanation: "'He' is a pronoun, not an adverb." },
        { text: "Run", explanation: "'Run' is a verb, not an adverb." }
      ],
      correctAnswer: 0
    },
    {
      question: "Which of the following sentences contains a conjunction?",
      options: [
        { text: "She ran quickly.", explanation: "This sentence does not contain a conjunction." },
        { text: "She ran to the store.", explanation: "This sentence does not contain a conjunction." },
        { text: "She ran and jumped.", explanation: "Correct! 'And' is a conjunction." },
        { text: "She ran fast.", explanation: "This sentence does not contain a conjunction." }
      ],
      correctAnswer: 2
    },
    {
      question: "Which of the following is an example of a declarative sentence?",
      options: [
        { text: "Go to the store!", explanation: "This is an imperative sentence, not a declarative one." },
        { text: "Did she go to the store?", explanation: "This is an interrogative sentence, not a declarative one." },
        { text: "She went to the store.", explanation: "Correct! This is a declarative sentence because it makes a statement." },
        { text: "She might go to the store.", explanation: "This is a declarative sentence, but not as straightforward as the other option." }
      ],
      correctAnswer: 2
    },
    {
      question: "Which of the following sentences is written in the present perfect tense?",
      options: [
        { text: "She went to the store.", explanation: "This is past tense, not present perfect." },
        { text: "She has gone to the store.", explanation: "Correct! This is present perfect tense." },
        { text: "She is going to the store.", explanation: "This is present continuous tense, not present perfect." },
        { text: "She will go to the store.", explanation: "This is future tense, not present perfect." }
      ],
      correctAnswer: 1
    }
  ]
}

// Define a union type for the valid subject keys
type Subject = keyof typeof quizData

export function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [currentSubject, setCurrentSubject] = useState<Subject>('polity')

  const currentQuestion = quizData[currentSubject][currentQuestionIndex]

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      setIsSubmitted(true)
    }
  }

  const handleNext = () => {
    if (currentQuestionIndex < quizData[currentSubject].length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
      setSelectedAnswer(null)
      setIsSubmitted(false)
    }
  }

  const handleSkip = () => {
    handleNext()
  }

  const handleSubjectChange = (subject: string) => {
    setCurrentSubject(subject as Subject) // Cast subject as 'Subject' type
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setIsSubmitted(false)
  }

  if (!currentQuestion) {
    return <div>Loading...</div>
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Multi-Subject Quiz</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={currentSubject} onValueChange={handleSubjectChange}>
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="polity">Polity</TabsTrigger>
            <TabsTrigger value="geography">Geography</TabsTrigger>
            <TabsTrigger value="sports">Sports</TabsTrigger>
            <TabsTrigger value="logic">Logic</TabsTrigger>
            <TabsTrigger value="english">English</TabsTrigger>
          </TabsList>
          <TabsContent value={currentSubject}>
            <h2 className="text-xl font-semibold mb-4">{currentQuestion.question}</h2>
            <RadioGroup value={selectedAnswer?.toString()} onValueChange={(value) => setSelectedAnswer(parseInt(value))}>
              {currentQuestion.options.map((option, index) => (
                <div key={index} className="flex items-start space-x-2 mb-4">
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} className="mt-1" />
                  <div className="flex-grow">
                    <Label htmlFor={`option-${index}`} className="font-medium">
                      {option.text}
                    </Label>
                    {isSubmitted && (
                      <p className={`mt-1 text-sm ${index === currentQuestion.correctAnswer ? 'text-green-600' : 'text-red-600'}`}>
                        {option.explanation}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </RadioGroup>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div>
          {!isSubmitted ? (
            <Button onClick={handleSubmit} disabled={selectedAnswer === null}>
              Submit
            </Button>
          ) : (
            <Button onClick={handleNext} disabled={currentQuestionIndex === quizData[currentSubject].length - 1}>
              Next Question
            </Button>
          )}
        </div>
        <p className="text-sm text-muted-foreground">
          Question {currentQuestionIndex + 1} of {quizData[currentSubject].length}
        </p>
        <Button variant="outline" onClick={handleSkip}>
          Skip
        </Button>
      </CardFooter>
    </Card>
  )
}

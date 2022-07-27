// // let obj = {
// //     {}
// // }

// const db = {
//   leaders: [
//     {
//       name: "Dr. Haleem Farman",
//       phd: "University of Peshawar, Pakistan",
//       major: "Computer Science",
//       google_h_index: "",
//       totle_google_citations: "",
//       total_scopus_citations: "",
//       orcid_id: "",
//       feilds_of_interests: "",
//       affiliations: "",
//     },
//     {
//       name: "Dr. Jamil Ahmad",
//       phd: "",
//       major: "Computer Science",
//       google_h_index: "",
//       totle_google_citations: "",
//       total_scopus_citations: "",
//       orcid_id: "",
//       feilds_of_interests: "",
//       affiliations: "",
//     },
//   ],
//   researchers: [
//     {
//       name: "Researcher-1",
//       phd: "",
//       major: "",
//       google_h_index: "",
//       totle_google_citations: "",
//       total_scopus_citations: "",
//       orcid_id: "",
//       feilds_of_interests: "",
//       affiliations: "",
//     },
//     {
//       name: "Researcher-2",
//       phd: "",
//       major: "",
//       google_h_index: "",
//       totle_google_citations: "",
//       total_scopus_citations: "",
//       orcid_id: "",
//       feilds_of_interests: "",
//       affiliations: "",
//     },
//   ],
//   research_assistants: [
//     {
//       name: "R-assistant-1",
//       phd: "",
//       major: "",
//       google_h_index: "",
//       totle_google_citations: "",
//       total_scopus_citations: "",
//       orcid_id: "",
//       feilds_of_interests: "",
//       affiliations: "",
//     },
//     {
//       name: "R-assistant-1",
//       phd: "",
//       major: "",
//       google_h_index: "",
//       totle_google_citations: "",
//       total_scopus_citations: "",
//       orcid_id: "",
//       feilds_of_interests: "",
//       affiliations: "",
//     },
//   ],
// };
// console.log(db.leaders[0]);

const database = require("./database.json");
console.log(database.leaders["#1"]);

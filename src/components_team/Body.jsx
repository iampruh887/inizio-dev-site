import React from "react";
import TeamInfo from "./TeamInfo";
import TeamCard from "./TeamCard";
import skull from "../assets_team/skull.png";

const memberImages = {};
const images = import.meta.glob('../assets_team/member_imgs/*.jpg', { eager: true });
Object.entries(images).forEach(([path, module]) => {
  const fileName = path.replace(/^.*[\\/]/, '');
  memberImages[fileName] = module.default;
});

export default function Body() {
  // Core Team Members
  const coreTeamMembers = [
    {name: "Arnav Raj", designation: "Fest head", instaUrl: "instagram.com", linkedinUrl: "linkedin.com", phone: "1234567890", image: memberImages["fest head.jpg"]},
    { name: "Abhiraj Tomar", designation: "Team Head", instaUrl: "https://www.instagram.com/abhiraj_tomar02?igsh=ZnZibXJoZnVzdnhp", linkedinUrl: "https://www.linkedin.com/in/abhiraj-tomar-52a260236", phone: "9205454265", image: memberImages["em (1).jpg"] },
    { name: "Chiranjit Saha", designation: "Team Head", instaUrl: "https://www.instagram.com/rising_sun_cs/", linkedinUrl: "www.linkedin.com/in/chiranjit-saha-a3bba5230", phone: "8620870598", image: memberImages["pcr (1).jpg"] },
    { name: "Gautam Giri", designation: "Team Head", instaUrl: "https://www.instagram.com/_btwits_gautam/", linkedinUrl: "http://www.linkedin.com/in/gautam-giri-b5615528a", phone: "7068140938", image: memberImages["marketing (6).jpg"] },
    { name: "Kartik Sehgal", designation: "Team Head", instaUrl: "https://www.instagram.com/kartiksehgal_2004/", linkedinUrl: "https://www.linkedin.com/in/kartik-sehgal-b84088259/", phone: "9530590415", image: memberImages["sponsor (2).jpg"] },
    { name: "Nishant Prabhat", designation: "Team Head", instaUrl: "http://instagram.com/a13xv0rd3n", linkedinUrl: "http://linkedin.com/in/nishant-prabhat", phone: "8179642563", image: memberImages["tech (14).jpg"] },
    { name: "Prince Kumar", designation: "Team Head", instaUrl: "", linkedinUrl: "", phone: "", image: memberImages["marketing (8).jpg"] },
    { name: "Swastika Khan", designation: "Team Head", instaUrl: "https://www.instagram.com/k._.swastika?igsh=bzRpaW4xaHBoYW94", linkedinUrl: "https://www.linkedin.com/in/swastika-khan-19271a288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", phone: "7890153673", image: memberImages["tech (9).jpg"] },

  ];

  const techTeamMembers = [
    { name: "Nishant Prabhat", designation: "Team Head", instaUrl: "http://instagram.com/a13xv0rd3n", linkedinUrl: "http://linkedin.com/in/nishant-prabhat", phone: "8179642563", image: memberImages["tech (14).jpg"] },
    { name: "Swastika Khan", designation: "Team Head", instaUrl: "https://www.instagram.com/k._.swastika?igsh=bzRpaW4xaHBoYW94", linkedinUrl: "https://www.linkedin.com/in/swastika-khan-19271a288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", phone: "7890153673", image: memberImages["tech (9).jpg"] },
    { name: "Alok Vishwakarma", designation: "Team Member", instaUrl: "https://www.instagram.com/alok41769", linkedinUrl: "https://in.linkedin.com/in/alok-vishwakarma-52937b327", phone: "9044419516", image: memberImages["tech (7).jpg"] },
    { name: "Ansik Singh Tomar", designation: "Team Member", instaUrl: "https://www.instagram.com/aanshiq_singh?igsh=YTY2dTJoOXV4Nm5j", linkedinUrl: "https://www.linkedin.com/in/aanshik-singh-tomar-506690279/", phone: "8822630829", image: memberImages["tech (5).jpg"] },
    { name: "Anuved Pratap Singh", designation: "Team Member", instaUrl: "https://www.instagram.com/anuvedpratapsingh?igsh=aDhzMmI2anplYTE3", linkedinUrl: "https://www.linkedin.com/in/anuved-singh-7b6b98339", phone: "9260971383", image: skull },
    { name: "Ashish Sharma", designation: "Team Member", instaUrl: "https://www.instagram.com/ashy._.sharma?igsh=Y295bnY2MXhiaHZq", linkedinUrl: "www.linkedin.com/in/ashish-sharma-48682031b", phone: "6398901951", image: skull },
    { name: "Garv Roy", designation: "Team Member", instaUrl: "", linkedinUrl: "", phone: "", image: memberImages["tech (3).jpg"] },
    { name: "L Vishnu Vardhan", designation: "Team Member", instaUrl: "", linkedinUrl: "", phone: "", image: memberImages["tech (1).jpg"] },
    { name: "Pradyumn Ojha", designation: "Team Member", instaUrl: "https://www.instagram.com/_pradyumnojha_", linkedinUrl: "https://www.linkedin.com/in/pradyumn-ojha", phone: "9794337917", image: skull },
    { name: "Prince Raj", designation: "Team Member", instaUrl: "https://www.instagram.com/prince_rxj", linkedinUrl: "https://www.linkedin.com/in/prince-raj-38aa32355", phone: "7644909627", image: memberImages["tech (2).jpg"] },
    { name: "Riya Badhani", designation: "Team Member", instaUrl: "", linkedinUrl: "", phone: "", image: memberImages["tech (8).jpg"] },
    { name: "Shreyas Satish S", designation: "Team Member", instaUrl: "https://www.instagram.com/shreyasiota/", linkedinUrl: "https://www.linkedin.com/in/shreyas-satish-638963325/", phone: "6362789478", image: memberImages["tech (4).jpg"] },
    { name: "Soumil Khanna", designation: "Team Member", instaUrl: "", linkedinUrl: "https://www.linkedin.com/in/soumil-khanna-a46863213?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", phone: "8810658646", image: memberImages["tech (12).jpg"] },
    { name: "Tanishk Gupta", designation: "Team Member", instaUrl: "", linkedinUrl: "", phone: "", image: memberImages["tech (6).jpg"] }
  ];

  const marketingTeamMembers = [
    { name: "Gautam Giri", designation: "Team Head", instaUrl: "https://www.instagram.com/_btwits_gautam/", linkedinUrl: "http://www.linkedin.com/in/gautam-giri-b5615528a", phone: "7068140938", image: memberImages["marketing (6).jpg"] },
    { name: "Prince Kumar", designation: "Team Head", instaUrl: "", linkedinUrl: "", phone: "", image: memberImages["marketing (8).jpg"] },
    { name: "Divyanshi Jaiswal", designation: "Team Member", instaUrl: "https://www.instagram.com/__divyanshi_8", linkedinUrl: "https://www.linkedin.com/in/divyanshi-jaiswal-53a157326", phone: "7079278901", image: memberImages["marketing (1).jpg"] },
    { name: "Disha Khakha", designation: "Team Member", instaUrl: "https://www.instagram.com/dishak.101?igsh=MTdkbmtyY281ZndnaQ==", linkedinUrl: "https://www.linkedin.com/in/disha-khakha-35b332289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", phone: "8310479790", image: skull },
    { name: "Guthikonda Sree Praneeth", designation: "Team Member", instaUrl: "https://www.instagram.com/sree.draftss?igsh=YzcwbTd4eW80bXJ2", linkedinUrl: "https://www.linkedin.com/in/sree-praneeth-guthikonda-a02601311", phone: "7396854129", image: memberImages["marketing (2).jpg"] },
    { name: "Harsh Brijesh Dubey", designation: "Team Member", instaUrl: "https://www.instagram.com/_.harsh.33._", linkedinUrl: "https://www.linkedin.com/in/hxrshthetic", phone: "9580010704", image: memberImages["marketing (3).jpg"] },
    { name: "Harshu Prasad Shukla", designation: "Team Member", instaUrl: "https://www.instagram.com/harshu.visuals", linkedinUrl: "https://in.linkedin.com/in/harshu-prasad-shukla-0aa6a8351", phone: "9324189494", image: memberImages["marketing (4).jpg"] },
    { name: "Mohit Soni", designation: "Team Member", instaUrl: "https://www.instagram.com/mohitsoni_2/", linkedinUrl: "www.linkedin.com/in/mohit-soni-211177271", phone: "7878683216", image: memberImages["marketing (5).jpg"] },
    { name: "Shubham Kanojiya", designation: "Team Member", instaUrl: "https://www.instagram.com/shubham_.zl/", linkedinUrl: "https://www.linkedin.com/in/shubham-kanojiya-690471298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", phone: "7748835392", image: skull },
  ];

  const emTeamMembers = [
    { name: "Abhiraj Tomar", designation: "Team Head", instaUrl: "https://www.instagram.com/abhiraj_tomar02?igsh=ZnZibXJoZnVzdnhp", linkedinUrl: "https://www.linkedin.com/in/abhiraj-tomar-52a260236", phone: "9205454265", image: memberImages["em (1).jpg"] },
    { name: "Abhinav Pratap", designation: "Team Member", instaUrl: "https://www.instagram.com/16_abhiii", linkedinUrl: "https://www.linkedin.com/in/abhinav-pratap-12b9ab310", phone: "8218011791", image: skull },
    { name: "Anubhav Anand", designation: "Team Member", instaUrl: "", linkedinUrl: "https://www.linkedin.com/in/anubhav-anand-58668529a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", phone: "9123280361", image: skull },
    { name: "Anshu Priya", designation: "Team Member", instaUrl: "https://www.instagram.com/anshu_singh_0503?igsh=MW5ha2pzcXp0MXdiOA==", linkedinUrl: "https://www.linkedin.com/in/anshu-priya-173311333", phone: "7979864746", image: memberImages["em (9).jpg"] },
    { name: "Ashish Sinha", designation: "Team Member", instaUrl: "https://www.instagram.com/ashish_sinha_31?igsh=bGQxdHY4cXpvOHpz", linkedinUrl: "https://www.linkedin.com/in/ashish-sinha-283667328", phone: "8318895695", image: memberImages["em (7).jpg"] },
    { name: "Akshat Keshri", designation: "Team Member", instaUrl: "https://www.instagram.com/akshat_keshri_17?igsh=d2pzMzR3anRub3hh", linkedinUrl: "https://www.linkedin.com/in/akshat-keshri-018196274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", phone: "7870720851", image: skull },
    { name: "Debrup Das", designation: "Team Member", instaUrl: "https://www.instagram.com/debrup_29?igsh=MTFoNmxja2M0Zzl3dw==", linkedinUrl: "https://www.linkedin.com/in/debrup-das-56517b275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", phone: "9760591901", image: skull },
    { name: "Kushagra Mishra", designation: "Team Member", instaUrl: "https://www.instagram.com/kvshagra", linkedinUrl: "https://www.linkedin.com/in/kushagra-mishra-040212328", phone: "8448726620", image: memberImages["em (6).jpg"] },
    { name: "Madhav Raj Goyal", designation: "Team Member", instaUrl: "https://www.instagram.com/mav_977?igsh=MXNmNnF1cjd4cGEzMA==", linkedinUrl: "https://in.linkedin.com/in/madhav-raj-goyal-98b225326", phone: "8788117282", image: memberImages["em (2).jpg"] },
    { name: "Prachi Priya", designation: "Team Member", instaUrl: "https://www.instagram.com/prachipriya__1234?igsh=MWN3aGZyZDBmcGJvbA==", linkedinUrl: "https://www.linkedin.com/in/prachi-priya-b46156326", phone: "6391814536", image: memberImages["em (3).jpg"] },
    { name: "Sai Yuvraj Bhegde", designation: "Team Member", instaUrl: "None", linkedinUrl: "https://www.linkedin.com/in/sai-bhegde-b3481a312", phone: "9004683346", image: memberImages["em (5).jpg"] },
    { name: "Saurabh Bhagwat", designation: "Team Member", instaUrl: "https://www.instagram.com/lancelot_4306", linkedinUrl: "https://www.linkedin.com/in/saurabh-bhagwat-9b951a313", phone: "9226727113", image: memberImages["em (8).jpg"] },
    { name: "Vedanshi Aryan", designation: "Team Member", instaUrl: "", linkedinUrl: "", phone: "", image: memberImages["em (4).jpg"] }
  ];

  const pcrTeamMembers = [
    { name: "Aditya Bhatt", designation: "Team Head", instaUrl: "https://www.instagram.com/its_aditya.b_205/", linkedinUrl: "https://www.linkedin.com/in/adityabhatt205", phone: "8882896275", image: skull },
    { name: "Chiranjit Saha", designation: "Team Head", instaUrl: "https://www.instagram.com/rising_sun_cs/", linkedinUrl: "www.linkedin.com/in/chiranjit-saha-a3bba5230", phone: "8620870598", image: memberImages["pcr (1).jpg"] },
    { name: "A S Bhavya Priya", designation: "Team Member", instaUrl: "https://www.instagram.com/asbp_._?igsh=YjZ0YzYwd3NmNnBx", linkedinUrl: "https://www.linkedin.com/in/a-s-bhavya-priya-487879341", phone: "6303031936", image: memberImages["pcr (6).jpg"] },
    { name: "Afreen Nesha", designation: "Team Member", instaUrl: "https://www.instagram.com/_afreeeennn_?igsh=MWx3MGh6YXh0NHY0aQ==", linkedinUrl: "https://www.linkedin.com/in/afreen-nesha-21a77631b", phone: "7432820622", image: memberImages["pcr (5).jpg"] },
    { name: "Anvesha Ayushi", designation: "Team Member", instaUrl: "https://www.instagram.com/anveshaayushi?igsh=MWN6djNqeTNlYmcwYQ==", linkedinUrl: "https://www.linkedin.com/in/anvesha-ayushi-548688355", phone: "9667727229", image: memberImages["pcr (4).jpg"] },
    { name: "Aryan Sanjay Singh", designation: "Team Member", instaUrl: "https://www.instagram.com/okaryah?igsh=MTZyc2EwaG15YzFp", linkedinUrl: "https://in.linkedin.com/in/aryan-singh-b5636b284", phone: "6350401614", image: memberImages["pcr (8).jpg"] },
    { name: "Kamireddy Hema Hasini", designation: "Team Member", instaUrl: "https://www.instagram.com/hasini_0604?igsh=eXl5MzhxYjlwMjQy", linkedinUrl: "http://linkedin.com/in/hema-hasini-076208324", phone: "9063733445", image: memberImages["pcr (3).jpg"] },
    { name: "Kausik Vaibhav Patra", designation: "Team Member", instaUrl: "https://www.instagram.com/kvp_unofficial30/?next=%2F", linkedinUrl: "https://www.linkedin.com/in/kausik-vaibhav-patra-b999071b3/", phone: "8018685525", image: memberImages["pcr (9).jpg"] },
    { name: "Sanjana Kumari", designation: "Team Member", instaUrl: "https://www.instagram.com/sanjanamehta660/", linkedinUrl: "https://www.linkedin.com/in/sanjana-kumari-244107325/", phone: "08797123442", image: memberImages["pcr (7).jpg"] },
    { name: "Siddhesh Singh", designation: "Team Member", instaUrl: "https://www.instagram.com/_siddheshsingh?igsh=cGloMnU5azZpZHh0", linkedinUrl: "https://www.linkedin.com/in/siddhesh-singh-1463a1312", phone: "7506087629", image: memberImages["pcr (2).jpg"] }
  ];

  const sponsorTeamMembers = [
    { name: "Kartik Sehgal", designation: "Team Head", instaUrl: "https://www.instagram.com/kartiksehgal_2004/", linkedinUrl: "https://www.linkedin.com/in/kartik-sehgal-b84088259/", phone: "9530590415", image: memberImages["sponsor (2).jpg"] },
    { name: "Anmol Kumar", designation: "Team Member", instaUrl: "https://www.instagram.com/anmol_1308?igsh=MWQ2Z2cxeXF0MzMyMA==", linkedinUrl: "https://www.linkedin.com/in/anmol-kumar-0ab054323", phone: "9313053313", image: memberImages["sponsor (1).jpg"] },
    { name: "Anmol Kumar", designation: "Team Member", instaUrl: "https://www.instagram.com/anmolsingh_2109/?next=%2F", linkedinUrl: "https://www.linkedin.com/in/anmol-kumar-1ba37b324/", phone: "7631648529", image: skull },
    { name: "Semal Priya", designation: "Team Member", instaUrl: "https://www.instagram.com/icdi_semal/", linkedinUrl: "www.linkedin.com/in/semal-priya-21662b336", phone: "7091100696", image: skull }
  ];



  const renderTeamCards = (members) =>
      members.map((member, index) => (
          <TeamCard
              key={index}
              name={member.name}
              designation={member.designation}
              instaUrl={member.instaUrl}
              linkedinUrl={member.linkedinUrl}
              phone={member.phone}
              image={member.image}
          />
      ));

  // ------------------Maybe Dont Change after this-------------------- //
  return (
      <div className="bg-[#FFF5Cf] w-full sm:w-[92.12%] sm:rounded-tr-3xl sm:rounded-br-3xl p-8 pl-15 mb-[100px]">
      {/* Core Team */}
        <TeamInfo
            team_name="core team !!"
            team_description="At the heart of everything we do is the Core Team—our guiding force. They set the vision,
             make strategic decisions, and ensure that every part of the event operates seamlessly. From planning to
             execution, they are the backbone that keeps our mission alive"
        >
          {renderTeamCards(coreTeamMembers)}
        </TeamInfo>

        {/* Technical Team */}
        <TeamInfo
            team_name="tech team !!"
            team_description="Innovation meets execution with our Tech Team. They are the architects behind our digital
             presence, ensuring a seamless user experience, developing interactive platforms, and tackling technical
             challenges with creativity and precision. When it comes to bringing ideas to life, they make the
             impossible possible."
        >
          {renderTeamCards(techTeamMembers)}
        </TeamInfo>

        {/* Marketing Team */}
        <TeamInfo
            team_name="marketing team !!"
            team_description="Creativity fuels the Marketing Team as they shape the identity of our event. Through
            compelling storytelling, impactful designs, and strategic outreach, they amplify our presence, engage
            our audience, and make sure that our vision reaches far and wide."
        >
          {renderTeamCards(marketingTeamMembers)}
        </TeamInfo>

        {/* Event Management Team */}
        <TeamInfo
            team_name="event management team !!"
            team_description="From coordinating schedules to ensuring that every session runs smoothly, the Event
          Management Team is the powerhouse behind the execution of our summit. They are the planners, problem-solvers,
           and crisis managers who ensure that every attendee has an experience to remember."
        >
          {renderTeamCards(emTeamMembers)}
        </TeamInfo>

        {/* Public & Corporate relations Team */}
        <TeamInfo
            team_name="public & corporate relations team !!"
            team_description="The voice of our event, the Public Relations Team, ensures that our message reaches the
          right people at the right time. They manage communication, handle media relations, and create impactful
          narratives that position our summit as a must-attend experience for entrepreneurs, innovators, and leaders
          alike"
        >
          {renderTeamCards(pcrTeamMembers)}
        </TeamInfo>

        {/* sponsorship Team */}
        <TeamInfo
            team_name="sponsorship team !!"
            team_description="Opportunities don’t just happen; they are created by our Sponsorship Team. They work
          tirelessly to bring in valuable partnerships, secure funding, and build meaningful collaborations that take
          our event to the next level. Their efforts help us provide the best resources, experiences, and opportunities
           for our audience."
        >
          {renderTeamCards(sponsorTeamMembers)}
        </TeamInfo>
      </div>
  );
}

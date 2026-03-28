import earlyBird from "../assets/early-bird.png";
import earlyIteration from "../assets/Spec/first iteration.gif";
import screenIteration from "../assets/Spec/talkingGif.gif";
import workingGIF from "../assets/Spec/Slow type.gif";
import dialogV1 from "../assets/Spec/dialogBoxV1.png";
import dialogV2 from "../assets/Spec/dialogBoxV2.png";
import dialogV3 from "../assets/Spec/dialogBoxV3.png";
import dialogV4 from "../assets/Spec/dialogBoxV4.png";

export default function Specialisation() {
  return (
    <div className="">
      <h1 className="text-center my-12 mt-6 text-4xl">Specialisation: Dialog Tool</h1>
      <Section title="Background" image={earlyBird}>
        <p>
          The insperation to make a dialog tool came from Supermassive's Hades II where the dialog changes depening on progress in story, relation to character,
          and what has happend in the previous story. The idea of writing all that dialog and connecting them seems like something that a clean and
          user-friendly tool is necessary. Dialog is also something that is often pushed to the side in game development so having something that 
          can make it easier and iterate to make the best game possible is important
        </p>
      </Section>
      <Section title="Make it work" image={earlyIteration}>
        <p>
          <img src={dialogV1} alt={dialogV1.toString()} className="w-full h-auto mb-4" />
          To work iterativly and early test is something that TGA is pushing and I have learned from previous experiences. 
          So the first step was just to make a system that can print text in console wit the minimum scope of my project.
          The minimum I had for the project was to have the ability to go through a dialog tree, with different speed on dialog and
          if needed options to differnet branches in the dialog tree. A hard coded exemple of the class structure is used to test 
          input, ease of building the tree and look of the dialog speed. ** Insert ealry gif of dialog tree, rightside**
        </p>

        <p>
          The early testing also made it so extra data that previously wasn't considered needed a place to be stored, like the speaker.
          Once the structure was built and tested with how different dialog would connect it was time to connect it to something visual 
          to easy the use of building the trees. This was made in a visual scripting tool as to save time and not reinventing the wheel
          for something that developers already are used to. To use this also makes it so that it can more easly be connected to 
          my groups engine for future projects. The cards that first was added to the visual script was dialog box and criteria.
          The dialog box is what holds what we see on the screen, text, speaker, speed, font, and anything else that has to do
          with the actual written dialog. The criteria is, if wanted, what needs to be fulfilled to have the option of chosing 
          the next dialog. **picture of early stage dialog tree**
        </p>

        <p>
          Once trees could be made it was time to make possilbe to convert the data from the visual script down to the actual dialog tree.
          This was made through nlohmann JSON reader. This made it so some more data needed not only a increasing ID counter for connecting dialog but 
          using the IDs from the visual scritping to connect them. But after that smaller change it was now possible to connect the tree to actual dialog and 
          make a text based choose your own adventure. ** Insert image of hotreloading tree**
        </p>
      </Section>
        
      <Section title="Make it Right" image={screenIteration}>
        <p>
          After the bare minimum of the project was done, visually connect dialog and make it easy to update. It is time to make 
          it something that is actually can be used in projects. First thing make it possible to see on screen. 
          Simply getting the text to appear on screen was not to hard but getting it to look good brings out 
          the scariest thing of all for a programmer, artistic expression. Given that the text is only
          sprites that are rendered in screen space everything that isn't just the text needs some type of 
          adjustment through code. Which made the limitaions to only have it left aligned and in a set precentage of 
          the screen so that the text is always readable on screen. Also necessary to show is the speaker and 
          indication for end of line. To display the options for the next dialog it was put above the just spoken line 
          of dialog, for testing and having it as a visable options. The biggest thing that next can be added
          that will give a lot of emotion to the speaker is different fonts. Adding that was a simple drop down from 
          ImGui with a list of given fonts. For even more personality for the speaker sound for either voiced dialog or just
          a repetable sound woth differnent pitch, similar to banjo kazooie voice linces. ** add final dialog box image**
          <img src={dialogV2} alt={dialogV2.toString()} className="w-full h-auto mb-4" />
          <img src={dialogV3} alt={dialogV3.toString()} className="w-full h-auto mb-4" />
        </p>

        <p>
          Write about dialog tree connections and conditional dialog trees and ranodm what comes next
        </p>
      </Section>

      <Section title="Make it Pretty" image={workingGIF}>
        <p>
          <img src={dialogV4} alt={dialogV4.toString()} className="w-full h-auto mb-4" />
          Improvments and wishlist for future building
        </p>
      </Section>
    </div>
  );
}

function Section({
  title,
  children,
  image,
}: {
  title: string;
  children: React.ReactNode;
  image?: string;
}) {
  return (
    <div className="mb-6 ">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <img src={image} alt={title} className="w-full h-auto mb-4" />
      <div className=" border-gray-300">{children}</div>
    </div>
  );
}

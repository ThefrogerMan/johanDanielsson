import earlyIteration from "../assets/Spec/first iteration.gif";
import screenIteration from "../assets/Spec/talkingGif.gif";
import workingGIF from "../assets/Spec/Slow type.gif";
import walkingGIF from "../assets/Spec/walkingDead.gif";
import walkingForest from "../assets/Spec/dialogForestV1.png";
import dialogV1 from "../assets/Spec/dialogBoxV1.png";
// import dialogV2 from "../assets/Spec/dialogBoxV2.png";
import dialogV3 from "../assets/Spec/dialogBoxV3.png";
import dialogV4 from "../assets/Spec/dialogBoxV4.png";
import dialogV5 from "../assets/Spec/Improvements.png";
import dialogPop from "../assets/Spec/dialogBoxPopUp.png";

export default function Specialisation() {
  return (
    <div className="">
      <h1 className="text-center my-12 mt-6 text-4xl">Specialisation: Dialog Tool</h1>
      <Section title="Background" image={workingGIF}>
        <p>
          The inspiration to make a dialog tool came from Supergiant's Hades II where the dialog changes depending on progress in story, relation to character,
          and what has happened in the previous story. The idea of writing all that dialog and connecting them seems like something that a clean and
          user-friendly tool is necessary. Dialog is also something that is often pushed to the side in game development so having something that
          can make it easier and iterate to make the best game possible is important.
        </p>
      </Section>
      <Section title="Make it work">
        <img src={earlyIteration} alt={earlyIteration.toString()} className="float-right w-1/2 ml-6 mb-4"  />
        <img src={dialogV1} alt={dialogV1.toString()} className="float-right w-1/2 ml-6 mb-4" />

        <p className="min-w-1/4">
          To work iteratively and early tests is something that TGA is pushing and I have learned from previous experiences.
          So the first step was just to make a system that can print text in the console with the minimum scope of my project.
          The minimum I had for the project was to have the ability to go through a dialog tree, with different speed on dialog and
          if needed options to different branches in the dialog tree. A hard coded example of the class structure is used to test
          input, ease of building the tree and look at the dialog speed.
        <br/>
          The early testing also made it so extra data that previously wasn't considered needed a place to be stored, like the speaker.
          Once the structure was built and tested with how different dialog would connect it was time to connect it to something visual
          to ease the use of building the trees. This was made in a visual scripting tool as to save time and not reinventing the wheel
          for something that developers already are used to. To use this also makes it so that it can more easily be connected to
          my group's engine for future projects. The cards that first were added to the visual script were dialog boxes and criteria.
          The dialog box is what holds what we see on the screen, text, speaker, speed, font, and anything else that has to do
          with the actual written dialog. The criteria is, if wanted, what needs to be fulfilled to have the option of choosing
          the next dialog.
        </p>

        <p className="mt-6">
          Once trees could be made it was time to make it possible to convert the data from the visual script down to the actual dialog tree.
          This was made through the nlohmann JSON reader. This made it so some more data needed not only an increasing ID counter for connecting dialog but
          using the IDs from the visual scripting to connect them. But after that smaller change it was now possible to connect the tree to actual dialog and
          make a text based “Choose your own adventure”.
        </p>
      </Section>
        
      <Section title="Make it Right" image={screenIteration}>
        <p className="min-w-1/2">
          <img src={dialogV3} alt={dialogV3.toString()} className="float-right w-1/2 ml-6 mb-4" />
          <img src={dialogPop} alt={dialogPop.toString()} className="float-right w-1/2 ml-6 mb-4" />
          After the bare minimum of the project was done, visually connect dialog and make it easy to update. It is time to make
          it into something that actually can be used in projects. The first thing on the list is make it visible on screen.
          Simply getting the text to appear on screen was not to hard but getting it to look good brings out
          the scariest thing of all for a programmer, artistic expression. Given that the text is only
          sprites that are rendered in screen space everything that isn't just the text needs some type of
          adjustment through code. Which made the limitations to only have it left aligned and in a set percentage of
          the screen so that the text is always readable on screen. It was also time to put the next to the dialog and make some nicer 
          simple logic for the end of the dialog indicator. Given that no buttons are connected I chose to put the options for the next dialog it was put above the just spoken line
          of dialog. 
        <br/>
          Now that all the necessities are connected the biggest thing that could be added next, that will give a lot of emotion to the speaker, 
          is the option of different fonts. Adding that was a simple drop down from
          ImGui with a list of given fonts in the engine. For even more personality for the speaker sound for either voiced dialog or just
          a repeatable sound with different pitch, similar to banjo kazooie voice lines.
        </p>
        <p>
          The dialog trees with many different options quickly turn into huge hard to read trees. To make this easier a treemanager is 
          made that also can be visually made in the same tool. It uses a lot of the same technology as the dialog boxes but now it uses a 
          more hierarchical system. If the first criteria is met it goes into the first tree, for example like in stardew valley the dialog that appears has differences depending on the level of relation to the character. 
          <img src={walkingForest} alt={walkingForest.toString()} className="float-right w-1/2 ml-6 mb-4" />
        <br/>

          These collections of trees, or forests if you will, can then be called upon and used as dialog checks every time the player comes back to base and gets 
          new information or talk about what just has happened in the world or story of the game.
        </p>
      </Section>

      <Section title="Make it Good" image={walkingGIF}>
        
        <p className="min-w-2/4">
        <img src={dialogV4} alt={dialogV4.toString()} className="float-right w-1/2 ml-6 mb-4" />
          The biggest part of the tool development now is to make it easier and nicer to use. 
          Highest on that list is making a better struct for the character so it can be used more effectively making the dialog boxes and not making all the same settings multiple times. 
          The dialog box itself has ballooned out heavily and become bloated with data. This visually should be hidden at least if it's optional so having a drop down menu for font, sound and similar options would make the trees easier to read. 
          Smaller changes also include a checkbox for making letters appear for the same length as the voice lined dialog. Color picking / pattern per character to quicker see which box is who's.
          As well as a lot of the common document tools that people would be used to.
        <img src={dialogV5} alt={dialogV5.toString()} className="float-right w-1/2 ml-6 mb-4" />
        <br/>
        <br/>
          For the forests having the option to go into the trees and make changes would speed up the process immensely. 
          Just the option to have multiple scripts open at the same time would make the process less tedious and more enjoyable. 
          Making both the tree boxes and dialog boxes dynamic with available options and not just a static four would also make it clearer what is possible.
        </p>


           <p className="min-w-2/4">
           I am part of The Game Assembly's internship program. As per the agreement between Games Industry and The Game Assembly, neither student nor company may be in contact with one another regarding internships before April 15th. Any internship offers can be made on April 27th, at the earliest.
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
      <img src={image} alt={""} className="w-full h-auto mb-4" />
      <div className=" border-gray-300">{children}</div>
    </div>
  );
}

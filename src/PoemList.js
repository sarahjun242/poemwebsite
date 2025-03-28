import { useState } from "react";
import "./styles.css";

const images = [
  {
    src: "/jellyfish.jpg",
    leftDescription: "03.15.2025",
    rightDescription: "home",
    text: `<span style="color: yellow;">home</span>\n\n
i loved you the way you learn a room in the dark —\n 
by instinct, by memory, \n 
by the shape of things that used to feel safe.\n\n

we were careful with each other.\n
gentle\n 
as if tenderness could do the heavy lifting\n 
as if softness alone \n 
could hold up the roof when the rain came in.\n\n

you gave me love like a quiet house —\n
warm, \n
but with all the lights off\n
and i convinced myself\n 
that was enough.\n\n 

i didn't want to ask for more,\n
because you weren't doing anything wrong\n
and i didn't want to be the kind of person\n 
who leaves someone behind again.\n\n

but love\n 
doesn't always reach the places\n 
where longing lives.\n 
and kindness\n
can still be a cage\n 
if no one hears you pacing.\n\n 

so i left.\n 
not because i stopped loving you,\n 
but because i needed to hear my footsteps\n
in a home that no longer knew my name. \n\n 

and maybe that's what no one tells you —\n 
that sometimes,\n 
love is a beautiful room\n 
with no door\n 
and no place to sit.\n 
    `
  },
  {
    src: "/rat.jpg",
    leftDescription: "02.10.2025",
    rightDescription: "not nothing",
    text: `<span style="color: yellow;">not nothing</span>\n\n
my friend died in middle school. \n
we spent every recess together.\n
ran in circles like time couldn't catch us.\n
then one day, he wasn't there\n
and nobody said his name for a long time.\n\n
my middle school dean died a year later.\n
she used to yell at me in her office.\n
i think she meant well.\n
i think she cared, in a way i didn't understand yet.\n
then she was gone too.\n\n
my mom's grandpa — \n
i barely remember him, except that he used to tug at my nose.\n
said he wanted to make it nice.\n
i think he died when i was in elementary school.\n
i remember being confused.\n
i remember watching the adults cry\n
and wondering if i was supposed to.\n\n
my dad's grandpa died my second year of college.\n
i didn't cry right away.\n
i said, "that's really sad," and meant it\n
but i had an exam the next morning.\n\n
these are names i don't say out loud.\n
not because i forgot them — \n
but because i don't know where they go now.\n\n
they don't belong in everyday conversation.\n
they show up in passing thoughts, in the quiet between tasks,\n
in the moments i don't expect\n
and then they disappear again.\n\n
it's not the kind of grief that split me open.\n
it didn't change the course of my life\n
but it left something behind: \n
a stillness.\n
a space i didn't have before —\n
it made things quieter.\n
and it made me quieter too.\n\n\n\n\n
i've wondered if this kind of grief taught me anything —\n
anything worth saying out loud.\n\n
but maybe the truth is simpler than i thought: \n
maybe i only learned how to carry silence. \n\n
how to feel something and still move through a day.\n
how to function while slightly heavier.\n
how to hold a memory without needing to explain it.\n\n
and maybe that's what growing up is —\n
grieving people you weren't finished knowing\n
and learning how to miss them\n
without ever fully understanding why.`
  },
  {
    src: "/fish.jpg",
    leftDescription: "03.23.2025",
    rightDescription: "dear sister",
    text: `<span style="color: yellow;">dear sister</span>\n\n
we used to talk in whispers \n
under our favorite pink blanket at 1am, \n
spilling the craziest church tea,\n
giggling until our stomachs hurt.\n
back then, we believed we'd never drift\n
that forever was stitched into our blood.\n\n
now, i rehearse conversations i never start.\n
i scroll past your name more times than i can count\n
i watch your stories like a stranger,\n
quietly trying to piece together \n
the version of you i no longer know.\n
you're laughing —\n
but not with me.\n\n
i don't know your favorite song anymore\n
and you don't know i cried\n
when you left a day early without a hug,\n
or when you said you couldn't watch me compete.\n
you said you were cheering me on —\n
but you weren't there.\n\n
we were all we had once\n
but now, i don't reach out,\n
and neither do you.\n\n
i think i'm learning \n
how to live with the quiet between us\n
and maybe this is just how it ends.`
  }
];

export default function PoemDisplay() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullScreen, setShowFullScreen] = useState(false);

  const handlePrevImage = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleImageClick = () => {
    setShowFullScreen(true);
  };

  const handleCloseFullScreen = () => {
    setShowFullScreen(false);
  };

  return (
    <div className="poem-container">
      {!showFullScreen ? (
        <>
          <div className="image-wrapper">
            <button className="arrow-left" onClick={handlePrevImage}>
              ◀
            </button>

            <img
              src={images[currentIndex].src}
              alt="Poem Image"
              className="poem-image"
              onClick={handleImageClick}
            />

            <button className="arrow-right" onClick={handleNextImage}>
              ▶
            </button>

            <div className="text-container"
                  style = {{ 
                    marginTop: "32px", 
                    display: "flex", 
                    justifyContent: "center", 
                    alignItems: "center", 
                    width: "100%",
                    gap: "0px",
                  }}
            
            >
              <p className="left-description"
                  style = {{
                    paddingLeft: 0, 
                    marginLeft: 0,
                    marginRight: "0", 
                    textAlign: 'center', 
                    width: "auto", 
                    display: "inline-block"
                  }}
              >
                {images[currentIndex].leftDescription}
              </p>
              <p className="right-description">
                {images[currentIndex].rightDescription}
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="full-screen" onClick={handleCloseFullScreen}>
          <p
            className="full-screen-text"
            dangerouslySetInnerHTML={{
              __html: images[currentIndex].text.replace(/\n/g, "<br/>"),
            }}
          ></p>
        </div>
      )}
    </div>
  );
}

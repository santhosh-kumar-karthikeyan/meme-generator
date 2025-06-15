import { useState } from "react";
import "./Meme.css";

function Meme() {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "walk into Mordor",
        imgUrl: "http://i.imgflip.com/1bij.jpg"
    });
    function setText(evt) {
        const { name, value } = evt.currentTarget;
        setMeme(oldMeme => ({
            ...oldMeme,
            [name]: value
        }));
    }
    function handleSubmit() {
        console.log("Submitted");
    }
    return (
        <main>
            <form className="form" action={handleSubmit}>
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={setText}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={setText}
                        value={meme.bottomText}
                    />
                </label>
                <button>Get a new meme image 🖼</button>
            </form>
            <div className="meme">
                <img src={meme.imgUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}

export default Meme;
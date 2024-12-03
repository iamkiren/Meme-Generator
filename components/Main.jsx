import React from "react"

export default function Main() {
   
    const[memeInfo, setMemeInfo] = React.useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        image: "http://i.imgflip.com/1bij.jpg"
    })

    function handleChange(event) {
        const { name, value } = event.target
        setMemeInfo(prevMemeInfo => ({
            ...prevMemeInfo,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        value={memeInfo.topText}
                        onChange={handleChange}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        value={memeInfo.bottomText}
                        onChange={handleChange}
                    />
                </label>
                <button>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={memeInfo.image} />
                <span className="top">{memeInfo.topText}</span>
                <span className="bottom">{memeInfo.bottomText}</span>
            </div>
        </main>
    )
}
import React from "react"

export default function Main() {
   
    const[memeInfo, setMemeInfo] = React.useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        image: "http://i.imgflip.com/1bij.jpg"
    })

    
    const [allMemes, setAllMemes] = React.useState([])


    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])


    function handleChange(event) {
        const { name, value } = event.target
        setMemeInfo(prevMemeInfo => ({
            ...prevMemeInfo,
            [name]: value
        }))
    }

    function generateImage(){
        const randomImageNum = Math.floor(Math.random()*allMemes.length) +1;
        const imgURL = allMemes[randomImageNum].url;
        setMemeInfo(prevMeme => ({
            ...prevMeme,
            image: imgURL
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
                <button onClick={generateImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={memeInfo.image} />
                <span className="top">{memeInfo.topText}</span>
                <span className="bottom">{memeInfo.bottomText}</span>
            </div>
        </main>
    )
}
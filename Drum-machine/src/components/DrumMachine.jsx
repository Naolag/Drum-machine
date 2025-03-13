import React, { useState } from "react";

const DrumMachine = () => {
    const [isOn, setIsOn] = useState(false);
    const [isBankOn, setBankOn] = useState(false);
    const [volume, setVolume] = useState(50);
    const [display, setDisplay] = useState(" ");

    const handleDisplay = (e) => {
        setDisplay(e);
        setTimeout(() => setDisplay(" "), 1000);
    };
        const heaterKit = [
            {key:"Q",  sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3", name:"Heater 1"},
            {key:"W",  sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3", name:"Heater 2"},
            {key:"E",  sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3", name:"Heater 3"},
            {key:"A",  sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3", name:"Heater 4"},
            {key:"S",  sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3", name:"Clap"},
            {key:"D",  sound: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3", name:"Open HH"},
            {key:"Z",  sound: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3", name:"Kick n' Hat"},
            {key:"X",  sound: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3", name:"Kick"},
            {key:"C",  sound: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3 1 ", name:"Closed HH"},
        ];
          
          const pianoKit =[
            {key:"Q",  sound: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3", name:"Chord 1"},
            {key:"W",  sound: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3", name:"Chord 2"},
            {key:"E",  sound: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3", name:"Chord 3"},
            {key:"A",  sound: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3", name:"Shaker"},
            {key:"S",  sound: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3", name:"Open HH"},
            {key:"D",  sound: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3", name:"Closed HH"},
            {key:"Z",  sound: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3", name:"Punchy Kick"},
            {key:"X",  sound: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3", name:"Side Stick"},
            {key:"C",  sound: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3", name:"Snare"},
        ]; 
          
    const handleClick = (e) => {
        if(!isOn) return;
        const buttonId = e.target.id;
        let kit;
        isBankOn ? kit=pianoKit : kit=heaterKit ;
        const usedKit=kit.find(item=>item.key==buttonId);
        const audio=new Audio(usedKit.sound);
        audio.currentTime=0;
        audio.volume=volume/100;
        audio.play();
        setDisplay(usedKit.name);


    };

    return (
        <div id="drum-machine" className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: "gray" }}>
            <div id="display" className="p-5 d-flex" style={{ border: "5px solid orange", backgroundColor: "#b3b3b3" }}>
                <div id="pads">
                    <div className="col">
                        <button id="Q" className="drum-pad btn btn-lg" onClick={handleClick} style={{ backgroundColor: "gray", margin: "10px", boxShadow: "black 3px 3px 5px", width: "100px", height: "80px" }}>Q</button>
                        <button id="W" className="drum-pad btn btn-lg" onClick={handleClick} style={{ backgroundColor: "gray", margin: "10px", boxShadow: "black 3px 3px 5px", width: "100px", height: "80px" }}>W</button>
                        <button id="E" className="drum-pad btn btn-lg" onClick={handleClick} style={{ backgroundColor: "gray", margin: "10px", boxShadow: "black 3px 3px 5px", width: "100px", height: "80px" }}>E</button>
                    </div>
                    <div className="col">
                        <button id="A" className="drum-pad btn btn-lg" onClick={handleClick} style={{ backgroundColor: "gray", margin: "10px", boxShadow: "black 3px 3px 5px", width: "100px", height: "80px" }}>A</button>
                        <button id="S" className="drum-pad btn btn-lg" onClick={handleClick} style={{ backgroundColor: "gray", margin: "10px", boxShadow: "black 3px 3px 5px", width: "100px", height: "80px" }}>S</button>
                        <button id="D" className="drum-pad btn btn-lg" onClick={handleClick} style={{ backgroundColor: "gray", margin: "10px", boxShadow: "black 3px 3px 5px", width: "100px", height: "80px" }}>D</button>
                    </div>
                    <div className="col">
                        <button id="Z" className="drum-pad btn btn-lg" onClick={handleClick} style={{ backgroundColor: "gray", margin: "10px", boxShadow: "black 3px 3px 5px", width: "100px", height: "80px" }}>Z</button>
                        <button id="X" className="drum-pad btn btn-lg" onClick={handleClick} style={{ backgroundColor: "gray", margin: "10px", boxShadow: "black 3px 3px 5px", width: "100px", height: "80px" }}>X</button>
                        <button id="C" className="drum-pad btn btn-lg" onClick={handleClick} style={{ backgroundColor: "gray", margin: "10px", boxShadow: "black 3px 3px 5px", width: "100px", height: "80px" }}>C</button>
                    </div>
                </div>
                <div className="m-5 d-flex align-items-center justify-content-center flex-column">
                    <strong>Power</strong>
                    <div className="border border-dark d-flex align-items-center justify"
                        style={{ width: "50px", height: "25px", backgroundColor: "black" }}
                        onClick={() => setIsOn(!isOn)} id="power">
                        <div style={{
                            width: "25px",
                            height: "20px", backgroundColor: "blue",
                            marginLeft: isOn ? "25px" : "0px",
                            transition: "0.3s"
                        }}
                        ></div>
                    </div>
                    <div>
                        <textarea readOnly
                            value={isOn ? display : " "}
                            style={{
                                width: "200px",
                                height: "60px", backgroundColor: "gray",
                                marginTop: "10px",
                                textAlign: "center",
                                fontSize: "14px",
                                fontWeight: "bold",
                                color: "black",
                                border: "2px solid gray",
                                borderRadius: "5px",
                                resize: "none",
                                lineHeight: "50px",
                                overflow: "hidden"
                            }} />
                    </div>
                    <div className="d-flex align-items-center" style={{ width: "300px", height: "20px", backgroundColor: "white" }}>
                        <input type="range"
                            webkit-slider-thumb
                            min="0"
                            max="100"
                            value={volume}
                            onChange={(e) => {
                                setVolume(e.target.value);
                                setDisplay("volume: " + e.target.value);
                                setTimeout(() => setDisplay(" "), 1000);
                            }}
                            disabled={!isOn}
                            style={{
                                width: "300px",
                                height: "8px",
                                appearance: "none",
                                cursor: "col-resize",
                                borderRadius: "5px",
                                backgroundColor: "black"
                            }}

                        />
                    </div>
                    <strong>Bank</strong>
                    <div id="bank"
                        className="border border-dark d-flex align-items-center justify"
                        style={{ width: "50px", height: "25px", backgroundColor: "black" }}
                        onClick={() => {
                            if (isOn) {
                                setBankOn(!isBankOn);
                                isBankOn ? setDisplay("Heater kit") : setDisplay("Smooth Piano Kit");
                            }
                        }}>
                        <div style={{
                            width: "25px",
                            height: "20px",
                            backgroundColor: "blue",
                            marginLeft: isBankOn ? "25px" : "0PX",
                            transition: "0.3s"
                        }}>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default DrumMachine;
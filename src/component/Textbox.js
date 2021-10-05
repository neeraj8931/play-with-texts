import React, {useState} from 'react'

export default function Textbox() {

    const [characterCounts,setCharactercount]=useState(0);
    const [wordCounts,setWordcount]=useState(0);
    const [textValue,setTextValue]=useState("");
    const [initialText,setinitialText]=useState("");
    const [copyButtonText,setCopyButtonText]=useState("Copy Text")
    let capitalize=()=>{
        let capitalizeText=initialText.toLowerCase().split(' ');
        console.log(capitalizeText);
        let newCapitalizeText=capitalizeText.map(function(word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
          }).join(' ');
          console.log(newCapitalizeText);
          setTextValue(newCapitalizeText);
    }
    let lowercase=()=>{
        console.log(textValue);
        setTextValue(textValue.toLowerCase());
    }
    let cawabcase=()=>{
        let cawabText=initialText.toLowerCase().split(' ');
        console.log(cawabText);
        let newCawabText=cawabText.join('-');
          console.log(newCawabText);
          setTextValue(newCawabText);
    }
    let camelcase=()=>{
        let camelcasText=initialText.toLowerCase().split(' ');
        console.log(camelcasText);
        let newCamelcasText=camelcasText.map(function(word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
          }).join('');;
          console.log(newCamelcasText);
          setTextValue(newCamelcasText);
    }
    let capital=()=>{
        setTextValue(initialText.toUpperCase());
    }
    let initial=()=>{
        setTextValue(initialText);
    }
    return (
        <>
        <div className="col-12 col-sm-12 col-md-9">
        <div className="container text-box">
            <textarea id="text-area" value={textValue} className="text-area" placeholder="Write your text here..." onChange={(e)=>{
                setCharactercount(e.target.value.length);
                let words=e.target.value.split(" ") ;
                let numberOfWords=words.length;
                setWordcount(numberOfWords); 
                setTextValue(e.target.value);
                setinitialText(e.target.value);
                setCopyButtonText("Copy");
            
            }} ></textarea> 
            <div className="d-flex justify-content-between">
                <p className="m-3"><strong>No. Of characters :</strong> {characterCounts}</p>
                <p className="m-3"><strong>No. Of Words :</strong> {wordCounts}</p>
                <button className="btn button-primary" onClick={(e)=>{
                    var copyText = document.querySelector("#text-area");
                    copyText.select();
                    document.execCommand("copy");
                    setCopyButtonText("Copied");
                    window.getSelection().removeAllRanges();
                }}>{copyButtonText} </button>
        </div>
        
        </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3">
                <div className="functional-group">
                <h1 className="text-center">Play with Texts</h1>
                    <div className="text-center utility-buttons ">
                        <button className="btn button-secondary" onClick={capitalize}> Capitalize </button>
                        <button className="btn button-secondary" onClick={lowercase}> lower case </button>
                        <button className="btn button-secondary" onClick={cawabcase}> cawab-case </button>
                        <button className="btn button-secondary" onClick={camelcase}> CamelCase </button>
                        <button className="btn button-secondary" onClick={capital}> CAPITAL </button>
                        <button className="btn button-secondary" onClick={initial}> Original </button>
                    </div>
                </div>
        </div>
        </>
    )
}

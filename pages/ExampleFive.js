import { useEffect, useState } from "react"
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// we want to setup a counter
        // after every one second the number increases by 1
        // we want to display that number on screen as it screens
        // no button is needed it will update 
export default function ExampleFive() {
        const [count, setCounter] = useState(0);
    
        
        useEffect(() => {
            const interval = setInterval(() => {
                    setCounter(count + 1);
                }, 1000);
        
            return () => clearInterval(interval);
        }, [count])

return(
    <>
    <Header/>
        <div>
            <h1>number counter</h1>
            <h3>example using interval</h3>
            <div>{count}</div>
        </div>
        <Footer/>
    </>
        )
    }
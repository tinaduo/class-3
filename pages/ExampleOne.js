import { useEffect, useState } from "react"
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ExampleOne() {
    const [number, setNumber] = useState(0);

    /* usually this will cause an infinti loop so its best not to do this
    * incase your code breaks
    * code on page will run two time. 
    * once to render what we want and another is to render strict mode
    * to find any common bugs */
    useEffect(() => {
        console.log(number);
    }, []);
    
    return(
        <>
            <Header/>
            <main>
                <h1>Example 1</h1>
                <div>Infinti loop</div>
                    {number}
            </main>
            <Footer/>
        </>
    )
}
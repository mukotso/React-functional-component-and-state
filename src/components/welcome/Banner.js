import React, {useEffect, useState} from "react";
import LearnMore from "./LearnMore";
import Header from "./Header";
import ReactHooks from "./ReactHooks";

const BannerPage = () => {
    // useState
    const [show, setShow] = useState(false);
    let [count, setCount] = useState(0);

    //pass a function and a dependency array to the useEffect react hook and an optional clean up function
    useEffect(()=>{
        //this function will always be called on initial render and when the value of the dependency array gets changed
        setCount((count)=>count+1);

        return () => {

            //clear interval this will be called when the component unmounts

        }

    },[show])

    function handleClick() {
        setShow(!show)
    }


    return (
        <>
            <Header link1={"About React"} link2={"Getting Started"} link3={"Master class"}/>

            <h2 className={"bg-gray-100 font-bold text-2xl border-2 p-4 my-5 py-6 flex justify-center"}>WELCOME TO
                FUNCTIONAL
                COMPONENTS</h2>

            <p className={"bg-gray-100 border-2 p-4 my-5 py-6 flex justify-center"}>Functional components are some of
                the more common components that will come across
                while working in
                React. These are simply JavaScript functions. We can create a functional component to React by
                writing a JavaScript function. These functions may or may not receive data as parameters. In the
                functional Components, the return value is the JSX code to render to the DOM tree.
            </p>

            <ReactHooks/>

            <button onClick={handleClick}
                    className={"bg-primary hover:bg-white hover:text-black hover:bg-green-200  text-white rounded p-2 flex justify-center"}>

                {/*//conditional rendering*/}
                {show ? 'See Less' : 'See More'}
            </button>

            <button >You have Clicked {count} times</button>

            {/*// conditional rendering*/}

            {show && <LearnMore/>}

        </>
    );
}
export default BannerPage;

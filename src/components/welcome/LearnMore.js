import React from "react";

const LearnMore = ()=>{
    return (
        <>
                <p className={"bg-gray-100 border-2 p-4 my-5 py-6 flex justify-center"}>Functional components do not have
                    access to dedicated state variables like class-based components. The
                    only “state” that a functional component effectively has access to are the props passed to it from its
                    parent component. ReactJS has access to a special hook called useState() that can be used for giving the
                    illusion of working with the state in functional components. The useState() is used to initialize only
                    one state variable to initialize multiple state variables, multiple useState() declarations are
                    required. The first value returned is the initial value of the state variable, while the second value
                    returned is a reference to the function that updates it. When the state variable needs to be updated, it
                    can be done by calling the update function and by updating the state variable directly inside it.
                </p>

                <p className={"bg-gray-100 border-2 p-4 my-5 py-6 flex justify-center"}>
                    Functional components do not have access to lifecycle functions like class-based components do since
                    lifecycle functions need to be defined within the boundaries of a class. If lifecycle functions need to
                    be used with functional components, a special React hook called useEffect() needs to be used. It is
                    worth noting that useEffect() isn’t an exact duplicate of the lifecycle functions – it works and behaves
                    in a slightly different manner.
                </p>

        </>
    );
}

export default LearnMore;
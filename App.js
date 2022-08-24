import React from "react"
import Header from "./components/Header"
import Main from "./components/Main"

export default function App(props) {
    return (
        <section className="container">
            <Header />
            <Main />
        </section>
    )
}
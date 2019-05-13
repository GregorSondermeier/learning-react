import React from "react";
import "./Header.scss";

// the shape of the props
interface MzHeaderProps {
    mzFoo: string;
}

// State is never set so we use the '{}' type.
export class MzHeader extends React.Component<MzHeaderProps, {}> {

    private foo: string;

    constructor(props: MzHeaderProps) {
        super(props);
        this.foo = props.mzFoo;
    }


    render(): React.ReactNode {
        return (
            <header className="MzHeader">
                <nav className="MzNav">
                    <ul>
                        <li>
                            <a href="https://www.goodreads.com/"
                               target="_blank"
                               rel="noopener noreferrer">
                                Goodreads
                            </a>
                        </li>
                        <li>
                            <a href="https://www.imdb.com/"
                               target="_blank"
                               rel="noopener noreferrer">
                                IMDb
                            </a>
                        </li>
                        <li>
                            <a href="https://www.google.com/"
                               target="_blank"
                               rel="noopener noreferrer">
                                Google
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

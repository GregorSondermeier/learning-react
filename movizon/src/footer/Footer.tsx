import React from "react";
import "./Footer.scss";

// the shape of the props
interface MzFooterProps {
    mzFoo: string;
}

// State is never set so we use the '{}' type.
export class MzFooter extends React.Component<MzFooterProps, {}> {

    private foo: string;

    constructor(props: MzFooterProps) {
        super(props);
        this.foo = props.mzFoo;
    }

    render(): React.ReactNode {
        return (
            <footer className="MzFooter">
                <p className="text-center">
                    Gregor Sondermeier
                    |
                    <a href="mailto:gregor.sondermeier.github@gmail.com"
                       target="_blank"
                       rel="noopener noreferrer">E-Mail</a>
                    |
                    <a href="https://github.com/GregorSondermeier/"
                       target="_blank"
                       rel="noopener noreferrer">GitHub</a>
                    |
                    <a href="https://xing.to/gsondermeier"
                       target="_blank"
                       rel="noopener noreferrer">Xing</a>
                    |
                    <a href="https://www.linkedin.com/in/gregor-sondermeier/"
                       target="_blank"
                       rel="noopener noreferrer">LinkedIn</a>
                </p>
            </footer>
        );
    }
}

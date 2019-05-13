import React from "react";
import "./Header.scss";

interface MzHeaderProps {
    mzFoo: string;
}

// 'MzHeaderProps' describes the shape of props.
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
                {this.foo}
            </header>
        );
    }
}

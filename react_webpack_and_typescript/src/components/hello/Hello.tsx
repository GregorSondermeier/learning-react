import * as React from "react";

export interface GscHelloProps {
    gspCompiler: string;
    gspFramework: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class GscHello extends React.Component<GscHelloProps, {}> {
    render() {
        return <h1>Hello from {this.props.gspCompiler} and {this.props.gspFramework}!</h1>;
    }
}
